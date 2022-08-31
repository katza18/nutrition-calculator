var bw, h, age, lose;

function takeInput() {
    bw = document.getElementById("bodyweight").value;
    h = document.getElementById("height").value;
    age = document.getElementById("age").value;
    if (document.getElementById("lose").checked) lose = true;
    else lose = false;
    calcCalories();
}

function calcCalories() {
    //TDEE Calculation (Harris-Benedict Formula)
    var bmr = 66 + (13.7 * bw) + (5 * h) - (6.8 * age); //basal metabolic rate
}