window.onload = function () {
    var mod_index = document.getElementsByClassName('mod_index')[0]; //最大div
    var btnl = document.getElementsByClassName('btn-l')[0]; //轮播图左边按钮
    var btnr = document.getElementsByClassName('btn-r')[0]; //轮播图右边按钮
    var slideshow = document.getElementsByClassName('slideshow')[0]; //轮播图ul
    var arrow = document.getElementsByClassName('arrow')[0]; //按钮消失显示
    var slideshow_li = document.querySelectorAll(".slideshow li").length / 5; //算出有几页图片
    var top_nav = document.getElementById("top-nav").getElementsByTagName("li");
    var top_nava = document.querySelectorAll(".top-nav li a");
    var top_subnav = document.querySelectorAll(".top_subnav li");
    var img = document.querySelectorAll(".slideshow img");
    var span = document.querySelectorAll(".lunbo > span");
    //头部按钮

    for (var i = 0; i < top_nav.length; i++) {
        (function (n) {
            top_nav[i].onclick = function () {
                for (var j = 0; j < top_nav.length; j++) {

                    top_nava[j].className = "";
                    top_nav[j].className = 'top-nav-z';
                    console.log(top_nav[j]);
                }
                this.className += " current";
                top_nava[n].className = " acurrent"
                console.log(top_nav[n]);
            }
        })(i);
    }

    //轮播图
    var target = 0;
    var leader = 0;
    mod_index.onmouseover = function () {
        btnl.className = "slideshow_btn btn-l btn1"
        btnr.className = "slideshow_btn btn-r btn2"
     
    }
    mod_index.onmouseout = function () {
       
        btnl.className = "slideshow_btn btn-l btn3"
        btnr.className = "slideshow_btn btn-r btn4"
    }
    btnl.onclick = function () {
        target += 1200;
        console.log(leader);
    }
    btnr.onclick = function () {
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
        slideshow.style.left = leader + "px";

    }, 30)

    for (var i = 0; i < img.length; i++) {
        (function (n) {
            img[n].onmouseover = function () {
                for (var j = 0; j < img.length; j++) {
                    img[j].className = "";
                    span[j].className = "";
                }
                
                img[n].className += " simg";
                span[n].className += "play play1";
                console.log(span[n]);
            }
                img[n].onmouseout = function () {
                    for (var j = 0; j < img.length; j++) {
                        img[j].className = "";
                        span[j].className = "";
                    }
                    img[n].className += " simg1";
                    span[n].className += "play play2";
                    console.log(span[n]+"2");
                }
            
        })(i);
    }
}