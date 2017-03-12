var pcs = [
	{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
	{ "modelis":"dell apskritimas", "kaina": 697, "spalva":{"juoda":1,"balta":2} },
	{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
	{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

console.log('Galimi variantai:\n ');

var variantai = {};
var modelisIrKaina = {};

// for statement that goes through each of the values of the array 'pcs'.
for (var i = 0; i < pcs.length; i++) {
    var kainaDuKomp = pcs[i].kaina * 2;

    modelisIrKaina[pcs[i].modelis] = kainaDuKomp; // modelisIrKaina gets assigned key:model, value:price for two PC's

    var modelioSpalvos = []; // An array that will catch available colors for each model.

    // Here we cycle through each of the colors of the 'spalva' object.
    for (spalvosPavadinimas in pcs[i].spalva) {
        if ((spalvosPavadinimas === 'balta' || spalvosPavadinimas === 'juoda') && (pcs[i].spalva[spalvosPavadinimas] >= 2 && kainaDuKomp <= 1600)) {

						//array 'modelioSpalvos' gets the color(s) of models that have at least two units available. Object 'variantai' is assigned key:model, value:color
            modelioSpalvos.push(spalvosPavadinimas);
            variantai[pcs[i].modelis] = modelioSpalvos;
        }
    }
}

for (key in variantai) {
	//if the the array containing the color(s) has more than one color, we need to print them out separated by ' ir '
	if (variantai[key].length > 1) {

        console.log('Modelis: ' + key + '\n' + 'Kaina: ' + modelisIrKaina[key] + '\n' + 'Spalvos:' + variantai[key][0] + ' ir ' + variantai[key][1] +'\n ')
    } else {
        console.log('Modelis: ' + key + '\n' + 'Kaina: ' + modelisIrKaina[key] + '\n' + 'Spalvos: ' + variantai[key] + '\n ')
    }
}
