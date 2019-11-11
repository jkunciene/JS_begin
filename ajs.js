var vardas = 'Bilas';
console.log(vardas.length); 
var vardas = 'Bilas';
console.log(vardas[3]);
console.log(vardas.indexOf("las")); 
console.log(vardas.slice(0,2));

console.log(vardas.toLowerCase());
console.log(vardas.toUpperCase());

var pakeistasVardas = vardas.replace("Bi","Gi");
console.log(pakeistasVardas);

var duomenys = 'Kaunas,Vilnius,Alytus,Klaipeda';
var duomenuMasyvas = duomenys.split(',');
console.log(duomenuMasyvas);
var stringas = duomenuMasyvas.join(',');
console.log(stringas);

let vardai='ieva, karolis, jonas';
vardai = vardai.split(',');
console.log(vardai);
//prideti nauja i gala
vardai.push('Andrius');
console.log(vardai);
vardai.pop();
vardai.shift();
console.log(vardai);
vardai.unshift('tadukas');
console.log(vardai);
vardai.splice(1,1);
console.log(vardai);

//sukurti masyva is 10 elementu, pasalinti 6 ir po jo prideti du naujus

let masyvas='ieva, karolis, jonas, algirdas, jonas, zita, kestas, ona, lina, antanas';
masyvas = masyvas.split(',');
console.log(masyvas);

masyvas.splice(5, 1, "idejau", "darviena");
console.log(masyvas);

let vidurkis = 8;
let lankomumas = 6;

/*if(vidurkis == 10){
	console.log("puikus");}
	else if(vidurkis == 8){
		console.log('gerai varai');
	}
	else if(vidurkis>=5 && lankomumas >= 6){
		console.log("laikykis, pratemsi")
	}
		else{
			console.log("pasistenk");
		}*/

switch (vidurkis){
	case 8:
	console.log("geras");
	break;
	case 6:
	console.log("vidutinis");
	break;
	default:
	console.log("ar moketes?");

}




