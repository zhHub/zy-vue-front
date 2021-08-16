import request from "../utils/request";

export const testFun = () => {
    console.log('test')
    return request.request({
        url: '/system/loaning/list',
        method: 'get',
        params: query
    });
}