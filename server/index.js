const express = require('express');
const app = new express();
const PORT = 1985;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(express.static('public'));
/*
app.use('*', function(req, res){
    res.send('Hello World');
});
*/

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
});
