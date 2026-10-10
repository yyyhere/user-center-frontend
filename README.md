# 用户管理中心（前端）

这是一个个人学习项目的前端部分，提供用户注册、登录和管理员用户列表等功能。项目基于 Ant Design Pro 改造，后端为独立的 Spring Boot 服务。

## 功能

- 用户注册：使用账号和密码创建用户。
- 用户登录与注销：通过后端 Session 维护登录状态。
- 当前用户信息：读取当前登录用户并在前端维护登录状态。
- 管理员用户列表：管理员可以查看已注册用户的信息。列表页面不提供编辑或删除操作。
- 统一请求处理：识别后端 `BaseResponse` 中的业务状态码，显示错误消息；未登录时跳转到登录页。
- 欢迎页：介绍项目和作者信息。

## 技术栈

- React 19
- TypeScript
- Umi Max 4 （那碗饭）
- Ant Design
- Ant Design Pro V6
- Ant Design Pro Components

## 参考官网

重点参考官网 https://preview.pro.ant.design/welcome/

## 环境要求

- Node.js 22 或更高版本
- npm
- 可访问的用户中心后端服务

## 本地运行

进入前端项目目录并安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm start
```

开发服务器通常运行在 `http://localhost:8000`；以终端输出的地址为准。

开发环境的 `/api/` 请求会由 Umi 代理到 `http://localhost:8080`。启动前请先运行后端，并确认后端可通过 `/api` 上下文路径访问。

## 页面路由

| 路径 | 页面 | 说明 |
| --- | --- | --- |
| `/user/login` | 登录 | 使用账号和密码登录 |
| `/user/register` | 注册 | 创建普通用户账号 |
| `/welcome` | 欢迎页 | 项目介绍 |
| `/admin` | 用户管理 | 管理员查看用户列表 |

## 后端接口

前端通过以下接口与用户中心后端交互：

| 方法 | 接口 | 用途 |
| --- | --- | --- |
| `POST` | `/api/user/register` | 用户注册 |
| `POST` | `/api/user/login` | 用户登录 |
| `POST` | `/api/user/logout` | 用户注销 |
| `GET` | `/api/user/current` | 获取当前登录用户 |
| `GET` | `/api/user/search` | 管理员查询用户列表 |

后端使用 `BaseResponse<T>` 作为统一响应结构：

```json
{
  "code": 0,
  "data": {},
  "message": "success",
  "description": ""
}
```

前端将 `code: 0` 视为成功；非零业务状态码会交给全局请求错误处理器处理。

## 项目目录

```text
src/
├── components/                 # 页面通用组件
├── pages/
│   ├── user/login/             # 登录页
│   ├── user/register/          # 注册页
│   ├── Admin/user-manage/      # 管理员用户列表
│   └── Welcome.tsx             # 欢迎页
├── services/                   # API 类型与请求函数
├── app.tsx                     # 全局布局、登录状态与请求配置
├── requestErrorConfig.ts       # 全局响应错误处理
└── global.less                 # 全局样式
config/                         # Umi、代理和路由配置
```

登录能否成功取决于连接的后端数据库中是否存在该账号。
