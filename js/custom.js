function getUserInput() {
    var year = document.getElementById("year-input").value;
    var month = Number(document.getElementById("month-input").value);
    var day = Number(document.getElementById("day-input").value);
    var genders = document.getElementsByName("gender");
    // function to get gender
        function getGender () {
            for (var gender of genders){
                if (gender.checked){
                    return gender.value;
                    }
                }
            }
    var myGenderValue = getGender();

    function monthValidator () {
        if (month < 1 || month > 12) {
            return false;
        } else {
            return true;
        }
    }
    function dayValidator () {
        if (month === 2 && Number(year)%4 === 0) {
            if (day > 28 || day < 1) {
                return false;
            } else if (month === 2 && day > 29) {
                return false;
            } else if (month === 2 && day < 1) {
                return false;
            } else {
                return true;
            }
            } else if (day < 1 || day > 31){
            return false;
            } else {
            return true;
        }
    }
    var monthValid = monthValidator();
    var dayValid = dayValidator();
   
    var dayOfWeekNumber = Math.floor((((Number(year.slice(0,2))/4)-2*Number(year.slice(0,2))-1)+
    ((5*Number(year.slice(2,4))/4))+((26*(month+1)/10))+day)%7);
    
    var DAYS_OF_WEEK = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    var MALE_NAMES = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
    var FEMALE_NAMES = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];
   
    var index;
    if (dayOfWeekNumber == 0){
        index = 6;
        } else {
        index = dayOfWeekNumber - 1;
        }
    console.log(index);
    if (myGenderValue == "male" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You are a " + myGenderValue + " born on a " + DAYS_OF_WEEK[index] + " , your Akan name is " + MALE_NAMES[index];
        console.log('result');
        document.getElementById('result').style.fontSize = "18px";
        return false;
    } else if (myGenderValue == "female" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You are a " + myGenderValue+ " born on a " + DAYS_OF_WEEK[index] + " , your Akan name is " + FEMALE_NAMES[index];
        document.getElementById('result').style.fontSize = "18px";
        return false;
    } else {
    alert("You entered an invalid day or month, please try again");
    }
}