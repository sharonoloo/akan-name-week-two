function getUserInputAndCalculateDay()
{
    var year=(prompt("Enter year: "));
    var century=parseInt(year.substring(0,2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter month: "));
    var day=parseInt(prompt("Enter day: "));
    var dayOfTheWeek = Math.round( (( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

    return dayOfTheWeek;
}

console.log(getUserInputAndCalculateDay());






