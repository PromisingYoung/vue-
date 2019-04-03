
//设置cookie
//默认存在30天
const setCookie = (name, value, time = 30) => {
    let exp = new Date();
    exp.setTime(exp.getTime() + 60 * 1000 * time * 60 * 24);
    exp = exp.toGMTString()
    value = escape(value)
    document.cookie = `${name}=${value};expires="${exp}`;
}
//获取cookie
const getCookie = name => {
    let str = document.cookie.split('; ')
    str = str.filter(item => !item.indexOf(name))[0]
    if (!str)
        return
    return str.split('=')[1]

}
//删除cookie
const delCookie = name => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    exp = exp.toGMTString()
    let cval = getCookie(name);
    if (cval != null)
        document.cookie = `${name}=${cval};expires=${exp}`;
}
export default {
    setCookie,
    getCookie,
    delCookie
}
