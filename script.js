const display = document.getElementById("display");

function appendToDisplay(inp){
    display.value += inp;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(err){
        display.value = err;
    }
}

function clearDisplay(){
    display.value = "";
}