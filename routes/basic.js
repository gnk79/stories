var year= 2000
function leapyear(year){
    if(year%4==0 && year%400==0){
                 if(year%100!=0){
                     console.log("it is not a leap year");
                 } else { 
                     console.log("it is a leap year");
                 }
    console.log("it is a leap year");
    }
}
leapyear(year);
