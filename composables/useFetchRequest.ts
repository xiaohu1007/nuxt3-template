/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 16:13:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 11:57:20
 * @Description: 
 * @FilePath: \joyreels-h5\composables\useFetchRequest.ts
 */

import { useFetch, useRuntimeConfig } from '#app';
import type { UseFetchOptions } from 'nuxt/app';
import { v4 as uuidv4 } from 'uuid'

interface RequestOptions extends UseFetchOptions<any> {
  customBaseURL?: string;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type HandleRequestOptions = { request: Request; options: RequestOptions };
type HandleResponseOptions = { response: any };

// 获取语言
const languageStore = useLanguageStore()
// 获取用户信息
const userStore = useUserStore()

// 请求拦截器
function handleRequest({ options }: HandleRequestOptions) {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    'x-platform': 'web',
    'x-udid': 'uuid',
    'x-timezone': getTimeZoneOffset(),
    'x-lang': languageStore.lang || 'en',
  };
  // token
  const token = `Bearer ${userStore.token}`
  if (!!userStore.token) {
    (options.headers as any)['Authorization'] = token
  } else {
    (options.headers as any)['x-udid'] = getSetVal(userStore.uuid, uuidv4().replace(/-/g, ''))
  }
}

// 响应拦截器
function handleResponse({ response }: HandleResponseOptions) {
  if (response._data.error) {
    throw new Error(response._data.error.message || '响应错误');
  }
  return response._data;
}

/**
 * 创建请求方法
 * @param method
 */
function createUseFetchRequest(method: HttpMethod) {
  return async function (
    url: string,
    data?: any,
    options: RequestOptions = {}
  ) {
    const env = useRuntimeConfig();

    const baseURL = env.public.API_BASE_URL

    const requestUrl = new URL(
      url,
      options.customBaseURL || baseURL
    ).toString();

    return await useFetch(requestUrl, {
      ...options,
      method,
      body: data,
      onRequest: handleRequest,
      onResponse: handleResponse
    });
  };
}

// 提供 useFetch & HTTP 方法 - 统一管理请求 - 再到组件中使用
export const useFetchGet = createUseFetchRequest('GET');
export const useFetchPost = createUseFetchRequest('POST');
export const useFetchPut = createUseFetchRequest('PUT');
export const useFetchPatch = createUseFetchRequest('PATCH');
export const useFetchDelete = createUseFetchRequest('DELETE');