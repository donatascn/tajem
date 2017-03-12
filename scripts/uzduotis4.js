// Turime studentų sąrašą. jQuery pagalba pridėkite prie esamo studentų sąrašo 2 studentus priekyje sąrašo
// ir 3 studentus gale sąrašo. Taip pat sukurkite du įvykius:
// 1. Paspaudus ant studento vardo vieną kartą - vardo matomumas sumažinamas iki 20%,
// o paspaudus antrą kartą matomumas grąžinamas iki 100%
// 2. Paspaudus du kartus (double click) - studento vardas paryškinamas "darkgoldenrod" spalva
$(function(){
  $('.students').prepend('<li><a href="#">Petras</a></li><li><a href="#">Andrius</a></li>')
  $('.students').append('<li><a href="#">Donatas</a></li><li><a href="#">Angele</a></li><li><a href="#">Vilija</a></li>')
}
);

$(function(){
  $("li").on({
    click: function(){
      $(this).toggleClass('closed');

  },
  dblclick: function(){
    $(this).toggleClass('alt');
  }

});
});
