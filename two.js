var a =20;
document.write(a);
console.log(a);
/*var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var sureName=prompt("Enter sure Name");
var fixedName=prompt("Enter Your Fixed Name");
var subName;
var fullName=firstName+lastName;*/
/*console.log(fullName);
console.log(fullName.length);
console.log(fullName.charAt(0,2));
fullName= fullName.toUpperCase();
document.write(fullName);
subName=sureName.concat(fixedName);
document.write(subName );*/

var num1= prompt("Enter First Number : ");
var num2=prompt("Enter Second Number : ");
var sub,sum,div,mul;

num1=parseInt(num1, 10);
num2=parseInt(num2, 10);
sum= num1+num2;
sub=num1-num2;
mul= num1*num2;
div=num1/num2;
s=num1%num2;


document.write("Sum is "+sum+"</br>");
document.write("Sub is :"+sub+"</br>");
document.write("Mul is : " +mul+"</br>");
document.write("Div is :" + div+"</br>");
document.write("Div is :" +s+"<br/>");