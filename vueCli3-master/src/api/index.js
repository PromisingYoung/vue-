import { get, post, del, put } from '@/axios/index'
//获取公司列表
export const getCompanyList = ({ page, size, name = '' }) => post(`admin/company/${page}/${size}`, {
    name
})
export const getList = (url,data) => post(`http://10.138.66.1:8090/baas${url}`, {
    data
})
export const getUser = (user) => get(`http://jsonplaceholder.typicode.com/${user}`)
// console.log(process.env.NODE_ENV)