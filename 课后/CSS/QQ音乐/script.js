

//document.getElementById("myList").insertBefore(newItem,existingItem); 这个是个好东西
window.onload = function () {
    var ulLis ="wntj";
    var slideshow_li = ulLis.length / 5; //算出有几页图片
    var top_nav = document.getElementById("top-nav").getElementsByTagName("li");
    var top_subnav = document.getElementById("top_subnav").getElementsByTagName("li");
    var top_nava = document.querySelectorAll(".top-nav li a");
    var top_subnava = document.querySelectorAll(".top_subnav li a");
    var img = document.querySelectorAll(".lunbo");
    var span = document.querySelectorAll(".lunbo > span");
var trmer = null;

  var index = 0;
//    $('.slideshow')[0] =  $('.slideshow')[0]
    //头部按钮
    var newItem=document.createElement("li")
    for(var i=0;i<5;i++)
    {
        $(".slideshow")[0].insertBefore(newItem,$(".slideshow")[0].children[i]); //无缝连接
        $(".slideshow")[0].appendChild($(".slideshow")[0].children[i].cloneNode(true));
    }
   
    for (var i = 0; i < top_nav.length; i++) {
        (function (n) {
            top_nav[i].onclick = function () {
                for (var j = 0; j < top_nav.length; j++) {
                    top_nav[j].className = 'top-nav-z';
                    top_nava[j].className = ""
                   
                }
                this.className += " current";
                top_nava[n].className = " acurrent"
               
            }
        })(i);
    }
    //头部下边导航栏
    for (var i = 0; i < top_subnav.length; i++) {
        (function (n) {
            top_subnav[i].onclick = function () {
                for (var j = 0; j < top_subnav.length; j++) {

                    top_subnava[j].className = "";
                }
                top_subnava[n].className = "currenta";
            }
        })(i);
    }
    //要显示的轮播图
    function mm(a,b,c,d,e,f){
        // $("."+a)[0].onclick = function () {
            $("."+a).css("display", "block");
            $("."+b).css("display", "none");
            $("."+c).css("display", "none");
            $("."+d).css("display", "none");
            $("."+e).css("display", "none");
            $("."+f).css("display", "none");
        // }
    }
    //在下方导航栏
    for (var i = 0; i < $(".mod_index_tab a").length; i++) {
        (function (n) {
            $(".mod_index_tab a")[i].onclick = function () {
                for (var j = 0; j <  $(".mod_index_tab a").length; j++) {

                    $(".mod_index_tab a")[j].classList.remove("currenta");
                }
                $(".mod_index_tab a")[n].className += " currenta";
                 //轮播图锚点切换
                switch(n){
                    case 0: mm("wntj","gfgd","qg","wlgq","jd","ktvrg");ulLis = "wntj";break;
                    case 1: mm("gfgd","qg","wlgq","jd","ktvrg","wntj");ulLis = "gfgd"; break;
                    case 2:mm("qg","wlgq","jd","ktvrg","wntj","gfgd"); ulLis = "qg";break;
                    case 3: mm("wlgq","jd","ktvrg","wntj","gfgd","qg"); ulLis = "wlgq";break;
                    case 4:  mm("jd","ktvrg","wntj","gfgd","qg","wlgq"); ulLis = "jd";break;
                    case 5:mm("ktvrg","wntj","gfgd","qg","wlgq","jd"); ulLis = "ktvrg";break;
                }
            }
           
        })(i);
    }

       
   //轮播图按钮过场动画
    var target = 0;
    var leader = 0;
    $(".mod_index")[0].onmouseover = function () {
        clearInterval(timer);
        $(".btn-l")[0].className = "slideshow_btn btn-l btn1";
        $(".btn-r")[0].className = "slideshow_btn btn-r btn2";
    }
    $(".mod_index")[0].onmouseout = function () {
        timer = setInterval(autoplay, 4000);
        $(".btn-l")[0].className = "slideshow_btn btn-l btn3";
        $(".btn-r")[0].className = "slideshow_btn btn-r btn4";
    }
  
      
    
      
        $(".btn-l")[0].onclick = function () {
            clearInterval(timer);
            index--;
         action($(".slideshow")[0], -index * 1200);
        }
        $(".btn-r")[0].onclick = function () {
            clearInterval(timer);
            index++;
                if (index > $("."+ulLis).length/5-1)  // 后判断
                {
                    $(".slideshow")[0].style.left = 0;  // 迅速调回
                    index = 1;  // 因为第6张就是第一张  第6张播放 下次播放第2张
                }
                    action($(".slideshow")[0], -index * 1200);
    
          
            
        }
 
     
    //轮播图转动
     function  action(obj, target,) {
        clearInterval(obj.timer);  // 先清除定时器
            var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
            obj.timer = setInterval(function () {
                var result = target - obj.offsetLeft; // 因为他们的差值不会超过15
                obj.style.left = obj.offsetLeft + speed + "px";
                if (Math.abs(result) <= 15)  // 如果差值不小于 15 说明到位置了
                {
                    clearInterval(obj.timer);
                    obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
                }
            }, 10)
    
     }

  //轮播图播放器过场动画
    for (var i = 0; i < img.length; i++) {
        (function (n) {
            img[n].onmouseover = function () {
                for (var j = 0; j < img.length; j++) {
                    img[j].className = "";
                    span[j].className = "";
                }
                img[n].className += " simg";
                span[n].className += "play play1";
            }
            img[n].onmouseout = function () {
                for (var j = 0; j < img.length; j++) {
                    img[j].className = "";
                    span[j].className = "";
                }
                img[n].className += " simg1";
                span[n].className += "play play2";

            }

        })(i);
    }
    timer = setInterval(autoplay, 4000); 
    
    function autoplay() {
        index++;  // 先 ++
        if (index > $("."+ulLis).length/5- 1)  // 后判断
        {
            $(".slideshow")[0].style.left = 0;  // 迅速调回
            index = 1;  // 因为第6张就是第一张  第6张播放 下次播放第2张
        }
        console.log(ulLis);
        action($(".slideshow")[0], -index * 1200);  // 再执行
       
        // 小方块
    }


}