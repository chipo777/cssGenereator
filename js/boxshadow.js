document.getElementById('hl').oninput = redaktor; //sledit za polzunkom
document.getElementById('vl').oninput = redaktor;
document.getElementById('br').oninput = redaktor;



var hl, vl, br, bloki=document.getElementById('bloki');


function redaktor(){
    hl = document.getElementById('hl');
    vl = document.getElementById('vl');
    br = document.getElementById('br');

    bloki.style.mozBoxShadow = hl.value + 'px ' + vl.value + 'px '+ br.value + 'px';
    bloki.style.webkitBoxShadow = hl.value + 'px ' + vl.value + 'px '+ br.value + 'px';
    bloki.style.boxShadow = hl.value + 'px ' + vl.value + 'px '+ br.value + 'px';
    


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
  kodi.innerHTML = '-moz-box-shadow: '+ hl.value + 'px ' + vl.value + 'px '+ br.value + 'px; <br/>'+
  '-webkit-box-shadow: '+ hl.value + 'px ' + vl.value + 'px '+ br.value + 'px; <br/>'+
  'box-shadow: '+ hl.value + 'px ' + vl.value + 'px '+ br.value + 'px;'

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