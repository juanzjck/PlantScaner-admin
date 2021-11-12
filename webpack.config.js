const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin= require('workbox-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      'node_modules'
    ]     
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name:'Plant scanner admin',
      shortname:'Plant scanner admin',
      description:'Gestor del aplicativo movil',
      background_color:'#fff',
      theme_color:'#b1a',
      icons:[
        {
          src:path.resolve('src/assets/btc.png'),
          sizes:[96,128,192,256,384,512]
        }
      ],
      start_url: ".",
      display:"standalone",
      destination: path.join('Icons'),
      ios: true,
    }),
   /* new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching:[
        {
          urlPattern:new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler:'CacheFirst',
          options:{
            cacheName:'images'
          }
        },
        {
          urlPattern:new RegExp('https://insta-mok.vercel.app/graphql'),
          handler:'NetworkFirst',
          options:{
            cacheName:'api'
          }
        }
      ]
    })*/
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins:['@babel/plugin-syntax-dynamic-import'],
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
        },
    }
    ]
  }
}
