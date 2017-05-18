/*
* @Author: user
* @Date:   2017-05-12 10:19:18
* @Last Modified by:   user
* @Last Modified time: 2017-05-17 10:11:25
*/

(function() {
  "use strict";

  
 //rem 适配:
    var html = document.querySelector("html");          //获取html
    var width = html.getBoundingClientRect().width;   //获取html的宽度
    html.style.fontSize = width/20+ "px";                   //(设置html的宽度是屏幕宽度的16之1得出来的结果不能小于12)  1000设计图






})(jQuery);