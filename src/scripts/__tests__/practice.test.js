import '@testing-library/jest-dom';
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from '../practice';

test('practice test', () => {
  expect(true).toBe(true);
});

test('capitalize function should capitalize the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('jAVAscript')).toBe('Javascript');
  expect(capitalize('')).toBe('');
  expect(capitalize('a')).toBe('A');
});

test('reverse string function should return the reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
});

test('calculator add function should add two numbers correctly', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 5)).toBe(4);
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.add(-5, -10)).toBe(-15);
});

test('calculator subtract function should subtract two numbers correctly', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(2, 5)).toBe(-3);
  expect(calculator.subtract(0, 0)).toBe(0);
  expect(calculator.subtract(-5, -2)).toBe(-3);
});

test('calculator multiply function should multiply two numbers correctly', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.multiply(-2, 6)).toBe(-12);
  expect(calculator.multiply(0, 5)).toBe(0);
  expect(calculator.multiply(-3, -4)).toBe(12);
});

test('calculator divide function should divide two numbers correctly', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(7, 2)).toBe(3.5);
  expect(calculator.divide(-12, 4)).toBe(-3);
  expect(calculator.divide(-12, -4)).toBe(3);
});

test('caesarCipher should shift characters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('hello', 2)).toBe('jgnnq');
});

test('caesarCipher should wrap from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('z', 1)).toBe('a');
});

test('caesarCipher should preserve case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('AbCdEf', 1)).toBe('BcDeFg');
});

test('caesarCipher should keep punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('a b.c?d!', 1)).toBe('b c.d?e!');
});

test('analyzeArray should return object with correct properties', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('analyzeArray should work with negative numbers', () => {
  const result = analyzeArray([1, -8, 3, -4, 2]);
  expect(result).toEqual({
    average: -1.2,
    min: -8,
    max: 3,
    length: 5
  });
});

test('analyzeArray should work with a single element array', () => {
  const result = analyzeArray([5]);
  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});

