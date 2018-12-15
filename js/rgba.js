document.getElementById('R').oninput = redaktor; //sledit za polzunkom
document.getElementById('G').oninput = redaktor;
 

document.getElementById('A').oninput = redaktor; 
document.getElementById('B').oninput = redaktor;



var R, G, B, A, border='dashed', bloki=document.getElementById('bloki');


function redaktor(){
    R = document.getElementById('R');
    G = document.getElementById('G');
    B = document.getElementById('B');
    A = document.getElementById('A');
    bloki.style.backgroundColor = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ')';
    bloki.style.background = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ')';
    bloki.style.color = 'rgba(' + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ')';
    console.log('rgba(' + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ')');
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
  kodi.innerHTML = 'background-color: rgba('  + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ');' + '<br/>' + 'background: rgba('  + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ');' + '<br/>' + 'color: rgba('  + R.value + ', ' + G.value + ', ' + B.value + ',  ' + A.value/10 + ');';
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