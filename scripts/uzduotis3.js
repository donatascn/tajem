var post = [
"Sveikinu radus darbą",
"Ar tikrai pabaigus kursą viskas bus gerai",
"Javascript nėra Java",
"Rasti video medžiagą visada šaunu"];

var ilgZodziuMasyvas = [];

function patsIlgiausiasZodis(zEilute) {
  var zodziuMasyvas = zEilute.split(' ');
  var ilgiausiasZodis = '';
      for (var j = 0; j < zodziuMasyvas.length; j++) {
        if (zodziuMasyvas[j].length > ilgiausiasZodis.length) {
          ilgiausiasZodis = zodziuMasyvas[j];
        }
      }
  ilgZodziuMasyvas.push(ilgiausiasZodis);
  return(ilgiausiasZodis);
}

for (var n = 0; n < post.length; n++) {
  patsIlgiausiasZodis(post[n]);
}
console.log(ilgZodziuMasyvas.join(' '));
