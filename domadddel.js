var link=document.getElementsByTagName("a");
var headin3=document.createElement("h1");
var text=document.createTextNode("this is jahsis");
headin3.appendChild(text);
var myvaar=document.getElementById("mydiv");
myvaar.appendChild(headin3);
var heading1=document.getElementsByTagName("h2")[0];
myvaar.removeChild(heading1);

var heading4=document.createElement("h1");
var text1=document.createTextNode("Mr.Moyen Uddin Mojumder");
heading4.appendChild(text1);
myvaar.insertBefore(heading4,headin3);