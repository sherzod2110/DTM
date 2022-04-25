var elInput = document.querySelector (".form__input");
var elBtn = document.querySelector (".form__btn");
var elSelect = document.querySelector ("#select");
var elOutput = document.querySelector (".wrapper__massage");

var maxBall = 200;
var grant = 150;
var kantrakt = 100;
var supper = (grant / 2);

var universitest = ["BuxDu", "SamDu", "Jizpi", "TDTU", "TATU", "TTA"];


for (var univer of universitest) {
  var create = document.createElement ("option");
  create.textContent=univer;
  create.value=univer;
  elSelect.append(create);

}

elBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();

  var input = elInput.value.trim();
  var number = Number(input)

  if (input > maxBall || input == ""){
    elInput.style.borderColor = "red";
    return
  }
  else if (isNaN(number)){
    elInput.style.borderColor = "red";
    return
  }

  elInput.style.borderColor = "black";
  var univ = elSelect.value;

    var massage = "" ;


    if (input >= grant) {
      massage = " Davlat granti asosida o'qishga qabul qilindingiz"
    }
    else if (input >= kantrakt && input < grant) {
      massage = "Kantrakt asosida o'qishga qabul qilindingiz "
    }
    else if (input >= supper && input < kantrakt) {
      massage = "O'qishga kira olmadingiz. Sizda super-kantrakt asosida o'qish imkoni bor"
    }
    else {
      massage = "O'qishga qabul qilinmadingiz"
    }
  
  elOutput.textContent = `Siz ${univ} ga ${massage}`

})


