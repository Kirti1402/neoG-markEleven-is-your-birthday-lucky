const dob=document.querySelector("#dob");
const luckyNumber=document.querySelector("#lucky-number");
const luckybtn=document.querySelector(".luck-num-btn");
const output=document.querySelector("#output");

console.log(dob);
console.log(luckyNumber);
var sum=0;

function clickHandler(){


    dobValue=dob.value;
    luckyValue=luckyNumber.value;
    var sum=0;

    if(dobValue == "" || luckyValue== "" || luckyValue<=0){
        output.classList.add("output-err");
        output.innerText="Please enter valid input 🥸";  
    }
    else if(dobValue !="" && luckyValue>0){
        output.classList.remove("output-err");
        checkLuckyNumber();
    }


}



function checkLuckyNumber(){
    dobList=dobValue.replaceAll('-','');
    console.log("Replaced all",dobList);
    console.log("adding dob value added",dobValue);
    for(var i=0;i<dobList.length;i++){
        console.log("in array value of i",dobList[i])
        sum+=parseInt(dobList[i]);
        console.log("sum is",sum);
    }

    if(sum%luckyValue == 0){
        output.innerText="Yeahh!! Your Birthday is LUCKY 🎉🎉";   
    }else{
        output.innerText="oops!! Your Birthday is NOT LUCKY 🥴🥴"
    }

}







luckybtn.addEventListener('click',clickHandler);