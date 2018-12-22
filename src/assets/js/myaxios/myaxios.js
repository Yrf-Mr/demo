import axios from 'axios'
var myaxios = {}
myaxios.install = function (Vue) {
  axios.defaults.baseURL = "http://localhost:8888/api/private/v1/"
  // 1. 添加全局方法或属性
  Vue.prototype.$http = axios
}
// 导出
export default myaxios;
