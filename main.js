//Callback hell
function myfirstcallback(callhel1)
{
    setTimeout(function(){
        console.log("First Callback Function");
        callhel1(mythridcallback);
    },3000);
}
function mysecondcallback(callhel2)
{
    setTimeout(function(){
        console.log("Second Callback Function");
        callhel2();
    },1000);
}
function mythridcallback()
{
    setTimeout(function(){
        console.log("Thrid Callback Function");
    },1000);
}

myfirstcallback(mysecondcallback);
