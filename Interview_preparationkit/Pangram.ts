/**
 * A pangram is a string that contains every letter of the alphabet. 
 * Given a sentence determine whether it is a pangram in the English alphabet. Ignore case.
 *  Return either pangram or not pangram as appropriate.
Example
s= 'The quick brown fox jumps over the lazy dog'
The string contains all letters in the English alphabet, so return pangram.
 */


function pangrams(s: string): string {
    const filteredString = s.toLowerCase().replace(/[^a-z]/g, "");
    const set = new Set(filteredString);
    return set.size === 26 ? 'pangram' : 'not pangram';
 }