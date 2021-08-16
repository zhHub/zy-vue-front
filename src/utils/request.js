import axios from 'axios'

/**、
 * 设置默认请求头
 * @type {string}
 */
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

/**
 *
 * @type {AxiosInstance}
 */
const request = axios.create({
        // axios中请求配置有baseURL选项，表示请求URL公共部分， 默认 api
        baseURL: process.env.VUE_APP_BASE_API || '/api',
        // 超时
        timeout: 10000
    }
);

function tansParams(params) {
    return params;
}

/**
 * 请求拦截器
 */
request.interceptors.request.use(config => {
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})


/**
 * 响应拦截器
 */
request.interceptors.response.use(res => {
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const msg = res.data.msg;
        // 获取数据信息
        const data = res.data;
        console.log(code, msg)
        return data;
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default request