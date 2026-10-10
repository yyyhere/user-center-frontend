export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },

  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '注册',
        path: '/user/register',
        component: './user/register',
      },
    ],
  },

  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },

  // {
  //   path: '/admin',
  //   name: '管理页',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     // {
  //     //   path: '/admin/sub-page',
  //     //   name: '二级管理页',
  //     //   component: './Admin',
  //     // },
  //
  //     {
  //       path: '/admin/user-manage',
  //       name: '用户管理',
  //       component: './Admin/user-manage',
  //     },
  //   ],
  // },

  {
    path: '/admin',
    name: '用户管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin/user-manage',
  },

  // {
  //   name: '查询表格',
  //   icon: 'table',
  //   path: '/list',
  //   component: './table-list',
  // },

  {
    path: '/',
    redirect: '/welcome',
  },

  {
    component: './exception/404',
    layout: false,
    path: './*',
  },
];
