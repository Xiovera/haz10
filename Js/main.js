function evaluar()
{	
	var numberA = document.getElementById("numberA").value;
	var numberB = document.getElementById("numberB").value;
	var salida1 = document.getElementById("salida1");
	var salida2 = document.getElementById("salida2");

	var suma = parseFloat(numberA)+ parseFloat(numberB);

	if (numberA == "" || numberB == ""){
		salida2.innerHTML = "completar";
	}
	else{
		if (numberA == 10 || numberB == 10) {
			salida1.innerHTML = suma;
			salida2.innerHTML = "Muy bien!";
		}
		if (suma == 10) {
			salida1.innerHTML = suma;
			salida2. innerHTML = "Muy bien!";
		}
		else{
			salida1.innerHTML = suma;
			salida2.innerHTML = "Inténtalo una vez más";
		}
	}
}



