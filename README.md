# Validador de CPF
Esta biblioteca destina-se à validação de números de CPF.
Na versão atual é capaz de retornar se o número informado é valido ou não.

## Como instalar:

```
$  npm install cpf-validator-tmc
```

## Como utilizar:

Exemplo de retorno válido: 

```javascript
 const validator = require('cpf-validator-tmc');
 validator.cpfvalidator("12345678909") //true
```
Exemplo de retorno inválido: 

```javascript
 const validator = require('cpf-validator-tmc');
 validator.cpfvalidator("22222222222") //false
```  

## roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0 (released)

* Funcionalidades: validação de cpf;
* Tratamento para entrada de números e letras;
* Limpeza de máscara de cpf;