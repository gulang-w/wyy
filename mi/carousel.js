function Carousel(element,obj){
   const self = this;
   const el = element?element:'.carousel'
   const wrapper = obj.wrapper?obj.wrapper:'.wrapper';
   let slide = obj.slide?obj.slide:'.slide'
   slide = slide.indexOf('.')>-1?slide.substring(1):slide;
   self.el = document.querySelector(el)
   self.wrapper = self.el.querySelector(wrapper);
   self.slide = slide;
   self.imgList = obj.imgList;
   let output = '';
   self.imgList.forEach(function (val, index) {
      output += `
        <div class="${self.slide}">
           <img src="${val.bigImg}">
        </div>
      `;
   })
   self.wrapper.innerHTML = output;
   self.el.onclick=function(e){
        const _this = e.target
        self.runTime(_this)
   }
};

Carousel.prototype = {
   constructor:Carousel,
   runTime:function(oBtn){
      oBtn.onclick=function(){
         console.log(oBtn)
      }
   }
}
