/**
 Given a iron rod of certain length and the price of selling rods of different 
 lengths in the market, how would we cut the rod so that the profit is maximized?

 For example, let us say the price of rods of different lengths in the market
 is as given below.

          Length        Price
               1 ---->  1
               2 ---->  5
               3 ---->  8
               4 ---->  9
               5 ---->  10
               6 ---->  17
               7 ---->  17
               8 ---->  20

 If we have a rod of length 4, then selling the rod as it is will bring us a profit
 of 9 dollars. Where as if we cut it into two pieces of length 2 each, then the two
 pieces will be sold for 5 dollars each bring in 10 USD. (5+5=10). Hence it's a good 
 idea to cut the rod into 2 pieces rather than selling it as a whole.

 But we're still not sure if cutting it into two pieces is the most optimal solution
 or not because we have not seen all possible values. Since we're cutting the rod
 into integer lengths only, the table below shows all possible ways of cutting the 
 rod and the cost of that combination in the market.

        Length of Each Part                Total Market Value
                        4     - - - ->       9
                     1, 3     - - - ->       9 (1+8)
                  1, 1, 2     - - - ->       7 (1+1+ 5)
                     2, 2     - - - ->       10 (5+5)
               1, 1, 1, 1     - - - ->       4 (1+1+1+1)

 From the table above, it's clear that cutting the rod into two equal pieces of
 length 2 gives us the maximum value.

*/

/**
 * Array Index Represents Length of Rod
 */
const price = [0, 1, 5, 8, 9, 10, 17, 17, 20];

