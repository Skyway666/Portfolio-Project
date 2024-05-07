export const MultiplatformPlugin = 
{
    install : function(Vue){
        Vue.prototype.$isLandscape = function(){
            return screen.width > 480;
        }
    }
}