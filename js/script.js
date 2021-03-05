/*Chiedere il nome del panino, selezionare gli ingredienti, calcolare la somma e applicare lo sconto*/

var calculateOrder = document.getElementById('calculate');
var somma = 50;

calculateOrder.addEventListener("click",
  function () {
    //Facciamo scegliere il nome del panino
    var burgerName = document.getElementById('burger_name');
    if (burgerName.value != "") {

      //Selezioniamo gli ingredienti
      var burgerExtra = document.getElementsByClassName('burger_stuff');
      for (var i = 0; i < burgerExtra.length; i++) {
        if (burgerExtra[i].checked == true) {
          somma += parseInt(burgerExtra[i].value);
          console.log(somma);
        }
      }


    } else {
      alert("Inserisci un nome per il tuo burger")
    }
  }
);
