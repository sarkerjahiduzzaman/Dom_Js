var number = parseFloat(prompt("Enter Your Number: "));
            
        
    if(number>=101 || number<0)
    console.log("Invalid");
    else{
        if(number>=80)
        console.log("Your Garade is : A+");


    else if(number<80 && number>=75)
    console.log("Your Grade is : A");
    else if(number<75 && number>=70)
    console.log("Your Grade is : A- ");
    else if(number<70 && number>=65)
    console.log("Your Grade is : B+");
    else if(number<65 && number>=60)
    console.log("Your Grade is : B-");
    else if(number<60 && number>=50)
    console.log("Your Grade is : C");
    else if(number<50 && number>=40)
    console.log("Your Grade is : D");
    else
    console.log("Faill");

    }
    

