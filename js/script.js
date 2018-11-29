function validarformulario() {

	// NOME
	if (document.formulario.nome.value=="" || document.formulario.nome.value.length < 5){

		alert("Por favor, digite o seu nome corretamente!");
		return false;
	}

	// TELEFONE
	if (document.formulario.telefone.value=="" || document.formulario.telefone.value.length < 9){
		alert("Por favor, digite o seu número corretamente!")
	}

	// E-MAIL
	if  (document.formulario.email.value=="" || document.formulario.email.value.indexOf('@')==-1 || document.formulario.email.value.indexOf('.')==-1){
		alert("Por favor, digite o seu e-mail corretamente!");
		return false;
	}

	// MENSAGEM 
	if (document.formulario.mensagem.value=="" || document.formulario.nome.value.length < 5){
		alert("Por favor, digite a sua mensagem coretamente!");
	}
}