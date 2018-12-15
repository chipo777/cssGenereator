document.getElementById('radius').oninput = redaktor; //sledit za polzunkom
document.getElementById('width').oninput = redaktor;

borderStyle = document.getElementById('borderStyle'); //sledit za viborom
borderStyle.addEventListener('change', viborBorder, false);

var width, radius, border='dashed', bloki=document.getElementById('bloki');


function redaktor(){
    width = document.getElementById('width');
    radius = document.getElementById('radius');
    bloki.style.borderRadius = radius.value + 'px';
    bloki.style.borderWidth = width.value + 'px';
    console.log(radius.value);
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
  kodi.innerHTML = 'border: ' + border + ' ' + width.value + 'px; <br/>' +
  '-moz-border-radius: ' + radius.value + 'px; <br/>' +
  '-webkit-border-radius:  ' + radius.value + 'px;';

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

