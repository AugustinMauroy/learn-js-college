function codeHTMLCellule(nombre) {
	const classe = nombre < 0 ? "negatif" : "positif";
	return `<td class="${classe}">${nombre}</td>`;
}

document.write("<table>");
document.write("<tr><th>No</th><th>Nombre</th><th>Min</th><th>Max</th><th>Somme</th></tr>");

let nombreDeNombres = 0;
let minimum;
let maximum;
let somme = 0;

while (true) {
	const saisie = prompt("Entrez un nombre (ou une chaîne vide pour terminer) :");

	if (saisie === null || saisie.trim() === "") {
		break;
	}

	const nombre = Number(saisie);

	if (Number.isNaN(nombre)) {
		break;
	}

	nombreDeNombres++;
	minimum = nombreDeNombres === 1 ? nombre : Math.min(minimum, nombre);
	maximum = nombreDeNombres === 1 ? nombre : Math.max(maximum, nombre);
	somme += nombre;

	document.write("<tr>");
	document.write(`<td>${nombreDeNombres}</td>`);
	document.write(codeHTMLCellule(nombre));
	document.write(codeHTMLCellule(minimum));
	document.write(codeHTMLCellule(maximum));
	document.write(codeHTMLCellule(somme));
	document.write("</tr>");
}

document.write("</table>");
