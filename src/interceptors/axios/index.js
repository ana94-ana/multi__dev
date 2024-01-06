import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL

axios.interceptors.request.use(function(config){
    config.url += ''
    return config
}, function(error){return Promise.reject(error)}
)
export default axios





