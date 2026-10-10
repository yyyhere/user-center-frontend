import { PageContainer } from '@ant-design/pro-components';
import { Card, Space, Typography } from 'antd';
import React from 'react';

const Welcome: React.FC = () => (
  <PageContainer title="尊敬的用户你好">
    <Card>
      <Space direction="vertical" size="middle">
        <Typography.Paragraph>
          注册成功之后，在“用户管理”页面会看到自己注册的账号。（“用户管理”页面需要用“管理者”账号密码登录，才会显示）
        </Typography.Paragraph>

        <Typography.Paragraph>
          管理者账号：<Typography.Text strong>manager</Typography.Text>
          {'　'}密码：
          <Typography.Text strong>This is manager password</Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>欢迎再次访问。</Typography.Paragraph>
        <Typography.Paragraph>
          本网站是作者 @杨小姐 的首次开发上线。
          <br />
          前端的 34% 使用了 ai 许愿式开发。
          <br />
          后端是纯手搓。
          <br />
          完整代码已上传 GitHub，点击页脚即可看到。
          <br />
          仅用于自己学习。
          <br />
          后续会进一步增加功能。
        </Typography.Paragraph>
      </Space>
    </Card>
  </PageContainer>
);

export default Welcome;
