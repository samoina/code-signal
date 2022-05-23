/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17.
*/

function solution(year) {
  if(year%100===0){
    return year/100;
  }
  return Math.ceil(year/100);
}

console.log(solution(374));

/*Return the century. 
1-100 - 1st century
101-200 - 2nd century
201-300 - 3rd century
301-400 - 4th century
401-500 - 5th century
501-600 - 6th century
601-700 - 7th century
701-800 - 8th century
801-900 - 9th century
901-1000 - 10th century
1001-1100 - 11th century
1501-1600 - 16th century
2001-2101 - 21st century

All of the years which are divisible by 100 with no remainder, the century would be the year divided by 100. otherwise the rest of the years would be year divide by 100 and round up to get the century.
 */