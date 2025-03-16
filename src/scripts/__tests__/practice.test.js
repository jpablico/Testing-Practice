import '@testing-library/jest-dom';
import { capitalize } from '../practice';

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