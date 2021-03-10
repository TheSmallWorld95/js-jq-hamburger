// Prendo il bottone dell'hamburger
var hamburger = $(".fa-bars");

console.log(hamburger);

// Al click del bottone voglio che la lista diventi block
hamburger.click(function () {
  var lista = $(".hamburger-menu")

  lista.show()
})


var cross = $(".fa-times");

console.log(cross);

cross.click(function () {
  var lista = $(".hamburger-menu")

  lista.hide()
})
