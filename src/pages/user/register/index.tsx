import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { Helmet } from '@umijs/max';

import { App, Tabs } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { Footer } from '@/components';
import { SYSTEM_LOGO } from '@/constant';
import { register } from '@/services/ant-design-pro/api';
import Settings from '../../../../config/defaultSettings';

/**
 * Validate redirect URL to prevent open redirect attacks.
 * Only allow same-origin relative paths starting with '/'.
 */
// const getSafeRedirectUrl = (redirect: string | null): string => {
//   if (!redirect?.startsWith('/')) return '/';
//
//   if (redirect.startsWith('//')) return '/';
//
//   try {
//     const parsed = new URL(redirect, window.location.origin);
//     if (parsed.origin !== window.location.origin) return '/';
//     return `${parsed.pathname}${parsed.search}${parsed.hash}`;
//   } catch {
//     return '/';
//   }
// };

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => {
//   return (
//     <Alert
//       style={{
//         marginBottom: 24,
//       }}
//       title={content}
//       type="error"
//       showIcon
//     />
//   );
// };

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { styles } = useStyles();
  const { message } = App.useApp();

  // 表单提交
  const handleSubmit = async (values: API.RegisterParams) => {
    // 校验
    // 1、不能为空
    // 2、账号长度不能小于 4
    // 3、密码长度不能小于 8

    const response = await register(values);
    if (!response.data || response.data <= 0) {
      throw new Error(response.description || response.message || '注册失败');
    }

    message.success(response.message || '注册成功！');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const urlParams = new URL(window.location.href).searchParams;
    const redirectUrl = urlParams.get('redirect') || '/';
    window.location.href =
      '/user/login/?redirect=' + encodeURIComponent(redirectUrl);
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          注册
          {Settings.title && ` - ${Settings.title}`}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO} />}
          title="用户管理中心"
          // subTitle={'流川枫是 SD 里最具影响力的球员'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <div style={{ height: '50px' }} />

          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账号密码注册',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账号，长度不小于 4 位'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                  {
                    min: 4,
                    type: 'string',
                    message: '账号长度不能小于 4 位',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码，长度不小于 8 位'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于 8 位',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '确认密码长度不能小于 8 位',
                  },
                ]}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

// 写 你好 的代码
// const Page = () => {
//   return <h1 style={{ fontSize: '80px' }}>你好</h1>;
// };
//
// export default Page;
