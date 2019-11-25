/**
 The words COMPUTER and COMMUTER are very similar, and an update of just one 
 letter P -> M will change the first word into the second word. Similarly, 
 the word SPORT can be changed into SORT by deleting one character, P, or
 equivalently SORT can be changed into SPORT by inserting one character P.

 Edit distance between two strings is defined as the minimum number of character
 operations (update, insert, delete) required to convert one string into another.

 Given two strings, str1 and str2, and the following three operations that can
 be performed on str1,
         1. insert
         2. replace(updarte)
         3. delete

 Find the minimum number of operations required to convert str1 into str2. For 
 example, if the input string are CAT and CAR, then the edit distance is 1.

       C A T
           | replace
           v
       C A R

 Similarly, if the two input strings are SUNDAY and SATURDAY, then the edit distance
 is 3.
      
       S                     U   N D A Y
            |     |              |
            v     v              v
       S    A     T          U   R D A Y
         insert insert        replace
            

*/

/**
 * Brute force solution of Levenshtein algorithm
 * @param {string} str1 - The first string
 * @param {string} str2 - The second string
 * @returns {number} - Minimum no. of operations to convert str1 into str2
 */
function editDistance(str1, str2) {
  // if str1 is empty or null, we need to insert characters of str2
  if(str1 === null || str1 === "") {
    return str2.length;
  }

  // if str2 is empty or null, we need to delete all characters of str1
  if(str2 === null || str2 === "") {
    return str1.length;
  }

  // if first characters of both strings are the same, then ignore it
  // and find the edit distance between the remaining characters
  if(str1[0] === str2[0]) {
    return editDistance(str1.slice(1), str2.slice(1));
  }

  // find the edit distance of all three operations
  let d = null, u = null, i = null;

  d = editDistance(str1.slice(1), str2);
  u = editDistance(str1.slice(1), str2.slice(1));
  i = editDistance(str1, str2.slice(1));

  // return minimum of the three values + 1
  return Math.min(d, u, i) + 1;
}

