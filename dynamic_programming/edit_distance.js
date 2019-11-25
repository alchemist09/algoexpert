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

