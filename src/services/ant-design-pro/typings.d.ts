// @ts-ignore
/* eslint-disable */


declare namespace API {
  type BaseResponse<T> = {
    code: number;
    data: T | null;
    message: string;
    description: string;
  };

  type CurrentUser = {

    id?: number;
    userName?: string;
    userAccount?: string;
    avatarUrl?: string;
    email?: string;
    gender?: number;
    status?: number;
    createTime?: Date;
    role?: number;
  };

  type LoginResult = {
    id?: number;
    userName?: string;
    userAccount?: string;
    avatarUrl?: string;
    email?: string;
    gender?: number;
    status?: number;
    createTime?: Date;
    role?: number;
  };

  // 返回的都不是一个对象，就是类型本身，有多个东西叫对象，你就一个东西，那不就是类型
  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;   // userAccount 是可选项，可填可不填
    userPassword?: string;
    checkPassword?: string;
    type?: string;
  };

  type UserSearchParams = {
    userName?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}

