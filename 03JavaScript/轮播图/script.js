window.onload = function () {
    var timer = null;
    var box = document.getElementById("box");
    var  ollis = document.getElementById('ad_ol').getElementsByTagName('li');
    var ul = document.getElementById("ad_ul");
    
    var leader = 0;
    var target = 0;
    var index = 0;
    //若果有在等待的定时器，则清掉
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(animation, 2000);
    function animation() {
        index++;
        if (index >= ollis.length) {
            index = 0;
        }
        changeImg(index);
    }
    // 自动切换
 

    function changeImg(curIndex) {
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = '';
        }
        // ollis[curIndex].className = 'current';
        target = -curIndex * 490;
        index = curIndex;
    }
     // 鼠标划过整个容器时停止自动播放
     box.onmouseover = function() {
        clearInterval(timer);
    }

    // 鼠标离开整个容器时继续播放至下一张
    box.onmouseout = function() {
        timer = setInterval(animation, 2000);
    }

    for(var i = 0; i < ollis.length;i++)
    {
        ollis[i] = i;
        ollis[i].onmouseover = function(){
            clearInterval(timer);
            changeImg(ollis[i]);
        console.log( ollis[i]);
        }
    }

    setInterval(function(){
        leader = leader + (target - leader) / 10;
        ul.style.left = leader + 'px';
     
    },20)
}