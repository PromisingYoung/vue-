import axios from 'axios'
const baseURL = 'https://dev2.yezhubao.net/cipms/'

// 创建一个 axios 实例
const service = axios.create({
    baseURL,
    timeout: 5000 // 请求超时时间
})

// 处理header
function getHeaders(url, json = '') {
    let headers = {}
    headers['Content-Type'] = 'application/json'
    headers['token'] = '111111111111'
    return headers
}

//提示错误信息
function errorLog(error) {
    //如果引用了element
    // Message({
    //     message: error,
    //     type: 'error',
    //     duration: 5 * 1000
    // })
}

// 响应拦截器
service.interceptors.response.use(
    response => {
        const dataAxios = response.data
        console.log(dataAxios)
        const { code, errCode } = dataAxios
        if (code && code !== 0) {
            errorLog(dataAxios.message)
        } else if (errCode && errCode !== 0) {
            errorLog(dataAxios.errMsg)
        } else {
            return dataAxios
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: error.message = '请求错误'; break
                case 401: error.message = '未授权，请登录'; break
                case 403: error.message = '拒绝访问'; break
                case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
                case 408: error.message = '请求超时'; break
                case 500: error.message = '服务器内部错误'; break
                case 501: error.message = '服务未实现'; break
                case 502: error.message = '网关错误'; break
                case 503: error.message = '服务不可用'; break
                case 504: error.message = '网关超时'; break
                case 505: error.message = 'HTTP版本不受支持'; break
                default: break
            }
        }
        errorLog(error)
        return Promise.reject(error)
    }
)
export const get = url => {
    return service({
        method: 'get',
        url,
        headers: getHeaders(url)
    })
}

export const post = (url, data = {}) => {
    if (data && data.type !== String)
        data = JSON.stringify(data)
    return service({
        method: 'post',
        url,
        data,
        headers: getHeaders(url, data)
    })
}
export const del = (url) => {
    return service({
        method: 'delete',
        url,
        headers: getHeaders(url)
    })
}
export const put = (url, data = {}) => {
    if (data && data.type !== String)
        data = JSON.stringify(data)
    return service({
        method: 'put',
        url,
        data,
        headers: getHeaders(url, data)
    })
}