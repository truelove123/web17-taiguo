window.onload=function(){
(function(){
            var w=document.documentElement.getBoundingClientRect().width;
            // 为了便于口算，将基数调整为设计图机型的整数倍，比如设计的是750，那么就除以7.5
            var bili=w/7.5; // 750/7.5=100px
            // 将比例赋值给HTML的font-size:
            document.documentElement.style.fontSize = bili+"px";
            console.log(w)
        })();
         // 幻灯片
          TouchSlide({ 
            slideCell:"#slideBox",
            titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell:".bd ul", 
            effect:"leftLoop", 
            autoPage:true,//自动分页
            autoPlay:true //自动播放
        });

 }