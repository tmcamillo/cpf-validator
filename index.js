const cleanCpf = (cpf) => {
  return cpf.toString().replace(/[^\d]+/g, '');
};

const isRepeatingChars = (cpf) => {
  return Array.from(cpf).every((elem) => elem === cpf[ 0 ]);
};

const checkDigit = (cpf, initialNumber) => {
  const sliced = cpf.slice(0, (initialNumber - 1));
  const multiply = sliced.map(element => element * initialNumber--);
  const total = multiply.reduce((accumulator, currentValue) => (accumulator + currentValue)) * 10 % 11;
  return total;
};

const validateDigit = (digit) => {
  return (digit === 10 || digit === 11) ? 0 : digit;
};

const cpfValidator = (cpf) => {
  const cleanedCpf = cleanCpf(cpf); 
  const arrayCpf = Array.from(cleanedCpf);
  if (cleanedCpf.length !== 11 || isRepeatingChars(cleanedCpf)) {
    return false;
  }
	
  let digit1 = checkDigit(arrayCpf, 10);
  digit1 = validateDigit(digit1);
	
  let digit2 = checkDigit(arrayCpf, 11);
  digit2 = validateDigit(digit2);
	
  if (digit1 !== parseInt(arrayCpf[ 9 ]) || digit2 !== parseInt(arrayCpf[ 10 ])) {
    return false;
  }
  return true;
};

module.exports = cpfValidator;