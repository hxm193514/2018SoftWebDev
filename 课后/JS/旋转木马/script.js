window.onload = function(){
    var arr = [
            {   //  1
                width:400,
                top:0,
                left:170,
                opacity:20,
                zIndex:2
            },
            {  // 2
                width:600,
                top:70,
                left:80,
                opacity:80,
                zIndex:3
            },
            {   // 3
                width:800,
                top:50,
                left:250,
                opacity:100,
                zIndex:4
            },
            {  // 4
                width:600,
                top:70,
                left:600,
                opacity:80,
                zIndex:3
            },
            {   //5
                width:400,
                top:0,
                left:720,
                opacity:20,
                zIndex:2
            }
        ];

    // 0. 获取元素
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;

    // 设置一个开闭变量，点击以后修改这个值
    var flag = true;

    // 1. 鼠标放置到轮播图上，显示两侧的控制按钮，移开后隐藏
    slide.onmouseenter = function(){
        animate(arrow,{"opacity":100});
    }
    slide.onmouseleave = function(){
        animate(arrow, {"opacity":0});
    }

    move();

    // 3. 为两侧控制按钮绑定事件（调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转）
    arrowChildren[0].onclick = function(){
        if(flag){
            flag = false;
            move(true);
        }
    }
    arrowChildren[1].onclick = function(){
        if(flag){
            flag = false;
            move(false);
        }
    }

    // 书写slider移动函数
    function move(bool){
        // 判断，如果等于undefined，那么不执行这两个if语句
        if(bool === true || bool === false){
            if(bool){
                // 将最后一个添加到第一个位置
                arr.unshift(arr.pop());
            }
            else{
                // 将第一个添加到最后一个位置
                arr.push(arr.shift());
            }
        }
        // 再次为页面的所有li赋值属性，利用缓动框架
        for(var i=0; i<liArr.length; i++){
            animate(liArr[i], arr[i], function(){
                flag = true;
            });
        }
    }
}