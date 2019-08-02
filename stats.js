console.log("linked");
var subButton = $(".submit");
var container = $(".container");
var subButton1 = $(".submit1");
var container1 = $(".container1");
var subButton2 = $(".submit2");
var container2 = $(".container2");
var subButton3 = $(".submit3");
var container3 = $(".container3");
subButton1.on("click", showResult1);
subButton.on("click", showResult);
subButton2.on("click", showResult2);
subButton3.on("click", showResult3);

function showResult(){
  console.log("math");
  if (document.querySelector(".answer1").checked ==true){
    console.log("math2");
    container.text("");
    container.append(`<p class="jsText">Correct! In 2015-2016, only 2.9% of bachelor degrees in STEM belonged to African American women.</p>`);
  }
  else if (document.querySelector(".answer2").checked ==true){
    container.text("");
    container.append(`<p class="jsText">Incorrect! In 2015-2016, only 2.9% of bachelor degrees in STEM belonged to African American women. </p>`);
}
console.log("iffed");
}

function showResult1(){
  console.log("math");
  if (document.querySelector(".answer4").checked ==true){
    console.log("iffed2");
    container1.text("");
    container1.append(`<p class="jsText">Correct! In 2015-2016, only 5.0% of bachelor degrees in STEM belonged to Asian women.</p>`);
  }
  else if (document.querySelector(".answer3").checked ==true) {
    container1.text("");
    container1.append(`<p class="jsText">Incorrect! In 2015-2016, only 5.0% of bachelor degrees in STEM belonged to Asian women. </p>`);
}
}

function showResult2(){
  console.log("math");
  if (document.querySelector(".answer6").checked ==true){
    console.log("math2");
    container2.text("");
    container2.append(`<p class="jsText">Correct! Women in the United States made up less than 1/4 of those employed in STEM occupations in 2015.</p>`);
  }
  else if (document.querySelector(".answer5").checked ==true){
    container2.text("");
    container2.append(`<p class="jsText">Incorrect! Women in the United States made up less than 1/4 of those employed in STEM occupations in 2015. </p>`);
}
console.log("iffed");
}

function showResult3(){
  console.log("math");
  if (document.querySelector(".answer7").checked ==true){
    console.log("math2");
    containe3.text("");
    container3.append(`<p class="jsText">Correct! In 2015, only 1.8% of science and engineering employees in the United States were Latinas.</p>`);
  }
  else if (document.querySelector(".answer8").checked ==true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect! In 2015, only 1.8% of science and engineering employees in the United States were Latinas. </p>`);
}
console.log("iffed");
}
