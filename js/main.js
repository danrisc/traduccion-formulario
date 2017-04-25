function translate (){
	var title = document.getElementById ("form-signin-heading");
	var email = document.getElemetById ("form-signin-heading");
	var password = document.getElementById ("inputPassword");
	var remember = document.getElementsByTagName ("span")[0];
	var button = document.getElementsByClassName ("btn")[0];

	title.innerHTML = "Por favor Inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";


}
translate ();