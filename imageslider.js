var photo  =["image/jhankar.png","image/jhankar2.png","image/my-bg.png","image/my-bg2.png"];
var photo1=document.querySelector("img");
var count=0;

function prev() {
    count--;

if(count < 0)
{
    count=photo.length-1;
    photo1.src=photo[count];
}
else


    photo1.src=photo[count];



}
function next(){
    count++;

    if(count >= photo.length)
    {
        count=0;
        photo1.src=photo[count];
    }
    else

    photo1.src=photo[count];

}