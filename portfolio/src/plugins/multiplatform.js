export const MultiplatformPlugin = 
{
    install : function(Vue){
        Vue.prototype.$isMobile = function(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
                } else {
                return false
                }
        }
    }
}