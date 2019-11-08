/*let skaicius = prompt("Koks sveciu skaicius?");
console.log(skaicius);
let sveciai=[];
for(let i=0; i<skaicius; i++){
	sveciai[i]= prompt("Svecio vardas");	
}
for(let i=0; i<sveciai.length; i++){
	console.log(sveciai[i]);

}
let vardai = ["karolis", "jonas"];
for(vardas in vardai){
	console.log(vardas);
}

for (let vardas of vardai){
	console.log(vardas);
}*/
let skaicius = prompt("kiek dalyku baige?");
let dalykas =[];
let ivertinimas =[];
let aprasymas=[];

aprasymas = {
	1:'vienas',
	2:'du',
	3:'trys',
	4:'keturi',
	5:'penki',
	6:'sesi',
	7:'septyni',
	8: 'astuoni',
	9:'devyni',
	10:'miegot'
}


for(let i=0; i<skaicius; i++){
	dalykas[i] = prompt("Koks dalykas?");
	ivertinimas[i] = prompt("Koks ivertinimas?");
}
console.log(dalykas);
console.log(ivertinimas);

for(let i=0; i<skaicius; i++){

	if(ivertinimas[i]==1){
		console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[1] + ")");
		} 
		else if (ivertinimas[i]==2)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[2] + ")");
		}
		else if (ivertinimas[i]==3)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[3] + ")");
		} 

		else if (ivertinimas[i]==4)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[4] + ")");
		} 
		else if (ivertinimas[i]==5)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[5] + ")");
		} 
		else if (ivertinimas[i]==6)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[6] + ")");
		} 

		else if (ivertinimas[i]==7)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[7] + ")");
		} 
		else if (ivertinimas[i]==8)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[8] + ")");
		} 
		else if (ivertinimas[i]==9)	{
			console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[9] + ")");
		} else(console.log(dalykas[i] + " - " +ivertinimas[i] + "(" + aprasymas[10] + ")"))


				}