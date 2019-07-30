export const reverse = word => word.split('').reverse().join('');

export const reverseNumeric = number => Number(reverse(String(number)));