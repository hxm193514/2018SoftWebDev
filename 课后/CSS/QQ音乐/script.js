window.onload = function () {
    var slideshow_li = document.querySelectorAll(".slideshow li").length / 5; //算出有几页图片
    var top_nav = document.getElementById("top-nav").getElementsByTagName("li");
    var top_subnav = document.getElementById("top_subnav").getElementsByTagName("li");
    var top_nava = document.querySelectorAll(".top-nav li a");
    var top_subnava = document.querySelectorAll(".top_subnav li a");
    var img = document.querySelectorAll(".lunbo");
    var span = document.querySelectorAll(".lunbo > span");
    //头部按钮

    for (var i = 0; i < top_nav.length; i++) {
        (function (n) {
            top_nav[i].onclick = function () {
                for (var j = 0; j < top_nav.length; j++) {
                    top_nav[j].className = 'top-nav-z';
                    top_nava[j].className = ""
                    console.log(top_nav[j]);
                }
                this.className += " current";
                top_nava[n].className = " acurrent"
                console.log(top_nav[n]);
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
                switch(n){
                    case 0:   mm("wntj","gfgd","qg","wlgq","jd","ktvrg");break;
                    case 1: mm("gfgd","qg","wlgq","jd","ktvrg","wntj"); break;
                    case 2:mm("qg","wlgq","jd","ktvrg","wntj","gfgd"); break;
                    case 3: mm("wlgq","jd","ktvrg","wntj","gfgd","qg"); break;
                    case 4:  mm("jd","ktvrg","wntj","gfgd","qg","wlgq"); break;
                    case 5:mm("ktvrg","wntj","gfgd","qg","wlgq","jd"); break;
                }
            }
           
        })(i);
    }
        //轮播图锚点切换

       
        // mm("wntj","gfgd","qg","wlgq","jd","ktvrg");
        // mm("gfgd","qg","wlgq","jd","ktvrg","wntj");
        // mm("qg","wlgq","jd","ktvrg","wntj","gfgd");
        // mm("wlgq","jd","ktvrg","wntj","gfgd","qg");
        // mm("jd","ktvrg","wntj","gfgd","qg","wlgq");
        // mm("ktvrg","wntj","gfgd","qg","wlgq","jd");




   //轮播图按钮过场动画
    var target = 0;
    var leader = 0;
    $(".mod_index")[0].onmouseover = function () {
        $(".btn-l")[0].className = "slideshow_btn btn-l btn1"
        $(".btn-r")[0].className = "slideshow_btn btn-r btn2"

    }
    $(".mod_index")[0].onmouseout = function () {

        $(".btn-l")[0].className = "slideshow_btn btn-l btn3"
        $(".btn-r")[0].className = "slideshow_btn btn-r btn4"
    }
    $(".btn-l")[0].onclick = function () {
        target += 1200;
        console.log(leader);
    }
    $(".btn-r")[0].onclick = function () {
        target -= 1200;
        console.log(leader);
    }

    setInterval(function () {
        if (target >= 0) {
            target = 0;
        } else if (target <= -slideshow_li * 1200) {
            target = -1200;
        }
        leader = leader + (target - leader) / 10;
        $(".slideshow")[0].style.left = leader + "px";

    }, 30)
  //轮播图播放器过场动画
    for (var i = 0; i < img.length; i++) {
        (function (n) {
            img[n].onmouseover = function () {
                for (var j = 0; j < img.length; j++) {
                    img[j].className = "";
                    span[j].className = "";
                }
                console.log("1");
                img[n].className += " simg";
                span[n].className += "play play1";
            }
            img[n].onmouseout = function () {
                for (var j = 0; j < img.length; j++) {
                    img[j].className = "";
                    span[j].className = "";
                }
                console.log("1");
                img[n].className += " simg1";
                span[n].className += "play play2";

            }

        })(i);
    }


}