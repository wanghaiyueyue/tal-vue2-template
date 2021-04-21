import axios from 'ts-axios-new'
/**
 * 取消功能
 */
 const CancelToken = axios.CancelToken;
 const source = CancelToken.source()

/**
 * 拦截器
 */
axios.interceptors.request.use(config => {
  config.needCancel && (config['cancelToken'] = source.token)
  return config
},error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response.data
},error => {
  return Promise.reject(error)
})

