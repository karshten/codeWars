const createTriangle = (count) => {
  let star = ''

  for (let i = 1; i <= count; i++) {
    if(i % 2 === 0) continue

    let res = '\n' + ' '.repeat(Math.floor((count - i) / 2)) + '*'.repeat(i)
    star+=res
  }

  return star
}

console.log(createTriangle(5)); 
/* --> 

   *
  ***
 *****
*******

*/