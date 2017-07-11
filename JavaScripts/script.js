var message;
message = document.getElementById("catch");
message.innerHTML = "";
document.write('Go');
var rA, cA, rB, cB;
//Checking
function check(){
  rA = document.getElementById('A1').value;
  cA = document.getElementById('A2').value;
  rB = document.getElementById('B1').value;
  cB = document.getElementById('B2').value;
  try{
    if(rA == "" || rB == "" || cA == "" || cB == ""){
      throw "Empty";
    }else if(isNaN(rA) || isNaN(rB) || isNaN(cA) || isNaN(cB)){
      throw "Not a number";
    }else if(rA !== cB){
      throw "Row Matrix A & Coloums Matrix B donot match";
    }else if(rA == cB){
      create(rA, rB, cA, cB);
      show();
      throw "Working";
    }
  }
  catch(err){
    message.innerHTML = "Error: "+err;
  }
}
function show(){
  document.getElementById('error').className = "show";
}
function create(rA, rB, cA, cB){
  //Matrix one
  var i, j, element;
  var parent = document.getElementById('rowColoumnA');

  for (i = 0; i < rA; i++){
    for (j = 0; j < cA; j++){
      element = document.createElement('INPUT');
      element.setAttribute('id', 'boxA'+i+j);
      element.setAttribute('placeholder', "Row "+(i+1)+" Coloumn "+(j+1));
      parent.appendChild(element);
    }
    parent.innerHTML += "<br/>";
  }
  //Matrix two
  parent = document.getElementById('rowColoumnB');
  for (i = 0; i < rB; i++){
    for (j = 0; j < cB; j++){
      element = document.createElement('INPUT');
      element.setAttribute('id', 'boxB'+i+j);
      element.setAttribute('placeholder', "Row "+(i+1)+" Coloumn "+(j+1));
      parent.appendChild(element);
    }
    parent.innerHTML += "<br/>";
  }

  element = document.createElement('BUTTON');
  element.setAttribute('onclick','math()');
  var txt = document.createTextNode('Submit');
  element.appendChild(txt);
  parent.appendChild(element);
}

function math(){
  var i, j, k;
  var a = [];
  var b = [];
  var sum = [];
  for (i = 0; i < 10; i++){
    a[i] = [];
    b[i] = [];
    sum[i] = [];
  }
  for (i = 0; i < rA; i++){
    for (j = 0; j < cA; j++){
      sum[i][j] = 0;
      a[i][j] = document.getElementById('boxA'+i+j).value;
      console.log(a[i][j]);
    }
  }
  for (i = 0; i < rB; i++){
    for (j = 0; j < cB; j++){
      b[i][j] = document.getElementById('boxB'+i+j).value;
      console.log(b[i][j]);
    }
  }
  for (i = 0; i < rA; i++){
    for (j = 0; j < cB; j++){
      for (k = 0; k < cA; k++){
        sum[i][j] = sum[i][j] + (a[i][k]*b[k][j]);
      }
    }
  }
  document.getElementById('multiply').innerHTML =" ";
  for (i = 0; i < rA; i++){
    for (j = 0; j < cA; j++){
      document.getElementById('multiply').innerHTML += sum[i][j]+" ";
    }
      document.getElementById('multiply').innerHTML += "<br>";
  }
}
