// 1limpar mascara
// 2validar tamanho
// 3validar repeticao
// !4validar se nao eh sequencia
// 5procurar digitos
// 6digito1
// 7digito2
// 8validar cpf


const cleanCpf = (cpf) => {

  return cpf.toString().replace(/[^\d]+/g, '');

};

const isRepeatingChars = (cpf) => {

  return cpf.split('').every((elem) => elem === cpf[ 0 ]);

};

const convertCpfToArray = (cpf) => {

  return Array.from(cpf);

};

const verifierDigit = (cpf, index) => {

  let sum = cpf.slice(0, (index - 1));
  let mult = sum.map(element => element * index--);
  let total = mult.reduce((accumulator, currentValue) => accumulator + currentValue);
  let modTotal = (total * 10) % 11;
  return modTotal;

};

const testerDigit = (digit) => {

  return (digit > 9) ? 0 : digit;

};

const cpfValidator = (cpf) => {

  const cleanedCpf = cleanCpf(cpf); 
  const arrayCpf = convertCpfToArray(cleanedCpf);
  if (cleanedCpf.length !== 11 || isRepeatingChars(cleanedCpf)) return false;
	
  let digit1 = verifierDigit(arrayCpf, 10);
  digit1 = testerDigit(digit1);
	
  let digit2 = verifierDigit(arrayCpf, 11);
  digit2 = testerDigit(digit2);
	
  if (digit1 !== parseInt(arrayCpf[ 9 ]) || digit2 !== parseInt(arrayCpf[ 10 ])) return false;
	
  return true;

};

module.exports = cpfValidator;


