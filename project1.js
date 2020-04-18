
function r() {
		if (document.Login.Username.value == "adamshideed" && document.Login.Password.value == "canada123") {
			 alert("Welcome in Adam!");
	}

	if (document.Login.Username.value != "adamshideed" || document.Login.Password.value != "canada123"){
		alert("There has been some error!");
	}

	else if (document.Login.Username.value == "" || document.Login.Password.value == "") {
		alert("Please write in something!");
	}
}