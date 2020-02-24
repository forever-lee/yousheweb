//轮播图
let items =document.getElementsByClassName('item');
let goPreBtn = document.getElementById('goPre');
let goNextBtn =document.getElementById('goNext');
let index= 0;
let clearActive =() =>{
    for(let i=0;i<items.length;i++){
        items[i].className='item';
    }
}
let goIndex =()=>{
    clearActive();
    items[index].className='item active';
}
let goNext =()=>{
    if(index<2){
        index++;
    } else{
        index=0;
    }
    goIndex();
}
let goPre = () => {
    if(index==0){
        index=2;
    }else{
        index--;
    }
    goIndex();
}
goNextBtn.addEventListener('click',()=>{
    goNext();
})
goPreBtn.addEventListener('click',()=>{
    goPre();
})
//div轮播翻页
let icons =document.getElementsByClassName('icon');
let goBtn = document.getElementById('b1Pre');
let nextBtn =document.getElementById('b1Next');
let number= 0;
let clearIcon =()=>{
    for( let j =0;j<icons.length;j++){
        icons[j].className='icon';
    }
}
let goNumber=()=>{
    clearIcon();
    icons[number].className='icon active';
}
let next =()=>{
    if(number<1){
        number++;
    }else{
         number=0;
    }
    goNumber();
}
let pre=()=>{
    if(number==0){
        number=1;
    }else{
        number--;
    }
    goNumber();
}
goBtn.addEventListener('click',()=>{
    pre();
})
nextBtn.addEventListener('click',()=>{
    next();
})   
//移动端适配
 let dpr ,scale, timer, rem;
 let style= document.createElement('style');
 dpr =window.devicePixelRatio || 1;
 scale= 1 /dpr;
 document.documentElement.setAttribute('data-dpr',dpr);
 let metaEl = document.createElement('meta');
 metaEl.setAttribute('name','viewport');
 metaEl.setAttribute('content','target-densitydpi=device-dpi,initial-scale=' + scale +',maximum-scale=' + scale +',minimum-scale='+ scale +',user-scalable=no');
 document.documentElement.firstElementChild.appendChild(metaEl);
 document.documentElement.firstElementChild.appendChild(style);
 if (980 === document.documentElement.clientWidth){
     metaEl.setAttribute('content','target-densitydpi=device-dpi,width=device-width,user,scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1');
 }
 function refrehRem(){
     const c='}';
     const width=document.documentElement.clientWidth;
     const isPhone = window.navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
     if (!isPhone && width > 1024){
         width=640;
         c = 'max-width;' + width + 'px;margin-right:auto!important;margin-left:auto!important;}';
     }
     window.rem = rem =width/16;
     style.innerHTML='html{font-size:' +rem+'px!important;}body{font-size:'+ parseInt(12 *(width/320)) + 'px;'+ c;;
 }
 refrehRem();
  window.addEventListener('resize',function(){
      clearTimeout(timer);
      timer = this.setTimeout(refrehRem,300);
  },false);
  window.addEventListener('pageshow', function(e){
      if (e.persisted){
          clearTimeout(timer);
          timer = this.setTimeout(refrehRem,300);
      }
  },false);
 