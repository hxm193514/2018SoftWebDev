//轮播图过度动画
function animate(obj, target) {
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过15
        obj.style.left = obj.offsetLeft + speed + "px";
        console.log(target);
        if (Math.abs(result) <= 15)  // 如果差值不小于 15 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
        }
    }, 10)
}
window.onload = function(){
    var slide = $('.slide')[0];//最外围div
    var slideMin = $('.slide-min');
    var slideMinImg = $('.slide-min')[0].children;//轮播图图片
    var slideArrows = $(".slide-arrows")[0];//轮播图箭头包含div
    var slideCtl = slide.children[1];//箭头以及下标
    var index =0;
    var  slide_W =  slide.offsetWidth;//div宽度
     


       //2.动态创建下标
       for(var i=0;i<slideMinImg.length;i++){
         var span = document.createElement("span");
         span.className = "slide-ctl-s";
         if(i==slideMinImg.length-1)
         span.className +=" s_current";
         span.innerText = slideMinImg.length-i-1;
         slideCtl.insertBefore(span,slideCtl.children[1]);
         
    }
    for(var i=0;i<slideMinImg.length/2;i++){
        var img = document.createElement("img");
        img.className = "slide-min-img";
        // $(".slideshow")[0].appendChild($(".slideshow")[0].children[i].cloneNode(true));
        // slideMin[0].insertBefore(img,slideMin.children[1]);
        slideMin[0].insertBefore($(".slide-min")[0].children[i].cloneNode(true),slideMin.children[1])
    }
   
    // for(var i=1;i<slideMinImg.length;i++){
    //     animate(slideMinImg[i],slide_W);
    // }


    //监听遍历操作
    var slideCtls = slideCtl.children;//下标及左右箭头有几个控件

    for(var i=0;i<slideCtls.length;i++){
        slideCtls[i].onclick =function(){
           
            // 判断是点击了哪个控件
           if(this.className==="slide-ctl-l"){
            index++;
            if(index>0)
            {
                index=-1;
            }
            console.log(index);
            animate($(".slide-min")[0],index*slide_W);
           
           }
           else if(this.className==="slide-ctl-r"){
            index--;
            if(index<-1)
            {
                index=0;
            }
            console.log(index);
            //   右边箭头
            animate($(".slide-min")[0],index*slide_W);
            
           }
           else{ //    下标
             //获取索引
             var span_index = this.innerText;
               //对比
               if(index>span_index)
               {
                    //左边箭头
                    animate(slideMinImg[index],slide_W);
                    slideMinImg[span_index].style.left = -slide_W +"px";
               }else
               {
                animate(slideMinImg[index],-slide_W);
                slideMinImg[span_index].style.left = +slide_W +"px";
               }
               index = span_index
               animate(slideMinImg[index],0);
               
           }
        //    changeIndex();
       }
    }

    //切换索引
//    var slide_ctl_s = $(".slide-ctl")[0].children;
   var slide_ctl_s = $(".slide-ctl-s");
    function changeIndex(){
        for(var i=0;i<slide_ctl_s.length;i++)
        {
            slide_ctl_s[i].className = "slide-ctl-s";
        }
        // console.log(((".slide-ctl-s")[index+1].className))
        slide_ctl_s[index].className ="slide-ctl-s s_current";

    };
};