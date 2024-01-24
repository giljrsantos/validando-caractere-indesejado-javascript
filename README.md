# Validação Input

Neste exemplo, estou validando a entrada do usuário em um campo de entrada de e-mail. Ao criar/ou informar um e-mail, alguns caracteres não são permitidos, ex: `\\|/!#$%*&`. Então criei uma validação simples, mas de muita utilidade.

Criei um arquivo externo `js` e criei uma função onde faço toda a validação.
    
A validação remove quaisquer caracteres indesejados do valor de entrada.

Crie um array com os caracteres indesejados
    
    ex: const arrayCaracteresIndesejados = ['\\', '|', '/', '!', '#', '$', '%', '*', '&',];
Crie uma expressão regular para corresponder aos caracteres indesejados 

    ex: const regex = /[\\|/!#$%*&]/g;

Verifique se algum dos caracteres indesejados está presente no valor de entrada
```javascript
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
  }
```

No `HTML`, no input onde o usuário informa o e-mail, você chama a função criada no evento  `oninput='minhaFuncao()'` como mostra o código abaixo:
```HTML
<input oninput="validarInput()">
```

Repare que também criei uma `small` com o texto informando quais são os caracteres indesejados.
```HTML
<small id="emailError" class="emailErrorCaracterHidden">
    Os caracteres \\|/!#$%*& não são permitidos
</small>
```
Quando digitar um caractere que não é aceito, o `input type='email'` vai ficar com a borda vermelha, e a small com a mensagem de erro irá aparecer. Se o próximo caractere digitado, for um valor válido, a borda do `input type='email'` retornar como defeult e a small com a mensagem de erro irá desaparecer.

### Formulário Sem Informação
<img src="src\img\1.png" width="100%">

### Input Endereço de e-mail, sistema informa que digitado um caractere indesejado
<img src="src\img\2.png" width="100%">

### Próximo caractere digitado é desejado, input retorna default
<img src="src\img\3.png" width="100%">

<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>

