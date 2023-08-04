

function inputNumber(num){ 
    var ASCIICode = (num.which) ? num.which : num.keyCode
     if (ASCIICode > 31 && (ASCIICode < 57)){
       alert("შეიყვანეთ მხოლოდ რიცხვები!")
     }
   }


   function isIdValid() {
	if (Text.value.length < 9) {
		text.classList.remove("correct");
		text.classList.add("error");
		text.innerText = "password must be at least 8 char";
		return false;
	} else {
		text.innerText = "";
		text.classList.remove("error");
		text.classList.add("correct");
		return true;
	}
}