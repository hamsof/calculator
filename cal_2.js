//using eval that evaluates whole string like 3+34/3*4
//it is dangerous




//getting inputs
const t=document.querySelectorAll(".digit");
const y=document.querySelectorAll(".operChild");
y.forEach(key=>key.addEventListener("click",get_value));
t.forEach(key=>key.addEventListener("click",get_value));
var value_1=" ";
//driver code
function get_value() {
    if(this.textContent!="=")
    {
        value_1+=this.textContent;
        console.log(value_1);
        document.querySelector(".screen").textContent=value_1;
    }
    else{
        //cheking if it is an invalid expression like *4/3
        try {
            console.log(eval(value_1));
            document.querySelector(".screen").textContent=eval(value_1);
            value_1="";
        }
        catch (e) {
            document.querySelector(".screen").textContent="invalid expression";
            value_1="";
        }
    }        
}


//clear funtion
const e=document.querySelectorAll(".clearChild");
e.forEach(key=>key.addEventListener("click",clear));
function clear()
{
    document.querySelector(".screen").textContent = "0";
    value_1=" ";
}