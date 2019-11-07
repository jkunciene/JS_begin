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





