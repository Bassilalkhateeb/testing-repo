

// this is how u make a comment is JS //
/* 
or this way
*/
function getName () {
    var userName = prompt ("Enter your name please");
    console.log(typeof prompt);
    console.log(userName);
    for (var i=0;i<=10;i=i+5){
        console.log(i);
    }
}
getName ();



var getSum = function (a,b){
    var c = a+b;
    return c;
}

var sum = getSum (10,4);
alert(sum);
console.log(getSum(20,5));
document.write(sum);


