let skaicius = prompt("Koks sveciu skaicius?");
console.log(skaicius);
let sveciai=[];
for(let i=0; i<skaicius; i++){
	sveciai[i]= prompt("Svecio vardas");	
}
for(let i=0; i<sveciai.length; i++){
	console.log(sveciai[i]);

}
