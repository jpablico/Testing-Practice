function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    else if (/[A-Z]/.test(char)) {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    return char;
  }).join('');
}

function analyzeArray(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };