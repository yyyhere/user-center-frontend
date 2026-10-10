import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Image } from 'antd';
import React, { useRef } from 'react';
import { searchUsers } from '@/services/ant-design-pro/api';

const UserManage: React.FC = () => {
  const actionRef = useRef<ActionType | null>(null);

  const columns: ProColumns<API.CurrentUser>[] = [
    { title: 'ID', dataIndex: 'id', width: 70, search: false },
    { title: '用户名', dataIndex: 'userName', ellipsis: true, search: false },
    { title: '账户', dataIndex: 'userAccount', ellipsis: true, search: false },
    {
      title: '头像',
      dataIndex: 'avatarUrl',
      search: false,
      render: (_, record) => <Image width={56} src={record.avatarUrl} />,
    },
    { title: '邮箱', dataIndex: 'email', ellipsis: true, search: false },
    { title: '性别', dataIndex: 'gender', width: 70, search: false },
    { title: '状态', dataIndex: 'status', width: 70, search: false },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      search: false,
      valueType: 'select',
      valueEnum: {
        0: { text: '普通用户', status: 'Default' },
        1: { text: '管理员', status: 'Success' },
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CurrentUser>
        headerTitle="用户管理"
        actionRef={actionRef}
        rowKey="id"
        search={false}
        columns={columns}
        request={async () => {
          const response = await searchUsers();
          return { data: response.data ?? [], success: true };
        }}
      />
    </PageContainer>
  );
};

export default UserManage;
