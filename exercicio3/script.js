let nome = prompt ("digite seu nome")
let idade = Number (prompt ("digite sua idade"))

// if ternario 
nome === "José" ? console.log ("oi ,zé") : console.log ("ola " + nome)
idade >= 18? console.log ("pode tirar carteira de motorista!") : 
console.log("Ainda não pode tirar carteira de motorista")
	

// if 
if (nome === "José") {
	console.log("Oi, Zé!");
} else {
	console.log("Olá, " + nome);
}

if (idade >= 18) {
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
