document.getElementById('rotate').oninput = redaktor; //sledit za polzunkom
document.getElementById('scale').oninput = redaktor;
document.getElementById('skew').oninput = redaktor;
document.getElementById('translate').oninput = redaktor;



var rotate, scale, skew, translate, bloki=document.getElementById('bloki');


function redaktor(){
    rotate = document.getElementById('rotate');
    scale = document.getElementById('scale');
    skew = document.getElementById('skew');
    translate = document.getElementById('translate');
    bloki.style.webkitTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)';
    bloki.style.mozTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'
    bloki.style.msTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'
    bloki.style.oTransform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'
    bloki.style.transform = 'rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px)'


    kodi();
}

function viborBorder(){
    border = this.options[this.selectedIndex].value;
    bloki.style.borderStyle = border;
 //   console.log(border);
    kodi();
}

function kodi(){
  var kodi = document.getElementById('kodi');
  kodi.innerHTML = 'transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px);  <br>' +
  '-webkit-transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br>' +
  '-moz-ransform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br>' +
  '-o-transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px); <br>' +
  '-ms-transform: rotate('+ rotate.value + 'deg) scale(' + scale.value/1000 + ') skew(' + skew.value + 'deg) translate(' + translate.value + 'px);';

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

