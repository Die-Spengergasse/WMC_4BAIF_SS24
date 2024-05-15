function ausgabe() {
	alert("Funktion");
	alert("Noch eine Anweisung");
}

function funktion2() {
	alert("Funktion 2");
	return 23;
	alert("Noch eine Anweisung");

}

function funktion3(i, j, k) {
	alert(i + j * k);

}

function lokaleVariablen(i) {
	var z = 9;
	alert(i);

}

function fakultaet(n) {
	if(n == 0) {
		return 1;
	} else {
		return n * fakultaet(n - 1);
	}
}

function aussen() {
	var a = 21;
	document.write("<h3>Die Antwort ist ");
	function innen() {
		document.write(a * 2);
	}

	innen();
	document.write("!</h3>");
}