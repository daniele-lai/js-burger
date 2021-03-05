/*Chiedere il nome del panino, selezionare gli ingredienti, calcolare la somma e applicare lo sconto*/

var calculateOrder = document.getElementById('calculate');
var sale =["boolean20", "burger40", "spoiledcustomers", "ciao"];

calculateOrder.addEventListener("click",
  function () {
    //Facciamo scegliere il nome del panino
    var burgerName = document.getElementById('burger_name');
    if (burgerName.value != "") {
    //Selezioniamo gli ingredienti
    var burgerExtra = document.getElementsByClassName('burger_stuff');
    var somma = 50;

      for (var i = 0; i < burgerExtra.length; i++) {
        if (burgerExtra[i].checked == true) {
            somma += parseInt(burgerExtra[i].value);
          }
      }
      //Applichiamo uno sconto
      var saleCoupon = document.getElementById('discount');
      if (sale.includes(saleCoupon.value)) {
        somma = somma - (somma * 20 / 100);
      }
      // Applichiamo la somma
      var totalCheck = document.getElementById('sum');
      totalCheck.innerHTML = somma.toFixed(2) + "€";
    } else {
      alert("Inserisci un nome per il tuo burger")
      }
  }
);
