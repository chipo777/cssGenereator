document.getElementById('td').oninput = redaktor; //sledit za polzunkom
document.getElementById('rotate').oninput = redaktor;
document.getElementById('scale').oninput = redaktor;
document.getElementById('skew').oninput = redaktor;
document.getElementById('translate').oninput = redaktor;
document.getElementById('rotate1').oninput = redaktor1;
document.getElementById('scale1').oninput = redaktor1;
document.getElementById('skew1').oninput = redaktor1;
document.getElementById('translate1').oninput = redaktor1;


tt = document.getElementById('tt'); //sledit za viborom
tt.addEventListener('change', viborTiming, false);

var td, tt, rotate, scale, skew, translate,  rotate1, scale1, skew1, translate1, tt='ease', bloki=document.getElementById('bloki');


function redaktor(){
    td = document.getElementById('td');
    rotate = document.getElementById('rotate');
    scale = document.getElementById('scale');
    skew = document.getElementById('skew');
    translate = document.getElementById('translate');

    rotate1 = document.getElementById('rotate1');
    scale1 = document.getElementById('scale1');
    skew1 = document.getElementById('skew1');
    translate1 = document.getElementById('translate1');


    bloki.style.transitionDuration = td.value/1000 + 's';
    bloki.style.transitionTimingFunction = tt.value;

    bloki.style.webkitTransition = 'all ' + td.value/1000 + 's ' + tt;
    bloki.style.mozTransition = 'all ' + td.value/1000 + 's ' + tt;
    bloki.style.oTransition = 'all ' + td.value/1000 + 's ' + tt;

    
    
    bloki.style.webkitTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)';
    bloki.style.mozTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'
    bloki.style.msTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'
    bloki.style.oTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'
    bloki.style.transform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'

    

    kodi();
}


function redaktor1(){
    td = document.getElementById('td');
    

    rotate1 = document.getElementById('rotate1');
    scale1 = document.getElementById('scale1');
    skew1 = document.getElementById('skew1');
    translate1 = document.getElementById('translate1');


    bloki.style.transitionDuration = td.value/1000 + 's';
    bloki.style.transitionTimingFunction = tt.value;

    bloki.style.webkitTransition = 'all ' + td.value/1000 + 's ' + tt;
    bloki.style.mozTransition = 'all ' + td.value/1000 + 's ' + tt;
    bloki.style.oTransition = 'all ' + td.value/1000 + 's ' + tt;

    
    
    bloki.style.webkitTransform = 'rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px)';
    bloki.style.mozTransform = 'rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px)'
    bloki.style.msTransform = 'rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px)'
    bloki.style.oTransform = 'rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px)'
    bloki.style.transform = 'rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px)'

    


    kodi();
}

function viborTiming(){
    border = this.options[this.selectedIndex].value;
    bloki.style.transitionTimingFunction = border;
 //   console.log(border);
    kodi();
}

function kodi(){
  var kodi = document.getElementById('kodi');
  kodi.innerHTML = ".animation_example {  transition:all " +td.value/1000+ "s "+border+ "; <br> -webkit-transition:all " +td.value/1000+ "s " +border+ "; <br> -moz-transition:all " +td.value/1000+ "s " +border+" ; <br> -o-transition:all " +td.value/1000+ "s "+border +" ; <br> "+
  'transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px);  <br>' +
  '-webkit-transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br>' +
  '-moz-ransform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br>' +
  '-o-transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br>' +
  '-ms-transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br> } <br> .animation_example:hover { <br> '+

  'transform: rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px);  <br>' +
  '-webkit-transform: rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px); <br>' +
  '-moz-ransform: rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px); <br>' +
  '-o-transform: rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px); <br>' +
  '-ms-transform: rotate('+ rotate1.value + 'deg) scale(' + scale1.value/1000 + ') skew(' + skew1.value + 'deg) translate(' + translate1.value + 'px); <br> }';


}

function off(){
    document.getElementById('on').style.display='none';
    document.getElementById('off').style.display='block';
    redaktor1();
}

function on(){
    document.getElementById('off').style.display='none';
    document.getElementById('on').style.display='block';
    redaktor();
}

function cssCode(){
    document.getElementById('cssCode').style.display='none';
    document.getElementById('cssCode2').style.display='block';
}

function cssCode2(){
    document.getElementById('cssCode2').style.display='none';
    document.getElementById('cssCode').style.display='block';
}




function copy(){
    var text = document.getElementById("kodi").textContent;
    navigator.clipboard.writeText(text)
}

