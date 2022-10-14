const MALE_NAMES=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const DAYS_OF_THE_WEEK=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getUserInputAndCalculateDay()
{
    var year=(prompt("Enter year: "));
    var century=parseInt(year.substring(0,2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter month: "));
    var day=parseInt(prompt("Enter day: "));
    var dayOfTheWeek = Math.round( (( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

    return dayOfTheWeek;
}


function getGender(){
    var gender = prompt("Enter your gender:");
    return gender;
}
function main(){
    document.getElementById("output").innerHTML = "";
    var day = getUserInputAndCalculateDay();
    var gender = getGender();
    
    if (gender.toLowerCase().startsWith("f")){
        akanName = FEMALE_NAMES[day];
    }else{
        akanName = MALE_NAMES[day];
    }
    document.getElementById("output").innerHTML = "Your Akan Name is " + akanName;
}






