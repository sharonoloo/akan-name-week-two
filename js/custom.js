function getUserInput() {
    var yearOfBirth = document.getElementById("year-input").value;
    var monthOfBirth = Number(document.getElementById("month-input").value);
    var dayOfBirth = Number(document.getElementById("day-input").value);
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
   //    console.log(myGenderValue);
  // validation functions
    function monthValidator () {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            return false;
        } else {
            return true;
        }
    }
    function dayValidator () {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
            if (dayOfBirth > 28 || dayOfBirth < 1) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                return false;
            } else {
                return true;
            }
            } else if (dayOfBirth < 1 || dayOfBirth > 31){
            return false;
            } else {
            return true;
        }
    }
    var monthValid = monthValidator();
    var dayValid = dayValidator();
    //formula to determine day of birth (Sunday = 1, Monday = 2)etc..
    var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
    ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
    //creating arrays of Akan names for males & females and days of the week
    var DAYS_OF_WEEK = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    var MALE_NAMES = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
    var FEMALE_NAMES = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];
    //generating and index value to select items on arrays
    var index;
    if (dayOfWeekNumber == 0){
        index = 6;
        } else {
        index = dayOfWeekNumber - 1;
        }
    console.log(index);
    if (myGenderValue == "male" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You were born on a " + DAYS_OF_WEEK[index] + " , your Akan name is " + MALE_NAMES[index];
        console.log('result');
        document.getElementById('result').style.fontSize = "18px";
        return false;
    } else if (myGenderValue == "female" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You were born on a " + DAYS_OF_WEEK[index] + " , your Akan name is " + FEMALE_NAMES[index];
        document.getElementById('result').style.fontSize = "18px";
        return false;
    } else {
    alert("You entered an invalid day or month, please try again");
    }
}