/**
 * Valida a entrada do usuário em um campo de entrada de email.
 * Remove quaisquer caracteres indesejados do valor de entrada.
 */
function validarInput() {
  // Obtenha a referência ao elemento HTML
  const inputElement = document.getElementById('inputEmail');

  // Recebe o valor do objeto referência ao elemento HTML
  let valorInput = inputElement.value;

  // Defina uma matriz de caracteres indesejados
  const arrayCaracteresIndesejados = ['\\', '|', '/', '!', '#', '$', '%', '*', '&',];

  // Defina uma expressão regular para corresponder aos caracteres indesejados
  const regex = /[\\|/!#$%*&]/g;

  // Verifique se algum dos caracteres indesejados está presente no valor de entrada
  if (arrayCaracteresIndesejados.some(caracter => valorInput.includes(caracter))) {
    // Obtenha a referência ao elemento HTML
    let borderInput = document.getElementById("inputEmail");
    // Adiciona a classe css onde colocar uma cor vermelha no input
    borderInput.classList.add("inputEmailError");

    // Obtenha a referência ao elemento HTML
    let smallError = document.getElementById("emailError");
    // Remove a class css onde o display=none
    smallError.classList.remove("emailErrorCaracterHidden");
    // Adiciona e a class css onde o display=block para mostrar a mensagem
    smallError.classList.add("emailErrorCaracter");
    // Remova os caracteres indesejados do valor de entrada usando a expressão regular
    valorInput = valorInput.replace(regex, '');

    // Atualize o valor do elemento de entrada com a string corrigida
    inputElement.value = valorInput;
  } else {

    let borderInput = document.getElementById("inputEmail");
    borderInput.classList.remove("inputEmailError");

    let smallError = document.getElementById("emailError");
    smallError.classList.add("emailErrorCaracterHidden");
    smallError.classList.remove("emailErrorCaracter");
  }

}