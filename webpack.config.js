const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {


    // 配置需要打包的入口文件，值可以是字符串、数组、对象。
    // 1. 字符串： entry： './entry'
    // 2. 字符串： entry：[ './entry1','entry2'] (多入口)
    // 3. 对象：   entry： {alert/index': path.resolve(pagesDir, `./alert/index/page`)}
    entry: [
        './entry/index.js'
    ],


    output: {
        path: path.resolve(__dirname, './build'),
        // filename 属性表示的是如何命名出来的入口文件，规则是一下三种：
        // [name] 指代入口文件的name，也就是上面提到的entry参数的key，因此，我们可以在name里利用/，即可达到控制文件目录结构的效果。
        // [hash]，指代本次编译的一个hash版本，值得注意的是，只要是在同一次编译过程中生成的文件，这个[hash].js
        //的值就是一样的；在缓存的层面来说，相当于一次全量的替换。
        filename: '[name].bundle.js', // 推荐使用
        chunkFilename: '[name]-[id].bundle.js', // 代码分割
        // publicPath 参数表示的是一个URL 路径（指向生成文件的跟目录），用于生成css/js/图片/字体文件
        // 等资源的路径以确保网页能正确地加载到这些资源.
        // “publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值.
        // 例如，在localhost（即本地开发模式）里的css文件中边你可能用“./test.png”这样的url来加载图片，
        // 但是在生产模式下“test.png”文件可能会定位到CDN上并且你的Node.js服务器可能是运行在HeroKu上边的。
        // 这就意味着在生产环境你必须手动更新所有文件里的url为CDN的路径。
        //开发环境：Server和图片都是在localhost（域名）下
        //.image {
        // background-image: url('./test.png');
        //}
        // 生产环境：Server部署下HeroKu但是图片在CDN上
        //.image {
        //  background-image: url('https://someCDN/test.png');
        //}
        // publicPath: 'http://39.106.68.138:8020/',        /*没有配置这个的话，子路由访问会出错*/
        publicPath: '/',        /*没有配置这个的话，子路由访问会出错*/
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-redux-routes-antd',
            template: './entry/index.ejs'
        })
    ],

    // 用来进行模块加载相关的配置
    module: {
        // webpack拥有一个类似于插件的机制，名为Loader，通过Loader，webpack能够针对每一种特定的资源做出相应的处理
        // 1.test参数用来指示当前配置项针对哪些资源，该值应是一个条件值(condition)。
        // 2.exclude参数用来剔除掉需要忽略的资源，该值应是一个条件值(condition)。
        // 3.include参数用来表示本loader配置仅针对哪些目录/文件，该值应是一个条件值(condition)。
        // 而include参数则用来指示目录；注意同时使用这两者的时候，实际上是and的关系。
        // 4.loader/loaders参数，用来指示用哪个或哪些loader来处理目标资源，这俩货
        // 表达的其实是一个意思，只是写法不一样，我个人推荐用loader写成一行，多个
        // loader间使用!分割，这种形式类似于管道的概念，又或者说是函数式编程。形
        // 如loader: 'css?!postcss!less'，可以很明显地看出，目标资源先经less-loader
        // 处理过后将结果交给postcss-loader作进一步处理，然后最后再交给css-loader。
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            ,
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },

    // 用来配置依赖文件的匹配，如依赖文件的别名配置、模块的查找目录、默认查找的
    // 文件后缀名
    resolve:{
        extensions:['.css','.js','.jsx']
    },
}