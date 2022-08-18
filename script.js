
function BMI (weight,height) {

    let resuit =weight / (height*height)
    return resuit

}

console.log(BMI(10,10))


function Status (bmi){

    if (bmi < 18.5){
        return "نقص الوزن"
    }else if ( bmi >=  18.5 && bmi < 25){
        return "وزنك ضحي"
    }else if (bmi >= 25 ){
        return "لديك زياده في الوزن الصحي"
    }
   

}

   

function calculate() {

    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    let bmi = BMI(weight,height)
    let desc = Status(bmi)

    let div = document.getElementById('result')

    div.innerText = bmi + " == " + desc
    




}


