# cpf-validator
Esta biblioteca destina-se à validação de números de CPF.
Na versão atual é capaz de retornar se o número informado é valido ou não.

## Como instalar:

```
$  npm install cpf-validator-tmc
```

## Como utilizar:

```
> const cpfValidator = require('cpf-validator-tmc');
> console.log(cpfValidator('12345678909'));
> // returns 'true'
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