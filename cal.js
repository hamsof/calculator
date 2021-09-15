const t=document.querySelectorAll(".digit");
const y=document.querySelectorAll(".operChild");
y.forEach(key=>key.addEventListener("click",get_value));
t.forEach(key=>key.addEventListener("click",get_value));
var value_1=" ";
var oper;
var result;
var first_value="";
var second_value="";
var check=true;
function get_value() {
    if (
        this.textContent == '+' ||
        this.textContent == '-' ||
        this.textContent == '*' ||
        this.textContent == '/'
      )
      {
          oper=this.textContent;
          check=false;
          value_1+=this.textContent;
          document.querySelector(".screen").textContent=value_1;
      }
        else if(this.textContent=="=")
      {
            result = calculate(first_value,oper,second_value);
            document.querySelector(".screen").textContent=result;
            //now taking values to reset mode
            first_value="";
            second_value="";
            value_1="";
            check=true;//it should take now first input so make it to reset
      }
      else 
      {
         if(check){
              first_value+=this.textContent;
          }
          else{
              second_value+= this.textContent;
          }
          value_1+=this.textContent;
          document.querySelector(".screen").textContent=value_1;
      }
      
}

function calculate(first_value,oper,second_value)
{
        console.log(first_value + " " + oper + " " + second_value);
        let x = Number(first_value);
        let y = Number(second_value);
        if(oper=="*")
            return x*y;
        else if(oper=="+")
            return x+y;
        else if(oper=="-")
            return x-y;   
        else 
         return x/y;   
}




const e=document.querySelectorAll(".clearChild");
e.forEach(key=>key.addEventListener("click",clear));
function clear()
{
    document.querySelector(".screen").textContent = "0";
    value_1=" ";
}