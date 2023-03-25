
function сalc(operation,a,b){
switch (operation) {
  case "add":
    console.log(a+b); 
    break;
  case "multi":
    console.log(a*b); 
    break;
  case "subtract":
    console.log(a-b); 
    break;
  default:
    alert( "Нет таких значений" );
}

}

сalc('multi', 1, 2)