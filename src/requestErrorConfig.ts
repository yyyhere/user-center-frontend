import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';

import { message, notification } from 'antd';

type BaseResponse<T = unknown> = API.BaseResponse<T>;

type BusinessErrorInfo = {
  code: number;
  message: string;
  description?: string;
  data?: unknown;
};

type BusinessError = Error & {
  name: 'BizError';
  info: BusinessErrorInfo;
};

const createBusinessError = (response: BaseResponse): BusinessError => {
  const error = new Error(
    response.description || response.message || '请求失败',
  ) as BusinessError;
  error.name = 'BizError';
  error.info = {
    code: response.code,
    message: response.description || response.message || '请求失败',
    description: response.description,
    data: response.data,
  };
  return error;
};

/**
 * 后端所有成功响应使用 { code: 0, data, message, description }。
 * 业务失败仍然是 HTTP 200，因此必须检查业务 code 并主动抛错。
 */
export const errorConfig: RequestConfig = {
  errorConfig: {
    errorThrower: (response) => {
      const result = response as BaseResponse | undefined;
      if (result && typeof result.code === 'number' && result.code !== 0) {
        throw createBusinessError(result);
      }
    },
    errorHandler: (error: any, options: any) => {
      if (options?.skipErrorHandler) {
        throw error;
      }

      if (error?.name === 'BizError') {
        const info = (error as BusinessError).info;
        const detail = info.description?.trim();
        const content = detail || info.message || '请求失败';

        if (info.code === 40100) {
          message.error(content);
          if (window.location.pathname !== '/user/login') {
            const redirect = `${window.location.pathname}${window.location.search}${window.location.hash}`;
            window.location.href = `/user/login?redirect=${encodeURIComponent(redirect)}`;
          }
        } else if (info.code === 40101) {
          message.warning(content);
        } else if (info.code >= 50000) {
          notification.error({
            message: info.message,
            description: detail || '请稍后重试',
          });
        } else {
          message.error(content);
        }
        throw error;
      }

      if (error?.response) {
        message.error(`请求失败（HTTP ${error.response.status}）`);
      } else if (typeof navigator !== 'undefined' && !navigator.onLine) {
        message.error('网络不可用，请检查网络连接后重试。');
      } else if (error?.request) {
        message.error('服务器没有响应，请稍后重试。');
      } else {
        message.error(error?.message || '请求失败，请稍后重试。');
      }
      throw error;
    },
  },
  requestInterceptors: [(config: RequestOptions) => config],
  responseInterceptors: [
    (response) => {
      const result = response.data as BaseResponse | undefined;
      if (result && typeof result.code === 'number' && result.code !== 0) {
        throw createBusinessError(result);
      }
      return response;
    },
  ],
};
