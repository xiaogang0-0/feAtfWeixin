/*
* @Author: user
* @Date:   2017-05-12 10:19:18
* @Last Modified by:   user
* @Last Modified time: 2017-06-02 13:49:02
*/

(function() {
  "use strict";
  
   $(window).resize(function() {
          location.reload();//刷新页面
         
      });

    // window.addEventListener('orientationchange', function(event){
    //     if ( window.orientation == 180 || window.orientation==0 ) {//竖屏事件处理
    //          location.reload();//刷新页面
    //     }
    //     if( window.orientation == 90 || window.orientation == -90 ) {//横屏事件处理
    //          location.reload();//刷新页面   
    //     }
    // });

//rem 适配:
    var html = document.querySelector("html");          //获取html
    var width = html.getBoundingClientRect().width;   //获取html的宽度
    html.style.fontSize = width/20+ "px";                   //1000设计图  1rem = 50px;







//热门课程的 搜索选项操作
// (function(){
      
//      var $parent = $('.rmkc-head');             //整个tab的腹肌
//      var $btns = $parent.find('.js-bnt');     //二级切换的父级按钮
//      var $lists =$parent.find('.js-list ul');   // 下面对应的展开ul
//      var $off = $parent .find('i');             // 图标标签
//      var $search = $off.eq(3);               //点击搜索按钮
//      var $parentList = $parent.find('section');
//      var arr = [0,0,0];
    
//     $btns.click(function(){//一级切换
//         var index = $(this).index();
//         var num = $(document).height()-$('.rmkc-head').height();

//         $parentList.css('height',num);//设置 显示遮罩高度
//         $btns.removeClass('active');
//         $(this).addClass('active');            //切换选中样式
//         $('.js-list').removeClass("none");    //二级整体显示
//         $lists.addClass('none');                //清洗二级全隐藏
//         $off.removeClass('icon-shouqi').addClass('icon-zhankai');  //清洗标签图样式还原
//         $lists.eq(index).removeClass('none') ;  //当前的显示
//         $off.eq(index).removeClass('icon-zhankai').addClass("icon-shouqi"); //当前图标更换
//     })


//     $lists.find('li').click(function(){//二级下拉的点击 
//           var index1 = $(this).parent('ul').index();  
//           $btns.eq(index1).find('em').html(this.innerHTML);
//           arr[index1] = this.innerHTML
//            // console.log(index1,$(this).index(),arr)
               
//      })

//     $parentList.on('click',function(){//点击空白区域隐藏
//             $(this).addClass('none')
//             $off.removeClass('icon-shouqi').addClass('icon-zhankai');  //清洗标签图样式还原
//             $btns.removeClass('active');   //清空当一级的样式         
//       })

    
//     $search.on('click',function(){//点击搜索时间的接口
//         console.log(arr)
//     })
// })()

//师资简介的 搜索选项操作

// shizijianjie()
function shizijianjie(){
     var $parent = $('.szjj-head');             //整个tab的腹肌
     var $btns = $parent.find('.js-bnt');     //二级切换的父级按钮
     var $lists =$parent.find('.js-list ul');   // 下面对应的展开ul
     var $off = $parent .find('i');             // 图标标签
     var $parentList = $parent.find('.js-list');//二级切换外框
     
    $btns.click(function(){//一级切换
          var index = $(this).index();
          var num = $(document).height()-$('.szjj-head').height();
         
          if(index ==2){
              index =1
          }

          $parentList.css('height',num);//设置 显示遮罩高度
          $btns.removeClass('active');
          $(this).addClass('active');            //切换选中样式
          $('.js-list').removeClass("none");    //二级整体显示
          $lists.addClass('none');                //清洗二级全隐藏
          $off.removeClass('icon-shouqi').addClass('icon-zhankai');  //清洗标签图样式还原
          $lists.eq(index).removeClass('none') ;  //当前的显示
          $off.eq(index).removeClass('icon-zhankai').addClass("icon-shouqi"); //当前图标更换
               
          $parentList.on('click',function(){//点击空白区域隐藏
                $(this).addClass('none')
                $off.removeClass('icon-shouqi').addClass('icon-zhankai');  //清洗标签图样式还原
                $btns.removeClass('active');   //清空当一级的样式     
          })
    })
    
     $lists.find('li').click(function(){//二级下拉的点击  数据接口 从这里面走
            var index1 = $(this).parent('ul').index();  
            $btns.eq(index1).find('em').html(this.innerHTML)

            console.log(index1,$(this).index(),)//前面0 走科目数据 是一 走性别数据
               
     })

}




})(jQuery);