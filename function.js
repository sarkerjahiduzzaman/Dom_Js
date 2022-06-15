var count=0;
for(var i=1;i<=5;i++)
{
    var num=parseInt(prompt("Enter Your Number 1 to 5 : "));
    var randomNumber=Math.floor(Math.random()*6); 
    console.log("Random number is "+ randomNumber) ;
    if( randomNumber==num)
    {
     count++;
   
    }

    

}
var lost=5-count;
console.log("You Won "+count+" time");
console.log("You Lost "+lost+" ");