module.exports = (config, env) => {
    if(env==="production"){
        config.output.publicPath="/projects/testimonials/"
    }
    return config;
};