/**
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @returns {number} The sum, unless the two values are the same,
 * then returns double their sum.
 *
 * @example
 * sumDouble(1, 2); // 3
 * @example
 * sumDouble(2, 2); // 8
 * @example
 * sumDouble(5, 5); // 20
 */
export function sumDouble(num1, num2) {
  let result = num1 + num2;

  if (num1 == num2) {
    result *= 2;
  }

  return result;
}

/**
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {boolean} Whether at least one of the numbers is 10 or their sum is 10
 *
 * @example
 * makes10(10, 5); // true
 * @example
 * makes10(7, 3); // true
 * @example
 * makes10(4, 4); // false
 */
export function makes10(num1, num2) {
  const num1IsTen = num1 === 10;
  const num2IsTen = num2 === 10;
  const sumIsTen = num1 + num2 === 10;

  return num1IsTen || num2IsTen || sumIsTen;
}

/**
 * Hint: Math.abs(num) returns the absolute value of num.
 *
 * @param {number} n - The number to check.
 * @param {number} distance - The allowed distance from 100.
 * @returns {boolean} True if n is within the distance of 100, otherwise false.
 *
 * @example
 * near100(95, 5); // true
 * @example
 * near100(90, 5); // false
 * @example
 * near100(105, 10); // true
 */
export function near100(n, distance) {
  const diff = Math.abs(100 - n); //distance between n and 100

  return diff <= distance;
}

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} n - The number to check.
 * @returns {boolean} Whether n is a multiple of 3 or 5.
 *
 * @example
 * isMultiple35(3); // true
 * @example
 * isMultiple35(10); // true
 * @example
 * isMultiple35(7); // false
 */
export function isMultiple35(n) {
  const divisBy3 = n % 3 === 0;
  const divisBy5 = n % 5 === 0;

  return divisBy3 || divisBy5;
}

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} num1 - First positive number.
 * @param {number} num2 - Second positive number.
 * @returns {boolean} Whether both numbers share the same last digit
 *
 * @example
 * shareLastDigit(27, 7); // true
 * @example
 * shareLastDigit(123, 43); // true
 * @example
 * shareLastDigit(10, 21); // false
 */
export function shareLastDigit(num1, num2) {
  const lastDigit1 = num1 % 10;
  const lastDigit2 = num2 % 10;

  return lastDigit1 === lastDigit2;
}

/**
 * @param {number} temp1 - First temperature.
 * @param {number} temp2 - Second temperature.
 * @returns {boolean} True if one temperature is less than 0 and
 * the other is greater than 100
 *
 * @example
 * isColdAndHot(-5, 120); // true
 * @example
 * isColdAndHot(150, -1); // true
 * @example
 * isColdAndHot(10, 50); // false
 */
export function isColdAndHot(temp1, temp2) {
  const temp1LessThanZero = temp1 < 0;
  const temp2LessThanZero = temp2 < 0;
  const temp1greaterThan100 = temp1 > 100;
  const temp2greaterThan100 = temp2 > 100;

  const oneLessTwoGreater = temp1LessThanZero && temp2greaterThan100;
  const twoLessOneGreater = temp2LessThanZero && temp1greaterThan100;

  return oneLessTwoGreater || twoLessOneGreater;
}

/**
 * @param {string} A - First string.
 * @param {string} B - Second string.
 * @returns {string} A new string with the form ABBA
 *
 * @example
 * makeABBA("Hi", "Bye"); // "HiByeByeHi"
 * @example
 * makeABBA("Yo", "Alice"); // "YoAliceAliceYo"
 * @example
 * makeABBA("a", "b"); // "abba"
 */
export function makeABBA(A, B) {
  return A + B + B + A;
}

/**
 * Returns a string of the form short+long+short, with the shorter string
 * on the outside and the longer string on the inside.
 *
 * You may assume that the strings will have different lengths.
 *
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {string} The combined short-long-short string.
 *
 * @example
 * makeSLS("Hi", "Hello"); // "HiHelloHi"
 * @example
 * makeSLS("Puppy", "Dog"); // "DogPuppyDog"
 * @example
 * makeSLS("a", "abc"); // "aabca"
 */
export function makeSLS(str1, str2) {
  let short; //shorter string
  let long; //longer string

  if (str1.length < str2.length) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }

  return short + long + short;
}

/**
 * You and your date are trying to get into an exclusive club.
 * If either of you is very stylish (8 or more), the result is 2 (yes).
 * With the exception that if either of you has style 2 or less, the result is 0 (no).
 * Otherwise, the result is 1 (maybe).
 *
 * @param {number} you - Your style rating from 0 to 10.
 * @param {number} date - Your date's style rating from 0 to 10.
 * @returns {number} 0 for no, 1 for maybe, 2 for yes.
 *
 * @example
 * canEnterClub(9, 5); // 2
 * @example
 * canEnterClub(1, 10); // 0
 * @example
 * canEnterClub(5, 5); // 1
 */
export function canEnterClub(you, date) {
  let minStyle = 2; //point at which definite no
  let maxStyle = 8; //point at which definite yes

  if (you <= minStyle || date <= minStyle) {
    return 0; //no
  } else if (you >= maxStyle || date >= maxStyle) {
    return 2; //yes
  } else {
    return 1; //maybe
  }
}

/**
 * Your phone rings. Normally you answer, except:
 * - In the morning, you only answer if it is your boss calling.
 * - If you are asleep, you do not answer at all.
 *
 * @param {boolean} isMorning - True if it is morning.
 * @param {boolean} isBoss - True if the caller is your boss.
 * @param {boolean} isAsleep - True if you are asleep.
 * @returns {boolean} True if you should answer the phone, otherwise false.
 *
 * @example
 * shouldAnswerPhone(false, false, false); // true
 * @example
 * shouldAnswerPhone(true, false, false); // false
 * @example
 * shouldAnswerPhone(true, true, false); // true
 */
export function shouldAnswerPhone(isMorning, isBoss, isAsleep) {
  if (isAsleep) {
    //can't answer, won't answer
    return false;
  } else if (isMorning) {
    //only if I have to (i.e if boss is calling)
    return isBoss;
  } else {
    //I have to, but I dont want to
    return true;
  }
}
