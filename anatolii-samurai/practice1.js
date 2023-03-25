// Calc
function calc(operation,a,b){
    switch(operation){
      case "add":
        return a + b;
      case "multi":
        return a * b;
      case "sub":
        return a - b;
   }
  }
  console.log(calc("add",89,2));
  console.log(calc("multi",8,2));
  console.log(calc("sub",13,2));