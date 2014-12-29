!seajs.config({
    base: "/js",
    debug:true
});
/*! 初始化加载模块*/
!seajs.use(["./js/app"], function(app){
    app.init_modle();
});
