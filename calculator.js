const calc = {
  displayValue: "0",
  allCalc: [],
  operators: ["+", "-", "x", "÷"],
};

function displayUpdate() {
  document.getElementById("display").innerHTML = calc.displayValue;
}

function clearallAC() {
  calc.displayValue = "0";
  calc.allCalc = [];
  displayUpdate()
}

function onNumberClick(number) {
  console.log(number)
  calc.displayValue = String(number);
  const lastElement = calc.allCalc.length - 1;
  const last = calc.allCalc[lastElement];
  if(calc.operators.includes(last) || calc.allCalc.length === 0){
    calc.allCalc.push(String(number));
  }
  else{
    calc.allCalc[lastElement] = calc.allCalc[lastElement] + String(number)
  }
  calc.displayValue = calc.allCalc.join("");
  displayUpdate();
  console.log(calc.allCalc)
}

function onOperatorClick(op) {
  console.log(op);

  const lastElement = calc.allCalc.length - 1;
  const last = calc.allCalc[lastElement];

  if (calc.operators.includes(last)) {
    calc.allCalc[lastElement] = op;
  } 
  else {
    calc.allCalc.push(op);
  }

  calc.displayValue = calc.allCalc.join("");
  displayUpdate();
  console.log(calc.allCalc);
}

function onPlusminusClick() {
  if (calc.allCalc.length === 0) {
    return;
  }
  const lastElement = calc.allCalc.length - 1;
  const last = calc.allCalc[lastElement];
  if (!isNaN(last)) {
    const num = Number(last) * -1;
    calc.allCalc[lastElement] = String(num);
    calc.displayValue = calc.allCalc.join("");
    displayUpdate();
  }
}
function onEqualClick() {
  if (calc.allCalc.length === 0) {
    return;
  }
  let dis = calc.allCalc.join("");
  const lastChar = dis[dis.length - 1];
  if (calc.operators.includes(lastChar) || lastChar === "." || lastChar === "%") {
    dis = dis.slice(0, -1);
  }
  dis = dis.replace(/x/g, "*").replace(/÷/g, "/");
  dis = dis.replace(/(-?\d+(\.\d+)?)%/g, "($1/100)");
  const result = eval(dis);
  if (result === undefined || result === null || Number.isNaN(result)) {
    return;
  }
  calc.displayValue = String(result);
  calc.allCalc = [String(result)];
  displayUpdate();
}


document.getElementById("num1").addEventListener("click" , () => {onNumberClick(1)})
document.getElementById("num2").addEventListener("click" , () => {onNumberClick(2)})
document.getElementById("num3").addEventListener("click" , () => {onNumberClick(3)})
document.getElementById("num4").addEventListener("click" , () => {onNumberClick(4)})
document.getElementById("num5").addEventListener("click" , () => {onNumberClick(5)})
document.getElementById("num6").addEventListener("click" , () => {onNumberClick(6)})
document.getElementById("num7").addEventListener("click" , () => {onNumberClick(7)})
document.getElementById("num8").addEventListener("click" , () => {onNumberClick(8)})
document.getElementById("num9").addEventListener("click" , () => {onNumberClick(9)})
document.getElementById("num0").addEventListener("click" , () => {onNumberClick(0)})

document.getElementById("plus").addEventListener("click" , () => {onOperatorClick("+")})
document.getElementById("minus").addEventListener("click" , () => {onOperatorClick("-")})
document.getElementById("mulltiply").addEventListener("click" , () => {onOperatorClick("x")})
document.getElementById("dot").addEventListener("click" , () => {onOperatorClick(".")})
document.getElementById("equal").addEventListener("click" , () => {onEqualClick("=")})
document.getElementById("divison").addEventListener("click" , () => {onOperatorClick("÷")})

document.getElementById("AC").addEventListener("click" , () => {clearallAC("AC")})
document.getElementById("percentage").addEventListener("click" , () => {onOperatorClick("%")})
document.getElementById("plus/minus").addEventListener("click" , () => {onPlusminusClick("+/-")})
