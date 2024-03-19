$(document).ready(function(){
    $('#registroForm').submit(function(e){
      e.preventDefault(); 
       if(validarFormulario()){
       
        console.log('Formulario válido. Enviando datos...');
      }
    });

    $('#cancelar').click(function(){
      console.log('Registro cancelado');
    });

    function validarFormulario(){
    var formularioValido = true;
      $('#registroForm input[required], #registroForm select[required]').each(function(){
        if($(this).val().trim() === ''){
          formularioValido = false;
          return false;
         }
      });

      if(!formularioValido){
        alert('Por favor complete todos los campos obligatorios.');
      }

      return formularioValido;
    }

  document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var primerApellido = document.getElementById("primerApellido").value;
    var segundoApellido = document.getElementById("segundoApellido").value;
    var departamento = document.getElementById("departamento").value;
    var direccion = document.getElementById("direccion").value;
    var numeroCelular = document.getElementById("numeroCelular").value;
    var email = document.getElementById("email").value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var numeroCI = document.getElementById("numeroCI").value;
    var complemento = document.getElementById("complemento").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    
    var informeHTML = "<h2>Información del Registro:</h2>";
    informeHTML += "<p><strong>Nombre Completo:</strong> " + nombreCompleto + "</p>";
    informeHTML += "<p><strong>Primer Apellido:</strong> " + primerApellido + "</p>";
    informeHTML += "<p><strong>Segundo Apellido:</strong> " + segundoApellido + "</p>";
    informeHTML += "<p><strong>Departamento:</strong> " + departamento + "</p>";
    informeHTML += "<p><strong>Dirección:</strong> " + direccion + "</p>";
    informeHTML += "<p><strong>Número Celular:</strong> " + numeroCelular + "</p>";
    informeHTML += "<p><strong>Email:</strong> " + email + "</p>";
    informeHTML += "<p><strong>Sexo:</strong> " + sexo + "</p>";
    informeHTML += "<p><strong>Número de CI:</strong> " + numeroCI + "</p>";
    informeHTML += "<p><strong>Complemento:</strong> " + complemento + "</p>";
    informeHTML += "<p><strong>Fecha de Nacimiento:</strong> " + fechaNacimiento + "</p>";
    
    document.getElementById("informe").innerHTML = informeHTML;
});

function cancelar() {
    document.getElementById("registroForm").reset();
    document.getElementById("informe").innerHTML = "";
}})