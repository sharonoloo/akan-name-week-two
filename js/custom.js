const MALE_NAMES=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const DAYS_OF_THE_WEEK=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getUserInputAndCalculateDay()
{
    var year=document.getElementById("year-input").value;
    console.log(year);
    var century=parseInt(year.substring(0,2));
    console.log(century);
    year=parseInt(year);
    console.log(year);
    var month = parseInt(document.getElementById("month-input").value);
    console.log(month);
    var day=parseInt(document.getElementById("day-input").value);
    console.log(day);
    var dayOfTheWeek = Math.round( (( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
    return dayOfTheWeek;
}

//console.log(getUserInputAndCalculateDay());

function getGender(){
    var gender = prompt("Enter your gender:");
    return gender;
}

// console.log(getGender());
function main(){
    document.getElementById("output").innerHTML = "";
    var day1 = getUserInputAndCalculateDay();
    console.log(day1);
    var gender = getGender();
    console.log(gender);
    var akanName = null;
    //gender=female;
    
    if (gender.toLowerCase().startsWith("f")){
        akanName = FEMALE_NAMES[day1];
    }else{
        akanName = MALE_NAMES[day1];
    }
    document.getElementById("output").innerHTML = "Your Akan Name is " + akanName;
}
console.log(main())





