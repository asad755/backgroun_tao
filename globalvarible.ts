let globalVar = "Accessible everywhere";
function showExample() {
    let localVar = "Accessible only inside this function";
  console.log(localVar);
  //console.log(globalVar); // works
}
console.log(globalVar);