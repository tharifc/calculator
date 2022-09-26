function displayValue(num){
    display.value+=num
}

function evaluateExpression(){
    let currentvalue=display.value
    let result=eval(currentvalue)
    display.value=result
}

function clearBox(){
    display.value=""
}

function backspace(){
    let res=display.value.slice(0,-1)
    display.value=res
}