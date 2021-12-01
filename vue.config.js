module.exports = {
    // 关闭 eslint
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        port: 3030,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        before: app => {
            // `app` 是一个 express 实例
        }
    },

};