var links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color = color;
    // i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightdayhandler(self){
var target = document.querySelector('body');
if (self.value === 'night'){
body.setBackgroundColor('black');
body.setColor('white');
self.value = 'day';

links.setColor('pink');

}else {
body.setBackgroundColor('white');
body.setColor('black');
self.value = 'night';

links.setColor('black');
}
}
