var bw, h, age, lose, male, bmr, kg, cm;

function takeInput() {
    bw = document.getElementById("bodyweight").value;
    h = document.getElementById("height").value;
    age = document.getElementById("age").value;
    
    //Check if the user is male or not
    if (document.getElementById("male").checked) male = true;
    else male = false;

    //Check whether the user wants to lose weight or not
    if (document.getElementById("lose").checked) lose = true;
    else lose = false;

    //Check selected unit for bw and convert
    var sel = document.getElementById("units1");
    var index = sel.selectedIndex;
    if (sel.options[index].text !== "kg") bw = bw * 0.454;

    //Check selected unit for height and convert
    sel = document.getElementById("units2");
    index = sel.selectedIndex;
    if(sel.options[index].text !== "cm") h = h * 2.54;
    
    calcCalories();
}

function calcCalories() {
    //BMR Calculation (Harris-Benedict Formula)
    if (male) bmr = 66 + (13.7 * bw) + (5 * h) - (6.8 * age); //basal metabolic rate
    else bmr = 655 + (9.6 * bw) + (1.8 * h) - (4.7 * age);

    //TDEE Calculation
}