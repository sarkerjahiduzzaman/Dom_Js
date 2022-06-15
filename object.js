/*var student1={
    name : "Jahiduzzaman Sarker" ,
    age : 24,
    cgpa : 3.50,
    lang : ["Bangla ","English","Hindi"]
}
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);*/

function student2(name,age,cgpa,language){
    this.name =name;
    this.age= age;
    this.cgpa= cgpa;
    this.language=language;
    this.display= function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.language);
    }
}
var student3=new student2("Jahiduzzaman",24,3.5,["hindi","bangla","English"]);
var student1=new student2("Hasan",24,3.50,["English","Bangla"]);
student1.display();
student3.display();

 var x=Math.sqrt(25);
console.log(x);
var a=Math.abs(-10);
console.log(a);
var b=Math.pow(2,4);
console.log(b);
var c=Math.floor(4.8);
console.log(c);

