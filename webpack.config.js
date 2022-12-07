var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  

    entry: {
        main: path.resolve(__dirname, './src/index.js'),

    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'main.js',
    },

    mode: 'development',

    devServer: {
        static: {
          directory: path.join(__dirname, '/dist'),
    },
     devMiddleware: {
        writeToDisk: true,
     },
     port: 8000,
     open: true,
     hot: false,
    },


    module:{
     rules: [
      {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options: {
                    minimize: true
                  
                }
            }

        ]
      },

      
       {
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../',
                },
            },
            'css-loader',
        ]
       },
     
    //   {

    //     test: /\.(sass|css|scss)$/,

    //     use: [

    //       {

    //         loader: MiniCssExtractPlugin.loader, 

    //         options: {

    //           publicPath: '../'

    //         }

    //       },

    //       "css-loader",

    //       "sass-loader",

    //     ],

    //   },
       
      {
        test: /\.(png|svg|jpe?g|gif)$/,

        use: [
            {
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: "images",
                }
            }
        ]
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: "fonts",
                    esModule: false,
                }
            }
        ]
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,

            "css-loader",

            "sass-loader",
        ],
      },
       
      {

        test: require.resolve('jquery'),

        loader: 'expose-loader',

        options: {

          exposes: ['$', 'jQuery'],

        }

      },
     ]
    },
    
    plugins:  [ 
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",  
        }),

        new HtmlWebpackPlugin({
            filename: "Margaret.html",
            template: "./src/Margaret.html",  
        }),
       
        new HtmlWebpackPlugin({ 
            filename: "Vegetable.html",
            template: "./src/Vegetable.html",  
        }),
        
        new HtmlWebpackPlugin({ 
            filename: "chicken.html",
            template: "./src/chicken.html",  
        }),

        new HtmlWebpackPlugin({ 
            filename: "checkout.html",
            template: "./src/checkout.html",  
        }),

        new HtmlWebpackPlugin({ 
            filename: "payment.html",
            template: "./src/payment.html",  
        }),

        new HtmlWebpackPlugin({ 
            filename: "about.html",
            template: "./src/about.html",  
        }),

        new HtmlWebpackPlugin({ 
            filename: "contact.html",
            template: "./src/contact.html",  
        }),
         
        new HtmlWebpackPlugin({ 
            filename: "privacy-policy.html",
            template: "./src/privacy-policy.html",  
        }),

        new HtmlWebpackPlugin({ 
            filename: "careers.html",
            template: "./src/careers.html",  
        }),

       new MiniCssExtractPlugin({filename: "css/style.css"}), 


       new optimizeCSSAssetsPlugin({}),
    ],

};