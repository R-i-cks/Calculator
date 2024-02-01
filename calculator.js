let nDis1 = 0;
let nDis2 = 0;
let operation = "";
let change = false;



const add = function(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a+b;
};

const subtract = function(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a-b;
};


const multiply = function(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  return a*b;
}


const divide = function(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  if (b!=0) return a/b;
  else return "Error: Can´t divide by 0";
}

const operate = function(op,a,b){
  if (op == "+") return add(a,b);
  else if (op == "-") return subtract(a,b);
  else if (op =="x") return multiply(a,b);
  else if (op =="/") return divide(a,b);
  else return("invalid");
}

const power = function(a,b) {
    let base = a;
	for (let i=1; i<b; i++){
      base= base*a;
    }
  return base;
};

const factorial = function(a) {
  let base = a;
  if (base == 0) return 1;
	while (a>1){
      a= a-1;
      base= base*a;
    }
  return base;
};


const insertN = function(n){
  if(change)
  { clearDisplay();
    change=false;
  }
  valDis = document.getElementById('numDisplay').value;
  if (valDis.includes("Error") || valDis.includes("NaN")){
    Reset();
  }
  document.getElementById('numDisplay').value += n;
}

const defineOp = function(op){
  change = true;
  if (operation!=""){makeOp();}
  if (document.getElementById('numDisplay').value !==""){
    nDis1 = document.getElementById('numDisplay').value;
  }else{
    nDis1 = 0;
  }
  operation = op;
}


const insertComma = function(){
  num = document.getElementById('numDisplay').value;
  if (!num.includes(".")){
    document.getElementById('numDisplay').value += ".";
  }
}

 const makeOp = function(){
  if (operation != "" ){
    if(change){nDis2=""}
    else{nDis2 = document.getElementById('numDisplay').value;}
    if (nDis2==""){
      if(operation=="/" || operation=="x"){nDis2=1;}
      else{nDis2=0;}
    }
    if (nDis1=="."){nDis1=0;}
    if (nDis2=="."){nDis2=0;}

    let result = operate(operation, nDis1, nDis2);
    operation = "";
    nDis2 =""
    document.getElementById('numDisplay').value = result;
 }
}

const clearDisplay = function(){
  document.getElementById('numDisplay').value = "";
}
const Reset = function(){
  clearDisplay();
  nDis1="";
  nDis2="";
  operation="";
}

const TakeOne = function(){
  let ini = document.getElementById('numDisplay').value;
  ini = ini.slice(0,-1);
  document.getElementById('numDisplay').value = ini;
}