var mins = 0;
var secs = 0;
var msecs = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

  function func(){
   msecs++;
    msecHeading.innerHTML= msecs;
    if(msecs >= 100){
      secs++;
      secHeading.innerHTML= secs;
      msecs=0;
    }else if(secs >= 60){
      mins++;
      minHeading.innerHtml=mins;
      secs=0;
    }
}
var interval ;  
function startFunc(){
interval= setInterval(func, 10);
var btn = document.getElementById("start");
btn.setAttribute("disabled","disabled");
console.log(btn.getAttribute("disabled"));
}
// var a;
// var b;
// var c;
function stopFunc(){
   clearInterval(interval);
     var obj ={
       minutes: mins,
       seconds: secs,
       miliseconds: msecs
     };
   //   console.log(obj);
    return obj;
    
}
function setFunc(){ 
   msecs=0;
   secs=0;
   mins=0;
   msecHeading.innerHTML= 00;
   secHeading.innerHTML= 00;
   minHeading.innerHTML= 00;
   stopFunc();

}
function save(){
   var x  = new Array();
   x  = stopFunc();

   //   var value = stopFunc();
// var result = Number(b.value);
    var result = document.createElement("p");
    result.innerText = "minutes:" + x.minutes + " "  +"seconds:" +  x.seconds +" "+ "milliseconds:" + x.miliseconds;
    var space = document.getElementById("body");
    space.appendChild(result);
console.log(x.seconds);
console.log(result);
}