import axios from "axios";
axios.defaults.baseURL = "http://multidevadmin.laradevtest.com"

axios.interceptors.request.use(function(config){
    config.url += ''
    return config
}, function(error){return Promise.reject(error)}
)
export default axios

