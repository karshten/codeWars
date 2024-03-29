const twoSum = (n, target) => {
  
}

// console.log(twoSum([1,2,3,5,6,7], 8));

// Сложности алгортмов {
//     O(1) = время на выполнение алгоритма не зависит от полученных данных,
//     O(log2n) = Binary search - бинарный поиск (каждый раз делить array на пополам),
//     O(n log n) = ,
//     O(n) = линейный алгоритм,
//     O(n^2) = Пример : for(...){for(...)}
//     O(n^2) - не очень так делать, так как количество итераций увеличеваеться 10 => (10 * 10 === 100) итд,
//     O(n^3) = нельзя такое ипользовать,
//     O(2^n) = ,
//     O(n!) = алгоритм почти никогда не выполнится
// }

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// литералы шаблонные строки : ``

// sort mutates original array
// splice mutates original array
// pop mutates original array
// push mutates original array
// shift mutates original array
// unshift mutates original array
// reverse mutates original array

// function smash (words) {
//    return words.join(" ")
// };
// console.log(smash(["hello", "world"])) => "hello world"

// function booleanToString(b){
//   return String(b); || b.toString()
// }
// console.log(booleanToString(true)) => 'true'

// function stringToNumber(str){
//   return +str || Number(str) || parseInt(str);
// }
// console.log(stringToNumber("123")) => 123

// function solution(str){
//   return str.split('').reverse().join(''); || [...str].reverse().join('')
// }
// console.log(solution("world")) => "dlrow"

// function digitize(n) {
//     return (n + '').split('').map(Number).reverse();
//     || return String(n).split('').map(Number).reverse()
// }
// console.log(digitize((35231)) => [1, 3, 2, 5, 3]

// function fakeBin(x){
//     return x.split("").map((sym)=>{
//         return sym >= 5 ? sym = '1' : sym = '0'
//     }).join("")
// }
// console.log(fakeBin('45385593107843568')) =>  '01011110001100111'

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((num1,num2)=>{
//       return num1 + num2
//   })
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) => 21

// function divisibleBy(numbers, divisor){
//     return numbers.filter((num => num % divisor === 0))
// }
// console.log(divisibleBy([1,2,3,4,5,6], 3)) => [3, 6]

// function mergeArrays(a, b) {
//     return [...new Set
//     (a.concat(b))
//     ].sort((a, b) => a - b)
//     просто можно sort()
//     return Array.from(new Set(a.concat(b).sort((a, b) => (a - b))));
//     ||
//     return arr1
//         .filter((item) => !arr2.includes(item))
//         .concat(arr2)
//         .sort((a, b) => a - b)
// }
// console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])) => [1, 2, 3, 4, 5, 6, 7, 8]

// function noSpace(x){
// return x.replace(/\s/g, '')
// return x.split(' ').join('')
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) => "8j8mBliB8gimjB8B8jlB"

// function getAverage(marks) {
//     return Math.floor(
//         marks.reduce((num1, num2) => {
//             return (num1 + num2)
//         }) / marks.length
//     )
// }
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])) => 1 "average"

// function stringClean(s) {
//     return s.replace(/[0-9]/g, '')
// }
// console.log(stringClean('123qwe')) => 'qwe'

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//     const youLiveTime = pontoonDistance / youSpeed
//     const sharkTime =
//         dolphin === true ? sharkDistance / sharkSpeed * 2 : sharkDistance / sharkSpeed
//     return youLiveTime < sharkTime ? 'Alive' : 'Dead'
// }
// console.log(shark(12, 24, 4, 8, true))

// function divisors(integer) {
//     let arr = []
//     for (let i = 2; i < integer; i++) {
//         let res = integer/i === Math.floor(integer/i) ? i : false
//         arr.push(res)
//     }
//     return arr.filter(n => n !== false).length !== 0 ? arr.filter(n => n !== false) : `${integer} is prime`
// }

// console.log(divisors(14))

// const isSquare = (n) => {
//     let num = Math.abs(Math.floor(Math.sqrt(n)))
//     return num * num === n ? true : false
// }
//
// console.log(isSquare(-1))

// function opposite(n) {
//   return n > 0 ? -Math.abs(n) : Math.abs(n)
// }
//
// console.log(opposite(-1))

// function findShort(s) {
//     return s.split(' ').map((sym) => {
//         return sym.length
//     }).reduce((s, s2) => {
//         return s > s2 ? s2 : s
//     })
// }
//
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'))

// function createPhoneNumber(numbers) {
//     return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "(123) 456-7890"

// function abbrevName(name){
//   return name[0].toUpperCase() + '.' + name[name.indexOf(' ')+1].toUpperCase()
// }
//
// console.log(abbrevName('shtefan oskar'))

// function sumTwoSmallestNumbers(numbers) {
//     return numbers.map((n) => {
//         return Math.floor(Math.floor(Math.abs(n)))
//     }).sort((a, b) => a - b).slice(0, 2).reduce((n1, n2) => n1 + n2)
// }

// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))

// const sequenceSum = (begin, end, step) => {
//     let sum = 0
//     for (let i = begin; i <= end; i+=step) {
//         sum += i
//     }
//     return sum
// };

// console.log(sequenceSum(1,5,1)) 15

// function friend(friends) {
//     return friends.map((name) => {
//         return name.replace(/(\d+)/g, 'moreThanFive')
//     }).filter((name)=>{
//          return name.length === 4 ? name : null
//     })
// }
//
// console.log(friend(['Hell', 'Is', 'a', 'badd', 'word']))

// function areYouPlayingBanjo(name) {
//   return name.toUpperCase().substr(0,1) === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
// }
//
// console.log(areYouPlayingBanjo('reter'))

// function problem(x) {
//     if (typeof x === "string") {
//         return "Error"
//     } else return x * 50 + 6
// }
//
// console.log(problem('dadas'))

// function duplicateEncode(word) {
//     return word
//         .split('')
//         .map(function (item, pos, self) {
//             return self.indexOf(item) === pos ? '(' : ')'
//         })
//         .join('');
// }

// console.log(duplicateEncode('dadasda'))

// function isDivisible(n, x, y) {
//     if (n % x === 0 && n%y ===0){
//         return true
//     }
//     else return false
// }
//
// console.log(isDivisible(28,3, 2))

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
// regexp for check pin.length === 4 || 6

// function setAlarm(employed, vacation){
//     if (employed === false || vacation === true && employed === true){
//         return false
//     }
//     else return true
// }
//
// console.log(setAlarm(false ,false))

// function invert(array) {
//    return array.map(n => {
//        return n > 0 || n === 0 ? n*-1 : Math.abs(n)
//    })
// }
//
// console.log(invert([0]))

// function findUniq(arr) {
//     return arr.filter((n, i) =>{
//         return i === arr.indexOf(n)
//     })
// }
//
// console.log(findUniq([1, 0, 0, 0]))

// function squareDigits(num) {
//     return Number(num.toString().split('').map((num) => {
//         return num * num
//     }).join(''))
// }
//
// console.log(squareDigits(3212))

// function XO(str) {
//     let xCount = 0
//     let oCount = 0
//     str.toLowerCase().split('').filter((sym) => {
//         if (sym === 'x') {
//             return xCount + 1
//         } else if (sym === 'o') {
//             return oCount + 1
//         }
//     })
//     return xCount === oCount
// }

// console.log(XO('oxdadasd'))

// function filter_list(l) {
//     return l.filter(i => {
//         return i === 0 || typeof i !== 'string'
//     })
// }

// console.log(filter_list([1, 2, 'aasf', '1', '123', 123, 0]))

// function reverseWords(str) {
//     return str.split(' ').map((word)=>{
//         return word.split('').reverse().join("")
//     }).join(' ')
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//       return args.reduce((num1, num2)=>{
//           return num1 > num2 ? num2 : num1
//       })
//   }
// }

// var number=function(array){
//     let finalArr = []
//     for (let i = 0; i < array.length; i++) {
//         finalArr.push(`${i+1}: ` + array[i])
//     }
//     return finalArr
// }
// console.log(number(["a", "b", "c"]))

// function solution(str, ending){
//     return str.slice(-ending.length) === ending
// }

// console.log(solution('samurai', 'ai'))

// function findOdd(a) {
//     let counts = {}
//     for (var i = 0; i < a.length; i++) {
//         counts[a[i]] = 1 + (counts[a[i]] || 0);
//     }
//     const uniqArr = Object.entries(counts).reduce((acc, val) => acc.concat(val))
//     const num = Number(uniqArr.filter((item, idx) => {
//         return typeof item !== 'string' && item % 2 !== 0
//     }).join(''))
//     return Number(uniqArr.map((item, idx) => {
//         return item === num ? uniqArr[idx - 1] : null
//     }).join(""))
// }
// function findOdd(a) {
//     return a.reduce((a, b) => a^b)
// }
//
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))

// function findNextSquare(sq) {
//     return  !!(Math.sqrt(sq) % 1) ? -1 : (Math.sqrt(sq) + 1) ** 2
// }
//
// console.log(findNextSquare(155))

// function repeatStr (num, str){
//     let result = ''
//     for (let i = 0; i < num; i++) {
//         result += str
//     }
//     return result
// }
//
// console.log(repeatStr(3, '***'))

// function multiply(nums) {
//     return nums.map(num => num * 2)
// }
//
// console.log(multiply([1,2,3]))

// function betterThanAverage(classPoints, yourPoints) {
//   return (classPoints.reduce((num, num2)=> num += num2) / classPoints.length) < yourPoints
// }
//
// console.log(betterThanAverage([10, 20,30], 22))

// function isToday(date) {
//   return new Date().toDateString() === date.toDateString();
// }
//
// console.log(isToday())

// function twoSort(s) {
//     return s.sort()[0].split('').join('***')
// }
//
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

// function pigIt(str) {
//     let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//     let arrStr = str.split(' ')
//     let finalStr = arrStr.map((s, idx, arr) => {
//         return spChars.test(s) ? s : s.substr(1) + s[0] + 'ay'
//     }).join(' ')
//
//     return finalStr
// }
//
// console.log(pigIt('This is my string !'))

// function isMerge(s, part1, part2) {
//     if (s.length < (part1.length + part2.length)) {
//         return false
//     } else {
//         return s.split('').every(item => {
//             return part1.split('').concat(part2.split('')).includes(item)
//         })
//     }
// }
//
// console.log(isMerge('codewarss', 'cdwrr', 'oeas'))

// function between(a, b) {
//     return  [... Array(b - a + 1). keys()]. map(i => i + a)
// }
//
// console.log(between(-2,2))

// function cubeOdd(arr) {
//     let result = 0
//     if (arr.some(item => typeof item !== "number")) {
//         return undefined
//     } else {
//         for (const i of arr) {
//             i % 2 !== 0 ? result += i ** 3 : null
//         }
//         return result
//     }
// }
//
// console.log(cubeOdd([1, 2, 3, 4]))

// function disemvowel(str) {
//     let vowels = /[aeiou]/gi
//     if (vowels.test(str)){
//         return str.replace(vowels, '')
//     }
//     else return str
// }
//
// console.log(disemvowel('No offense but,\\nYour writing is among the worst I\'ve ever read'))

// function goodVsEvil(good, evil) {
//     let goodForce = good.split(' ').map((worth, idx) => {
//         if (idx === 0){
//             return +worth
//         }
//         else if (idx === 1){
//             return +worth * 2
//         }
//         else if (idx === 2 || idx === 3){
//             return +worth * 3
//         }
//         else if (idx === 4){
//             return +worth * 4
//         }
//         else return +worth * 10
//     }).reduce((num1, num2)=> num1 +=num2)
//     let evilForce = evil.split(' ').map((worth, idx) => {
//         if (idx === 0){
//             return +worth
//         }
//         else if (idx === 1 || idx === 2 || idx === 3){
//             return +worth * 2
//         }
//         else if (idx === 4){
//             return +worth * 3
//         }
//         else if (idx === 5){
//             return +worth * 5
//         }
//         else return +worth * 10
//     }).reduce((num1, num2)=> num1 +=num2)
//     if (evilForce > goodForce){
//         return 'Battle Result: Evil eradicates all trace of Good'
//     }
//     else if (goodForce > evilForce){
//         return 'Battle Result: Good triumphs over Evil'
//     }
//     else return 'Battle Result: No victor on this battle field'
// }
//
// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))

// function bmi(weight, height) {
//     if(weight / (height**2) <= 18.5){
//         return "Underweight"
//     }
//     else if ((weight / (height**2)) <= 25 ){
//         return "Normal"
//     }
//     else if (weight / (height**2) <= 30){
//         return 'Overweight'
//     }
//     else return 'Obese'
// }
//
// console.log(bmi())

// function music(numbers) {
//     const chorusOfSong = [
//         "Never gonna give you up",
//         "Never gonna let you down",
//         "Never gonna run around and desert you",
//         "Never gonna make you cry",
//         "Never gonna say goodbye",
//         "Never gonna tell a lie and hurt you"]
//     return numbers.map((num, idx) => {
//         return num === chorusOfSong.indexOf(chorusOfSong[num]) ? chorusOfSong[num] : null
//     }).map((str, idx) => {
//         return idx % 2 !== 0 ? str.substr(0, 11).toUpperCase() + ' ' + str.substr(12) : str
//     })
// }

// console.log(music([4, 4, 3, 5]))

// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join('')
// };
//
// console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

// function digPow(n, p) {
//     let nums = n.toString().split('').map(str => +str)
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = nums[i] ** (p + i)
//     }
//     let overall = nums.reduce((num1, num2) => num1 += num2) / n
//     return Math.floor(overall) === overall ? overall : -1
// }
//
// console.log(digPow(89, 1))

// oddOrEven = (array) => array.length === 0 ? 'even' : array.reduce((num1, num2)=> num1+=num2) % 2 === 0 ? 'even' : 'odd'
//
// console.log(oddOrEven([1,2,3,4]))

// function digital_root(n) {
//     let numLength = n.toString().split('').map(s => +s).reduce((num1, num2) => num1 += num2).toString().length
//     let result = n.toString().split('').map(s => +s).reduce((num1, num2) => num1 += num2)
//     while (result >= 10){
//         result = result.toString().split('').map(s => +s).reduce((num1, num2) => num1 += num2)
//     }
//     return result
// }
//
// console.log(digital_root(12))

// function DNAStrand(dna){
//     return  dna.split('').map(item=>{
//         return item === "A" ? "T" : item === "C" ? "G" : item === "T" ? "A" : item === "G" ? "C" : null
//     }).join('')
// }
//
// console.log(DNAStrand('ATCG'))

// function paperwork(n, m) {
//     if (n < 0 || m < 0) {
//         return 0
//     }
//     else return n *m
// }
//
// console.log(paperwork(-5, -5))

// function monkeyCount(n) {
//     let array = []
//     for (let i = 1; i <= n; i++) {
//         array.push(i)
//     }
//     return array
// }
//
// console.log(monkeyCount(5))

// function simpleMultiplication(number) {
//     if (number % 2 === 0){
//         return number * 8
//     }
//     else return number * 9
// }
//
// console.log(simpleMultiplication(2))

// function alphabetPosition(text) {
//   let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(l => l.toLowerCase())
//   return text.split('').map(item =>{
//       return letters.indexOf(item.toLowerCase())+1
//   }).filter(item =>{
//       return item === 0 ? '' : item
//   }).join(' ')
// }
//
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// function removeChar(str) {
//   return str.slice(1, -1);
// }
//
// console.log(removeChar('qwerty'))

// function validBraces(braces) {
//     const leftBraces = /[)}]/
//     let bracesArr = braces.split('').map(item => {
//         return leftBraces.test(item) || item === ']' ? 1 : 2
//     })
//     let right = bracesArr.filter((item) => {
//         return item === 2
//     }).reduce((num1, num2) => num1 += num2) / 2
//
//     let left = bracesArr.filter((item) => {
//         return item === 1
//     }).reduce((num1, num2) => num1 += num2)
//
//
//     if (leftBraces.test(braces[0]) || braces[0] === ']') {
//         return false
//     } else if (left > right || right > left) {
//         return false
//     } else return true
// }
//
// console.log(validBraces(']())({}}{()][][]'))

// function dropCap(n) {
//     return n.split(' ')
//         .map(item => {
//             return item.length > 2 ? item[0].toUpperCase()+item.substr(1).toLowerCase() : item
//         }).join('')
// }
//
// console.log(dropCap('space WALK of'))

// function sakuraFall(v) {
//     if (v>0) {
//         return 400 / v
//     }
//     else return 0
// }
//
// console.log(sakuraFall(5))

// function findOutlier(integers) {
//     let evens = integers.filter(item => {
//         return item % 2 === 0
//     })
//     let odds = integers.filter(item => {
//         return item % 2 !== 0
//     })
//     return evens.length > odds.length ? +odds.join() : +evens.join()
// }
//
// console.log(findOutlier([2, 6, 8, 10, 3]))

function expandedForm(num) {
  let arrNum = num.toString().split("");
  if (arrNum.includes("0")) {
    return arrNum;
  } else {
    return arrNum
      .map((item, idx) => {
        return (
          item +
          `${arrNum
            .slice(idx + 1)
            .map((i) => "0")
            .join("")}`
        );
      })
      .join(" + ");
  }
}

// console.log(expandedForm(10200))

//console.log(['', 12, 5, 8, 130, 44,].some((n) => n)) // true
//console.log(['', 12, 5, 8, 130, 44,].every((n) => n)) // false
//falseValue: 0, false, null, '', undefined, NaN
//Number String Boolean Object undefined NaN BigInt null

// function hello() {
//     return this
// }
//
// const context = () => {
//     return this
// }
// console.log(hello())
// console.log(context())

// const greetingByOskar = greeting('i am a student')
// console.log(greetingByOskar('oskar'))

// function pushMethod(array) {
//     array.push('newElem')
//     return array
// }
//
// console.log(pushMethod([1,2,3]))
// const arr = [1, , 3]
// delete arr[1]
// console.log(arr)

// const something = require('os')
// console.log(something.freemem()/ 1024/1024/1024) // log your computer memory by gb
// console.log(something.totalmem/1024/1024/1024) // total
// console.log(something.version())

// const fs = require('fs')
// fs.writeFile('ogurec.txt', 'i like cucumber', (err)=>{
//     if (err){
//         console.log(err)
//      }
// })
// fs.unlink('ogurec.txt', 'i like cucumber', (err)=>{
//     if (err){
//         console.log(err)
//      }
// })

// XSS attack

// const path = require('path')
// console.log(path.resolve())
// console.log(__filename)
// console.log(__dirname)

async function fetchObj() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  let data = await response.json();
  console.log(data.userId);
}

// fetchObj().then(r => r)
// fetchObj().catch(err => {
//     err.message
// })
// const  name = 'global'
// const obj = {
//     name:'obj',
//     getName:()=>{
//         console.log(    this.name) // undefined
//     }
// }
// function func (){
//     return arguments
// }
// console.log(func())

// у стрелочных func нет arguments (ключевое слово)

// const  products  = [
//     {
//         name:'blue dress',
//         price:1000
//     },
//     {
//         name:'red dress',
//         price:550
//     },
//     {
//         name:'dress',
//         price: 3550
//     }
// ]
//
// const totalPrice = products.reduce((zero, price)=>{
//     return zero += price.price
// }, 0)
// console.log(totalPrice)

// const users = [
//     {
//         name:'Oskar'
//     },
//     {
//         name: "aysalkin"
//     }
// ]
//
// console.log()

const customMap = (arr, funcCB) => {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    outputArr.push(funcCB(arr[i]));
  }
  return outputArr;
};
const toNameCase = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};
// console.log(customMap(['oskar', 'beka', 'pasha'], toNameCase))

const person = {
  name: "oskar",
  age: 15,
  password: "tpircSavaJ",
  acceptedTerm: true,
  skills: ["cooking", "coding"],
  info: {
    gender: "male",
    diseases: ["negative vision", "skalioz", "cold"],
  },
};
const validate = (...funcs) => {
  let verifyCount = 0;
  return (obj) => {
    for (let i = 0; i < funcs.length; i++) {
      funcs[i](obj) === true ? verifyCount++ : null;
    }
    return verifyCount === funcs.length
      ? `successfully passed ${verifyCount} verifies`
      : `need pass ${funcs.length - verifyCount} verifies to continue`;
  };
};
const validAge = (obj) => {
  return obj.age >= 18;
};
const validPassword = (obj) => {
  return obj.password.length >= 8;
};
const validTerm = (obj) => {
  return obj.acceptedTerm;
};
// const validator = validate(validAge, validPassword, validTerm);
// console.log(validator(person))

const products = [
  {
    name: "milk",
    price: 242,
    discount: false,
  },
  {
    name: "salt",
    price: 145,
    discount: true,
  },
  {
    name: "water",
    price: 54,
    discount: false,
  },
  {
    name: "crisps",
    price: 76,
    discount: true,
  },
  {
    name: "meat",
    price: 470,
    discount: true,
  },
];
const withDiscount = (arr) => {
  const discount = 10;
  return () => {
    return arr.map((item) =>
      item.discount ? item.price - item.price / discount : item.price
    );
  };
};
// const withDiscountProducts = withDiscount(products);
// console.log(withDiscountProducts())

const greeting = (caption) => {
  let title = "Article topic";
  return function (author) {
    return `${title}: ${caption}, written by ${author}`;
  };
};
// const greetingBy = greeting("closure func");
// console.log(greetingBy('oskar'))

//Spread
const arr1 = [1, 2, 3, "1", "2", "3"];
const copyArr1 = [...arr1];
// console.log(copyArr1.map(i=>i*2))
// console.log(arr1)
// console.log(arr1)
// console.log(...arr1)
// console.log({...arr1})
// console.log([...arr1])

const personCopy = { ...person };
const personCopy2 = Object.assign({}, person);
const personCopy3 = JSON.parse(JSON.stringify(person)); // best way to copy obj but functions become string (bag)
// console.log({...person, ...personCopy}) // concat objects
person.skills.push("dadas"); // copied Obj will pushed too
// console.log(personCopy)
// console.log(personCopy3.info.diseases === person.info.diseases)
// console.log(Object.entries(personCopy3))
// console.log(Object.keys(personCopy3))
// console.log(Object.values(personCopy3))

//Rest
function rest(num, ...nums) {
  // spread operator in args this is Rest operator which create array from ...nums
  return nums.map((n) => n * num);
}

//
// console.log(rest(3, 20, 10, 30))

// console.log([1, 2, 3, 4].find(item => item > 2))

let popArr = [1, 2, 3, 4];
popArr.pop(); // remove last item in arr and return it
// console.log(popArr)

let unshifttedArr = [1, 2, 3, 4];
unshifttedArr.unshift(2); // added new item into arr and return arr.length
// console.log(unshifttedArr)

let shifttedArr = [1, 2, 3, 4, { name: "oskar" }];
shifttedArr.shift(); // remove first item in arr and return it
// console.log(shifttedArr)

let concatArr = [1, 2, 3, 4, 5];
// console.log(concatArr.concat([]))
// console.log(concatArr.concat({}))
// console.log(concatArr.concat(anyDataTypes))

// console.log(Array.isArray([...document.querySelectorAll('button')]))

// console.log(concatArr.indexOf()) // return index of item which indicated in args

// Local Storage is able to use only with STRING data type
// localStorage.setItem('test', JSON.stringify(person))
// localStorage.setItem('test2', 'localStorage (test2)')
// localStorage.setItem('test3', 'localStorage (test3)')
// console.log(localStorage.getItem('test'))
// localStorage.removeItem('test') // remove key in LS
// console.log(localStorage.getItem('arr'))
// localStorage.clear() // clear full local storage

// defense from Cross site scripting XSS
const originalString = `
  <div>
	<p>Hey that's <span>somthing</span></p>
  </div>
`;

const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");

// console.log(strippedString);

// indexedDB

const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();

  data.forEach((item) => {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.innerHTML = item.title;
    p.innerHTML = item.id;

    document.body.innerHTML += h2.outerHTML;
    document.body.innerHTML += p.outerHTML;
  });
};

// getData()

// Memoization - caching memo

const func = (...nums) => {
  return nums[0] + nums[1];
};

const memoizer = (func) => {
  let cache = {};
  return (...n) => {
    if (cache[n] !== undefined) {
      return `${func(...n)} is already cached`;
    } else {
      console.log(`${func(...n)} new result`);
      cache[n] = func(...n);
      return "";
    }
  };
};
// const testMemo = memoizer(func);
// console.log(testMemo(3, 1))
// console.log(testMemo(3, 1))
// console.log(testMemo(4, 1))
// console.log(testMemo(4, 1))
// console.log(testMemo(3, 1))

// return masked string
function maskify(cc) {
  if (cc.length > 4) {
    return (
      cc
        .slice(0, cc.length - 4)
        .split("")
        .map((item) => "#")
        .join("") + cc.slice(cc.length - 4)
    );
  } else return cc;
}

// console.log(maskify('oskar1234'))
function createPhoneNumber(numbers) {
  return numbers
    .map((num, idx) => {
      return idx === 0
        ? "(" + num
        : idx === 2
        ? num + ") "
        : idx === 5
        ? num + "-"
        : num.toString();
    })
    .join("");
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// var obj = {
//     foo: "jack",
//     bar: 'sandwich'
// }
//
// var format = function (str, obj) {
//     let str2 = ''
//     if (Array.isArray(obj)) {
//         for (let i = 0; i < obj.length; i++) {
//             str2 = str.replace(`{${i}}`, obj[i])
//         }
//         return str2
//     } else {
//         for (let key in obj) {
//             console.log(`{${key}}`)
//             str2 = str.split(' ').map(item => item === `{${key}}` ? obj[key] : item)
//         }
//         return str2
//     }
// };
// console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj))

function generateShape(integer) {
  let str = "";
  for (let i = 0; i < integer; i++) {
    str += "+";
  }
  return str
    .split("")
    .map((sym, idx, arr) => {
      return arr.join("");
    })
    .join("\n");
}

function min(arr, toReturn) {
  let macro = arr.reduce((num1, num2, idx, array) => {
    return num1 > num2 ? num2 : num1;
  });
  return toReturn === "value" ? macro : arr.indexOf(macro);
}

// console.log(min([1, 2, 3,], 'i'))

function arrayDiff(a, b) {
  return a.filter((num, idx, arr) => {
    return !b.includes(num);
  });
}

// console.log(arrayDiff([1,2,2], [1]))

var capitals = function (word) {
  let letters = /[A-Z]/;
  return word
    .split("")
    .map((l, idx) => {
      return letters.test(l) ? idx : "";
    })
    .join("")
    .split("")
    .map((i) => +i);
};

// console.log(capitals('CodEWaRs'))

function insertDash(num) {
  let result = num
    .toString()
    .split("")
    .map((n, idx, arr) => {
      return n % 2 !== 0 && arr[idx + 1] % 2 !== 0 ? n + "-" : n;
    })
    .join("");
  if (num % 2 === 0) {
    return result;
  } else {
    return result.slice(0, result.length - 1);
  }
}

let obj = {
  name: "Oskar",
  age: 15,
};
// Диструктуризация!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let {name, age} = obj
// console.log(name)
// console.log(age)
// console.log(insertDash(454793))

function filterHomogenous(arrays) {
  let res = [];
  for (let arr of arrays) {
    if (arr.length) {
      arr.every((item) => typeof arr[0] === typeof item) ? res.push(arr) : null;
    }
  }
  return res;
}

// console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))

function persistence(num) {
  let mCount = 0;
  for (let i = 0; num > 9; i++) {
    mCount++;
    num = num
      .toString()
      .split("")
      .reduce((n1, n2) => n1 * n2);
  }
  return mCount;
}

// console.log(persistence(39))

function rowWeights(array) {
  let even;
  let odd;
  if (array.length > 1) {
    even = array
      .filter((item, idx) => {
        return idx % 2 === 0;
      })
      .reduce((n1, n2) => (n1 += n2));

    odd = array
      .filter((item, idx) => {
        return idx % 2 !== 0;
      })
      .reduce((n1, n2) => (n1 += n2));
    let result = [odd, even];
    return result;
  } else {
    return [+array.join(""), 0];
  }
}

// console.log(rowWeights([80, 40, 30]))

function countSmileys(arr) {
  let smile = /[)D]/;
  let nose = /[~-]/;
  let eyes = /[)D]/;
  return arr.filter((item) => {
    if (item.length > 2) {
      return smile.test(item) && eyes.test(item) && nose.test(item);
    } else return smile.test(item) && eyes.test(item);
  }).length;
}

// console.log(countSmileys([':)', ';(', ';}', ':-D']))
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']))
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))

function scrollingText(text) {
  let res = [];
  for (let i = 0; i < text.length; i++) {
    res.push(text);
  }
  return res;
}

// console.log(scrollingText('abc'))

function sum(a, b) {
  return a + b;
}

function zipWith(fn, a0, a1) {
  let shorterArr = a0.length > a1.length ? a1 : a0;
  let result = [];
  for (let i = 0; i < shorterArr.length; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}

// console.log(zipWith(sum, [1,2,3], [1,2,3]))

const arrCheck = (value) => {
  return value.length
    ? value.filter((item) => Array.isArray(item)).length === value.length
    : true;
};

function box(n) {
  let side = "-".repeat(n);
  let box = [side];
  for (let i = 0; i < n - 2; i++) {
    box.push("-" + " ".repeat(n - 2) + "-");
  }
  box.push(side);
  return box;
}

// console.log(box(3))

function findMagic(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      result = i;
    }
  }
  return result;
}

// console.log(findMagic([-20, -10, 2, 10, 20]))

function flattenAndSort(array) {
  var result = [];

  array.forEach(function (elem) {
    if (Array.isArray(elem)) {
      result = result.concat(flattenAndSort(elem));
    } else {
      result.push(elem);
    }
  });

  return result.sort((a, b) => a - b);
}

// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))

function getLengthOfMissingArray(arrayOfArrays) {
  if (
    arrayOfArrays === null ||
    arrayOfArrays.includes(null) ||
    !arrayOfArrays.length
  ) {
    return 0;
  } else {
    let initialArr = arrayOfArrays
      .map((item) => item.length)
      .sort((a, b) => a - b);
    if (initialArr.includes(0)) {
      return 0;
    } else
      for (let i = initialArr[0]; i <= initialArr.length + i; i++) {
        if (!initialArr.includes(i)) {
          return i;
        }
      }
  }
}

// console.log(getLengthOfMissingArray([[4],
//     [4, 2, 1],
//     [],
//     [0, 3],
//     [3, 0, 2, 4, 3, 4, 4],
//     [0, 3, 4, 0],
//     [4, 3, 1, 0, 4],
//     [4, 2, 3, 4, 0, 3, 0, 1]]
// ))

function dataReverse(data) {
  let arrData = [];
  let spliceCount = data.length / 8;
  for (let i = 0; i < spliceCount; i++) {
    arrData.push(data.splice(0, 8));
  }
  return arrData
    .reverse()
    .map((item) => item.join(""))
    .join("")
    .split("")
    .map((n) => +n);
}

// console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))
let book = {
  id: 1,
  author: "oskar",
  price: 780,
  tite: "IT way",
  description: "How to become the best version of yourself",
  pagesCount: 245,
  createDate: "21.06.22",
};
let meal = {
  coocker: "oskar",
  taste: "good",
};
const hasAuthorInBook = "author" in book;
hasTitle = "tite" in book;

const hasAuthorInMeal = "author" in meal;
hasTasteInMeal = "taste" in meal;

// console.log(hasAuthorInBook)
// console.log(hasAuthorInMeal)
// console.log(hasTasteInMeal)

let milNums = [];
// for (let i = 1; i < 1000000; i++) {
//     milNums.push(i)
// }
function binarySerach(arr, target) {
  let mid;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log("iteration");
    mid = Math.round((right - left) / 2 + left);

    if (target === arr[mid]) {
      return `index:${mid}; value:${arr[mid]}`;
    } else if (arr[mid] > target) {
      right = mid - 1; // - 1 by reason of (first if codition) shows that mid !== target
    } else { 
      left = mid + 1;
    }
  }
  return "none";
}

// console.log(binarySerach(milNums, 999999))
// console.log(binarySerach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))

function capitalize(s) {
  let even = s
    .split("")
    .map((item, idx) => (idx % 2 !== 0 ? item.toUpperCase() : item))
    .join("");
  let odd = s
    .split("")
    .map((item, idx) => (idx % 2 === 0 ? item.toUpperCase() : item))
    .join("");
  return [odd, even];
}

// console.log(capitalize('abcdef'))

function capitalizeIdx(s, arr) {
  return [...s]
    .map((item, idx) => {
      return arr.includes(idx) ? item.toUpperCase() : item;
    })
    .join("");
}

// console.log(capitalizeIdx('oskar', [1, 2, 4, 100]))

function likeOrDislike(buttons) {
  let state = "Nothing";

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = "Nothing";
    } else {
      state = buttons[i];
    }
  }

  return state;
}

// console.log(likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike']))

function dup(s) {
  let res = "";
  let arr = s.join(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      res += arr[i];
    }
  }
  return res.split(" ");
}

// console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]))

function solve(a) {
  return (
    a.filter((item) => item % 2 === 0).length -
    a.filter((item) => item % 2 !== 0 && typeof item === "number").length
  );
}

// console.log(solve(([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3])))

function solveVowels(s) {
  let consonats = /[bcdfghjklmnpqrstvwxyz]/g;
  let arr = s
    .replace(consonats, "-")
    .split("-")
    .map((item) => item.length);
  return Math.max(...arr);
}

// console.log(solveVowels('codewarriors'))

function mostLikely(prob1, prob2) {
  let p1 = prob1.replace(":", " ").split(" ");
  let p2 = prob2.replace(":", " ").split(" ");
  return p1[0] / p1[1] > p2[0] / p2[1];
}

// console.log(mostLikely('5:10', '1:3'))

function points(games) {
  let res = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      res += 3;
    } else if (games[i][0] === games[i][2]) {
      res += 1;
    }
  }
  return res;
}

// console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))

function longestConsec(strarr, k) {
  if (k < 0 || k > strarr.length) {
    return "";
  } else {
    let res = [];
    for (let i = 0; i < strarr.length; i++) {}
    return res;
  }
}

// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))

function anagrams(word, words) {
  return words.filter(
    (item) => item.split("").sort().join("") === word.split("").sort().join("")
  );
}

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

function countPositivesSumNegatives(input) {
  let posNums = 0;
  let negNums = 0;
  let total = [];
  if (input !== null && input.length) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        posNums++;
      } else negNums += input[i];
    }
    total.push(posNums, negNums);
    return total;
  } else return total;
}

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!(i + "").includes(5)) {
      count++;
    }
  }
  ret;
}

// console.log(dontGiveMeFive(1, 9))

function wave(str) {
  let capitals = /[A-Z]/;
  let total = [];
  if (str.length) {
    for (let i = 0; i < str.length; i++) {
      total.push(str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1));
    }
    return total.filter((item) => capitals.test(item));
  }
  return total;
}

// console.log(wave(' gap '))

// complete the function
function solution(string) {
  let capitals = /[A-Z]/;
  return string
    .split("")
    .map((item) => (capitals.test(item) ? " " + item : item))
    .join("");
}

// console.log(solution('javaScript'))

function howManyDalmations(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIONS!!!",
  ];

  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2];

  return respond;
}

// console.log(howManyDalmations(223))

function printerError(s) {
  let colors = /[a-m]/;
  let errosCount = 0;
  for (let i = 0; i < s.length; i++) {
    colors.test(s[i]) ? null : errosCount++;
  }
  return `${errosCount}/${s.length}`;
}

// console.log(printerError(""))

function validateMessage(msg) {
  let HTMLleft = /[<]/;
  let HTMLright = /[>]/;
  if (msg === null) throw ReferenceError("Message is null!");
  else if (msg === false) return false;
  else if (typeof msg !== "string")
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  else if (HTMLleft.test(msg) && HTMLright.test(msg)) return false;
  else if (msg.length > 255)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  else if (!msg.length)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  else return true;
}

// console.log(validateMessage(''))

function solutionStr(str) {
  let arr = str.split("");
  return arr
    .map((item, idx) => arr.splice(idx, 2))
    .map((pair) => (pair.length > 1 ? pair.join("") : pair.join("") + "_"))
    .filter((item) => item.length);
}

// console.log(solutionStr('abc'))

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else if (s > 60) return "F";
}

// console.log(getGrade(90, 85, 83))

function solutionEnd(str, ending) {
  return str.endsWith(ending);
}

// console.log(solutionEnd('OSKAR', 'KAR'))

function longest(s1, s2) {
  return [...new Set([...s1, ...s2])];
}

// console.log(longest("aretheyhere", "yestheyarehere"))
function generateHashtag(str) {
  str = str.trim();
  let hashtag =
    "#" +
    str
      .split(" ")
      .filter((item) => item.length)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
  if (str.length !== 0 && hashtag.length <= 140) {
    return hashtag;
  } else return false;
}

// console.log(generateHashtag('Oskar is cool'))
// console.log(generateHashtag("    Hello     world   "))
// console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))

function minMax(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return arr.length > 1
    ? [sorted[0], sorted[sorted.length - 1]]
    : [arr[0], arr[0]];
}

// console.log(minMax([1, 7, 2, 3, 4, 5]))
// console.log(minMax([1]))

function likes(names) {
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) return `${names.join(" and ")} like this`;
  else if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  else return "no one likes this";
}

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

function zero(callback) {
  return callback ? callback(0) : 0;
}

function one(callback) {
  return callback ? callback(1) : 1;
}

function two(callback) {
  return callback ? callback(2) : 2;
}

function three(callback) {
  return callback ? callback(3) : 3;
}

function four(callback) {
  return callback ? callback(4) : 4;
}

function five(callback) {
  return callback ? callback(5) : 5;
}

function six(callback) {
  return callback ? callback(6) : 6;
}

function seven(callback) {
  return callback ? callback(7) : 7;
}

function eight(callback) {
  return callback ? callback(8) : 8;
}

function nine(callback) {
  return callback ? callback(9) : 9;
}

function plus(num) {
  return (num2) => num + num2;
}

function minus(num) {
  return (num2) => num - num2;
}

function times(num) {
  return (num2) => num * num2;
}

function dividedBy(num) {
  return (num2) => num / num2;
}

function removeExclamationMarks(s) {
  return s.replace(/[!]/g, "");
}

// console.log(removeExclamationMarks('dasda!!!'))

function isPangram(string) {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ].join("");
  string = string.replace(/[.,*+?^=!:${}()|\[\]\/\\ ]/g, "").toUpperCase();
  string = [...new Set(string.split(""))]
    .sort()
    .filter((l) => letters.includes(l))
    .join("");
  return letters === string;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn"))
// console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))

// let arr = [1,2,3,4,5,6]
// console.log(arr.shift())
// console.log(arr)

// let str = 'Oskars'
// console.log(str.indexOf('s'))
// console.log(str.lastIndexOf('s'))

function lastIndexOfPolifil(head, value) {
  if (head !== null) {
    let totalIdx = -1;
    for (let i = 0; i < head.length; i++) {
      if (head[i] === value) totalIdx = i;
    }
    return totalIdx;
  } else return -1;
}

// console.log(lastIndexOfPolifil(['o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's','o', 's', 'k', 'a', 'r', 's'], 's'))
// console.log(lastIndexOfPolifil([1, 2, 3, 2], 2))

function duplicateCount(text) {
  text = text.toLowerCase().split("").sort();
  console.log(text);
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      text = text.filter((item) => item !== text[i]);
      i = i - 1;
      count += 1;
    }
  }
  return count;
}

// console.log(duplicateCount(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].join('')))

function solutionNums(number) {
  let nums = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) nums.push(i);
  }
  return nums.reduce((acc, num) => (acc += num), 0);
}

// console.log(solutionNums(0))

function rentalCarCost(d) {
  if (d >= 3 && d < 7) return d * 40 - 20;
  else if (d >= 7) return d * 40 - 50;
  else return d * 40;
}

// console.log(rentalCarCost(6))

function cakes(recipe, available) {
  if (Object.keys(recipe).length > Object.keys(available).length) return 0;
  else {
    let whatWeHave = Object.entries(available);
    let whatWeNeed = Object.entries(recipe).flat();
    let arr = [];
    for (let i = 0; i < whatWeHave.length; i++) {
      if (whatWeNeed.includes(whatWeHave[i][0])) arr.push(whatWeHave[i]);
    }
    return Math.min(
      ...arr.flat().map((item, idx, array) => {
        if (typeof item === "string") {
          let ingredientWeight = whatWeNeed.indexOf(item) + 1;
          return (array[idx + 1] = Math.floor(
            array[idx + 1] / whatWeNeed[ingredientWeight]
          ));
        } else return item;
      })
    );
  }
}

// console.log(cakes(
//     {flour: 500, eggs: 1, sugar: 200},
//     {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
// ))

function rot13(message) {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let tmpL = message[0];
  console.log([...letters, ...letters]);
  let output = message
    .toLowerCase()
    .split("")
    .map((item, idx) => {
      if (letters.indexOf(item) >= 13) letters = [...letters, ...letters];
      return letters.includes(item)
        ? letters[letters.indexOf(item) + 13]
        : item;
    });
  output[0] = tmpL.toUpperCase() === tmpL ? output[0].toUpperCase() : output[0];
  return output.join("");
}

// console.log(rot13("abcdefghijklmnopqrstuvwxyz"))

const users = [
  { name: "Oskar", surname: "Shtefan", age: 15 },
  { name: "Alex", surname: "Brown", age: 25 },
  { name: "Max", surname: "Maximov", age: 25 },
  { name: "abcd", surname: "qwerty", age: 45 },
];

let output = users.reduce((acc, item) => {
  if (item.age >= 25 && item.age < 40) acc.push(item.name);
  return acc;
}, []);

// console.log(output)

multiplicationTable = function (size) {
  let output = [];
  for (let i = 1; i <= size; i++) {
    let tmp = [];
    for (let j = 1; j <= size; j++) {
      tmp.push(j * i);
    }
    output.push(tmp);
  }
  return output;
};

// console.log(multiplicationTable(3))

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((item, idx) => {
      return item
        .split("")
        .map((item, idx) => (idx % 2 === 0 ? item.toUpperCase() : item))
        .join("");
    })
    .join(" ");
}

// console.log(toWeirdCase('This is a test'))

function validParentheses(parens) {
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") count += 1;
    else if (parens[i] === ")") count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}

// console.log(validParentheses(''))
// console.log(validParentheses('('))
// console.log(validParentheses('()'))
// console.log(validParentheses('(()'))

function comp(array1, array2) {
  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);
  if (array1 === null || array2 === null) return false;
  else if (array1.length !== array2.length) return false;
  return array1.every((n, idx) => n ** 2 === array2[idx]);
}

// console.log(comp([4,4], [1,31]))
// console.log(comp([8,9], [64, 81]))

let animal = {
  eats: "eat from animal",
  action() {
    return this.eats;
  },
};
let rabbit = {
  jumps: "jump from rabbbit",
};

// console.log(rabbit.jumps)
// console.log(rabbit.eats) // before assignment
//
// rabbit.__proto__ = animal; //here animal becomes rabbbits's prototype
//
// console.log(rabbit.eats) // then we are able to use the animals keys and values (methods)
// console.log(rabbit.action())

let oskar = {
  name: "Oskar",
  testProto: "test",
  code: `${this.name} ${this.testProto}`,
  action() {
    return this.code;
  },
  greeting() {
    return "Hi my name is " + this.name;
  },
};
// console.log(oskar.name)
// console.log(oskar.action())
// console.log(oskar.greeting())
let alex = {
  __proto__: oskar,
  name: "Alex",
};

// console.log(alex.name)
// console.log(alex.action())
// console.log(alex.greeting())

let alexWife = {
  name: "Janet",
  info: {
    born: "yesterday",
    // skills:['cook', 'clean']
  },
  __proto__: alex,
};

// console.log(alexWife.info?.skills ?? ['seatinig'])

const getDatas = () => {
  let posts;
  const fetchPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    posts = await res.json();
    return posts;
  };
  fetchPost().then((res) => console.log(res));
};

// getDatas()
function remove(s, n) {
  while (n) {
    n -= 1;
    s = s.replace(/!/, "");
  }
  return s;
}

// console.log(remove('!hi!!', 2))

function find(seq) {}

// console.log(find([1,3,4]))
// console.log(find([1,3,5,9,11]))

function explode(s) {
  return s
    .split("")
    .map((item) => item.repeat(+item))
    .join("");
}

// console.log(explode('123'))

function greet(language) {
  const db = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  return db[language] ? db[language] : db.english;
}

// console.log(greet('polish'))

function findDup(arr) {
  return arr.filter((item, idx) => {
    return arr.indexOf(item) !== idx;
  })[0];
}

// console.log(findDup([1,2,2,3]))

function take(arr, n) {
  if (!arr.length) return [];
  let output = [];
  for (let i = 0; i < n; i++) {
    if (!arr[i]) output.push(arr[i]);
  }
  return output;
}

// console.log(take([0, 1, 2, 3, 4, 5], 2))

function cleanString(s) {
  let start = s.split("").indexOf("#");
  return s.split("").reverse().slice(start);
}

// console.log(cleanString('fcabc#d####c'))

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    years++;
  }
  return years;
}

// console.log(nbYear(1500, 5, 100, 5000))

String.prototype.toAlternatingCase = function () {
  let upper = /[A-Z]/;
  return this.split("")
    .map((item) => {
      if (upper.test(item)) return item.toLowerCase();
      else return item.toUpperCase();
    })
    .join("");
};
// console.log('eESDASDASssss'.toAlternatingCase())

const sumOfTwo = (nums, target) => {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let remainder = target - value;
    if (numObj[remainder] !== undefined) {
      return [numObj[remainder], i];
    } else numObj[value] = i;
  }
};

const sumOfThree = (nums, target) => {
  let output = [];
  if (nums.length < 3) {
    return output;
  }
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        output.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
        continue;
      }

      if (sum < target) {
        j++;
        continue;
      }
      if (sum > target) {
        k--;
      }
    }
  }

  return output;
};

// console.log(sumOfTwo([7, 1, 4, 6, 3], 7))
// console.log(sumOfThree([1, 4, 6, -3, 2, 6, 0, 1, -1, -5, -3, -4, 2], 4))

const movies = [
  {
    title: "home alone",
    category: ["comedy"],
    year: 1990,
    ticketPrice: 200,
  },
  {
    title: "batman",
    category: ["action"],
    year: 2022,
    ticketPrice: 370,
  },
  {
    title: "starwars",
    category: ["action", "dramma"],
    year: 2020,
    ticketPrice: 420,
  },
  {
    title: "zootopia",
    category: ["cartoon", "fantastic"],
    year: 2017,
    ticketPrice: 300,
  },
];

function towerBuilder(nFloors) {
  const triangle = [];
  let star = "*";
  for (let i = 1; i <= nFloors; i++) {
    let space = nFloors - i;
    triangle.push(`${" ".repeat(space)}${star}${" ".repeat(space)}`);
    star = "*".repeat(star.length + 2);
  }
  return triangle;
}

// console.log(towerBuilder(9))

function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((item, idx, arr) => (+item) ** arr.length)
      .reduce((acc, num) => (acc += num), 0) === value
  );
}

// console.log(narcissistic(153))
// console.log(narcissistic(1938))

function titleCase(title, minorWords) {

  return title.split(' ').map(word => {
    if(minorWords.includes(word)) {
      return word
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')

  // let words = title.split(" ");
  // let first = words.splice(0, 1).join("");
  // let minors;
  // if (minorWords) {
  //   minors = minorWords.split(" ");
  // }

  // if (!title) {
  //   return "";
  // } else if (title.split(" ").length === 1) {
  //   return `${first[0].toUpperCase() + first.slice(1).toLowerCase()}`;
  // } else {
  //   words = words
  //     .map((item) => {
  //       if (
  //         (minors && minors.includes(item.toLowerCase())) ||
  //         (minors && minors.includes(item.toUpperCase()))
  //       ) {
  //         return item.toLowerCase();
  //       } else {
  //         return item[0].toUpperCase() + item.slice(1).toLowerCase();
  //       }
  //     })
  //     .join(" ");
  //   return `${first[0].toUpperCase() + first.slice(1).toLowerCase()} ${words}`;
  // }
}
// console.log(titleCase('a clash of KINGS', 'of'))
// console.log(titleCase('ab', 'ab'))

function solutionTicket(n) {
  let arrOfNums = n.toString().split("");
  let left = arrOfNums.slice(0, arrOfNums.length / 2);
  let right = arrOfNums.slice(arrOfNums.length / 2);
  return left;
}
// console.log(solutionTicket(1230));

function solutionTeams(a) {
  const firstTeam = [];
  const secondTeam = [];

  a.forEach((item, idx) => {
    if ((idx + 1) % 2 === 0) {
      secondTeam.push(item);
    } else firstTeam.push(item);
  });

  return [
    firstTeam.reduce((acc, num) => (acc += num), 0),
    secondTeam.reduce((acc, num) => (acc += num), 0),
  ];
}

// console.log(solutionTeams([50, 60, 60, 45, 70]));

function solutionPic(picture) {
  let pic = picture.map((item) => `*${item}*`);
  const output = [
    "*".repeat(picture[0].length + 2),
    ...pic,
    "*".repeat(picture[0].length + 2),
  ];
  return output;
}

// console.log(solutionPic(['lox', 'sam']));

function smaller(nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    output.push(
      nums.slice(i).reduce((acc, num) => {
        if (num < nums[i]) {
          acc += 1;
          return acc;
        } else return acc;
      }, 0)
    );
  }
  return output;
}

// console.log(smaller([5, 4, 3, 2, 1]));
// console.log(smaller([1, 2, 3]));

function hardProcess(a, k) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && a[i] === a[i + 1]) {
      count += 1;
    }
  }
  return count;
}

// console.log(hardProcess([1, 0, 0, 1, 1, 0, 1], 1));

function getFirstPython(list) {
  let output = "";
  for (const person of list) {
    if (person.language === "Python") {
      output = `${person.firstName}, ${person.country}`;
      break;
    }
  }

  return output ? output : "There will be no Python developers";
}

// console.log(getFirstPython([{ "firstName": "Krishna", "lastName": "G.", "country": "Nepal", "continent": "Asia", "age": 22, "language": "Java" }, { "firstName": "Nikola", "lastName": "H.", "country": "Serbia", "continent": "Europe", "age": 29, "language": "Python" }, { "firstName": "Alexander", "lastName": "F.", "country": "Russia", "continent": "Europe", "age": 89, "language": "Java" }, { "firstName": "Nareh", "lastName": "Q.", "country": "Armenia", "continent": "Europe", "age": 30, "language": "Clojure" }, { "firstName": "Mariam", "lastName": "B.", "country": "Egypt", "continent": "Africa", "age": 89, "language": "Python" }]))

function countLanguages(list) {
  const output = {};
  list.forEach((person) =>
    output[person.language]
      ? (output[person.language] += 1)
      : (output[person.language] = 1)
  );
  return output;
}

function allContinents(list) {
  const validContinets = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    new Set(
      list
        .filter((person) => validContinets.includes(person.continent))
        .map((item) => item.continent)
    ).size === 5
  );
}

// console.log(allContinents([
//     { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//     { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//     { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ]));

function isAgeDiverse(list) {
  if (list.length < 10) return false;
  return (
    new Set(
      list.map((person) => {
        if (person.age <= 10) return 1;
        if (person.age > 99) return 10;
        else return +(person.age + "")[0];
      })
    ).size >= 10
  );
}

function addUsername(list) {
  const currentYear = new Date().getFullYear();
  return list.map((person) => ({
    ...person,
    username:
      (person.firstName + person.lastName[0]).toLowerCase() +
      `${currentYear - person.age}`,
  }));
}

// console.log(addUsername([
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ]));

function isLanguageDiverse(list) {
  let langCount = [];
  list.forEach((person) => {
    if (!langCount.map((item) => item.language).includes(person.language)) {
      langCount.push({ language: person.language, count: 1 });
    } else {
      langCount[
        langCount.findIndex((item) => item.language === person.language)
      ].count += 1;
    }
  });

  langCount = langCount.map((lang) => lang.count);
  const maxLangCount = Math.max(...langCount);
  const minLangCount = Math.min(...langCount);

  // return langCount
  return minLangCount * 2 > maxLangCount;
}

function isLanguageDiverseTwo(list) {
  list = list.map((dev) => dev.language);
  const num = [...new Set(list)].map(
    (el) => list.filter((e) => e === el).length
  );
  return num;
}
// console.log(isLanguageDiverseTwo([{"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"Ruby"},{"firstName":"Louise","lastName":"F.","country":"France","continent":"Europe","age":22,"language":"JavaScript"},{"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"Python"},{"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"JavaScript"},{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Python"},{"firstName":"Emily","lastName":"N.","country":"Ireland","continent":"Europe","age":38,"language":"JavaScript"},{"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"JavaScript"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"JavaScript"},{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"JavaScript"},{"firstName":"Madison","lastName":"U.","country":"United States","continent":"Americas","age":32,"language":"Ruby"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"Ruby"},{"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"JavaScript"},{"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"JavaScript"},{"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},{"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"JavaScript"},{"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Ruby"},{"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"Ruby"},{"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"JavaScript"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"}]));

function isIsogram(str) {
  const filteredStr = new Set(str.toLowerCase().split(""));
  return filteredStr.size === str.length;
}
// console.log(isIsogram('isIogram'));

function findOddNames(list) {
  let names = list
    .map((person) => person.firstName.toLowerCase().split(""))
    .map((name) => name.map((l) => letters.indexOf(l) + 1));
  names = names.map((name) => name.reduce((acc, item) => (acc += item), 0));
  return list.filter((person, idx) => names[idx] % 2 !== 0);
}

// console.log(findOddNames( [
//   { firstName: 'Abb', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Agf', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]));

function askForMissingDetails(list) {
  return list.filter((person) => {
    let isNull = false;
    for (const key in person) {
      if (person[key] !== null) {
        continue;
      } else {
        isNull = true;
        person.question = `Hi, could you please provide your ${key}.`;
        break;
      }
    }
    return isNull;
  });
}

// console.log(askForMissingDetails([
//     { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ]));

function sortByLanguage(list) {
  const langs = list.map((person) => person.language);
  return list.sort((a, b) => {
    return a.language.toLowerCase().localeCompare(b.language.toLowerCase());
  });
}

// console.log(sortByLanguage([
//     { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
//     { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//     { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//     { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
// ]))

function productFib(prod) {
  const fibonachi = [0, 1];
  let next = 1;
  let prev = 0;
  while (next < prod) {
    let nextCopy = next;
    next += prev;
    prev = nextCopy;
    fibonachi.push(next);
  }
  for (let i = 0; i < fibonachi.length; i++) {
    const prevNum = fibonachi[i];
    const nextNum = fibonachi[i + 1];
    if (prevNum * nextNum === prod) {
      return [prevNum, nextNum, true];
    } else if (prevNum * nextNum > prod) return [prevNum, nextNum, false];
  }
}

// console.log(productFib())

// var name = 'j'

// for (var i = 0; i < 10; i++) {

// }
// console.log(i);

// console.log(Symbol('js'));

// setTimeout(() =>{
//     console.log('4');
// }, 0)

// new Promise((resolve, reject) => {
//     resolve('1')
// }).then(value => value).then(value => value+1).then(value => console.log(value))

// setTimeout(() =>{
//     console.log('3');
// }, 0)

// console.log('2');

// const testArr = [{name: 'oskar'}]
// const testArr2 = testArr.map(item => JSON.parse(JSON.stringify(item)))

// testArr2[0].name = 'vlad'

// console.log(testArr);
// console.log(testArr2);

// const checkBrackets = (str) => {
//   let brackets = [];
//   const bracketsTemplate = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };
//   let output = true;

//   str.split("").forEach((bracket) => {
//     if (bracket === "(" || bracket === "[" || bracket === "{")
//       brackets.push(bracket);
//     else if (bracket !== bracketsTemplate[brackets.pop()]) output = false;
//   });

//   return output;
// };

// console.log(checkBrackets('([{}])'));

const setFilterForArr = (arr) => {
  return arr.filter((item, idx) => {
    return arr.lastIndexOf(item) === idx;
  });
  // or just use new Set
};

// console.log(setFilterForArr([1, 2, 2,1,2,3,1,2,1,1,2,2]));

const setFilterForArr2 = (arr) => {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
};

// console.log(setFilterForArr2([1, 1, 2, 3, 3, 3, 3, 3]));

function sum(arr) {
  return arr.reduce((acc, num) => (acc += num), 0);
}
function findEvenIndex(arr) {
  let results = [];
  arr.forEach((num, idx) => {
    results.push([sum(arr.slice(0, idx)), idx, sum(arr.slice(idx + 1))]);
  });
  let output = results.filter((item) => {
    if (item[0] === item[2]) return item;
  });
  return output.length ? output[0][1] : -1;
}

// console.log(findEvenIndex([20,10,-80,10,10,15,35]));

function toRange(arr) {
  let output = [];
  arr = [...new Set(arr.sort((a, b) => a - b))];
  arr.map((item, idx) => {
    if (idx === 0 && item + 1 === arr[idx + 1]) {
      output.push(item + "_");
      return item;
    }
    if (idx === arr.length - 1) {
      output.push("" + item);
      return item;
    }
    if (item + 1 !== arr[idx + 1] && !output.includes(arr[idx + 1] + "")) {
      output.push(item + ",", arr[idx + 1] + "_");
      return item;
    }
  });

  return [...new Set(output)].join("");
}

// console.log(toRange([1, 3]));
// console.log(toRange([1, 2, 3, 5, 6, 7]));
// console.log(toRange([1, 2, 3, 4, 5]));

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }

  let output = [];

  for (let i = 0; i < strarr.length; i++) {
    let team = strarr.slice(i, i + k);
    output.push(team.join(""));
  }

  return output.find(
    (str) => str.length === Math.max(...output.map((str) => str.length))
  );
}

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));

function scramble(str1, str2) {
  if (str2.length > str1.length) return false;
  const resStr = str2;
  let outputStr = "";
  str2.split("").forEach((letter) => {
    if (str1.includes(letter)) {
      outputStr += letter;
      return;
    }
  });
  return resStr === outputStr;
}
// console.log(scramble("samdfghjklmoc", "commasdfghjklas"));
// console.log(scramble('lckjemsrunwwkhbxkyqqwcmywuggwolbrebjmzoedozgmsaulrcqommayvsoudgbtcuidbmrmzqxeumlmbzmfiztvqkbzlgmrlmzjavinrynmddgtxhedwbalszxlsdyghyqcxkgyozekwnkugwqhtwwjdahnowhcrbsxgfhfyiwyjsmdjuynwjwkgvisrrjtcmhuzaqziiocgolvlafcwyjyqvzvvwqyvjfvuzoofysvelwfsvkjtezmqwoeoqdonnvarhurqnctrxykqabdfuecvkqkdfpzvxpuqauapblqehjkbsaekhcurkvbdloohqnrouuepbfghgnglgulnogkflafzu', 'lipuwksawcjpxvsfhykvtpqaeeclmikzckhihvqqljtyuwvldoinapysdcfyhpnadzkvulakfszhtaiwdygygwwmrjrslhyfntsxqcimbyi'));

var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  if (nums.length % 2 !== 0) {
    return nums[(nums.length - 1) / 2] + ".00000";
  }

  const output = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  return output.toString().length > 1
    ? output.toString() + `${output.toString().includes(".") ? "" : "."}0000`
    : output.toString() + ".00000";
};

// console.log(findMedianSortedArrays([100002], [100000]))

function order(words) {
  if (!words.length) return "";
  const sortedWords = words
    .split(" ")
    .map((item) => {
      return item
        .split("")
        .map((str) => parseInt(str))
        .find((item) => !!item);
    })
    .sort((a, b) => a - b);

  const output = [];
  sortedWords.forEach((item, idx) => {
    output.push(
      words.split(" ")[
        words.split(" ").findIndex((elem) => elem.includes(item.toString()))
      ]
    );
  });
  return output.join("");
}

// console.log(order("is2 Thi1s T4est 3a"));\

const res = [];
let start = null;
let count = 1;
function tribonacci(signature, num) {
  if (count === 1) {
    res.push(...signature);
  }
  if (count === num) return res.slice(0, num);

  let result = signature.reduce((acc, n) => (acc += n), 0);
  res.push(result);

  count += 1;

  return tribonacci([...signature.slice(1), result], num);
}

// console.log(tribonacci([0,0,1], 10));

function persistence(num) {
  let count = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((acc, el) => (acc *= +el), 1);
    count++;
  }
  return num;
}
// console.log(persistence(2));

function upArray(arr) {
  if (arr.find((n) => n <= -1)) return null;
  const start = arr.findIndex((n) => n > 0);
  const zeros = arr.slice(0, start);

  const result = (+arr.join("") + 1 + "").split("").map((n) => +n);
  if (result.length === arr.length && !zeros.length) return result;
  zeros.push(...result);
  return zeros;
}
// console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))

function countPairsInt(diff, nMax) {
  const nums = [];
  for (let i = 2; i < nMax; i++) {
    if (i + diff >= nMax) continue;
    nums.push([i, i + diff]);
  }
  return nums.filter((pair) => {
    const pairDivisors = {
      res1: 0,
      res2: 0,
    };

    for (let i = 1; i <= pair[1]; i++) {
      if (Number.isInteger(pair[0] / n)) {
        pairDivisors.res1 += 1;
      }
      if (Number.isInteger(pair[1] / n)) {
        pairDivisors.res2 += 1;
      }
    }
    return pairDivisors.res1 === pairDivisors.res2;
  }).length;
}

// console.log(countPairsInt(6, 350));

function findUs(n1, n2, k, primeFactors, digits) {
  const max = n1 + k * n2;
  const nums = [];
  for (let i = n1; i < max; i++) {
    if (i > max) {
      continue;
    }
    if (!digits.every((d) => i.toString().includes(d))) {
      continue;
    }
    if (!primeFactors.every((p) => Number.isInteger(i / p))) {
      continue;
    }

    if (
      i < max &&
      digits.every((d) => i.toString().includes(d)) &&
      primeFactors.every((p) => Number.isInteger(i / p))
    ) {
      nums.push(i);
    }
  }
  return nums;
}

// console.log(findUs(30, 90, 4, [2,3], [6,2]));>p

const getDataFromJP = async () => {
  const results = [];
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      results.push(data);
    })
    .then((r) =>
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((res) => res.json())
        .then((data) => {
          results.push(data);
        })
    );
  console.log(results);
};

// console.log(getDataFromJP());
function fn() {
  const test = () => {
    return this;
  };
  return test();
}

const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(45));

Array.prototype.flat = function (depth) {
  "use strict";

  if (depth === undefined) {
    depth = 1;
  }

  var flatten = function (arr, depth) {
    if (depth < 1) {
      return arr.slice();
    }

    return arr.reduce(function (acc, val) {
      return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
    }, []);
  };

  return flatten(this, depth);
};

let countDepp = 0;

function deepCount(a) {
  if (a.some((item) => Array.isArray(item))) {
    count += 1;
    return deepCount(a.flat(1));
  }
  console.log(a, count);
  return count + a.length;
}

// console.log(deepCount([[[[[[[[[]]]]]]]]]));

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let output = "";
  s = s.split("");
  s.forEach((string, idx) => {
    let sliceN = 1;
    s.forEach((str) => {
      const tmpStr = string + s.join("").slice(idx + 1, sliceN);
      if (
        tmpStr.length < output.length ||
        tmpStr !== tmpStr.split("").reverse().join("")
      ) {
        sliceN += 1;
        return;
      }
      output = tmpStr;
      sliceN += 1;
    });
  });
  if (output.length) {
    return output;
  }
  return s[0];
};

// console.log(longestPalindrome("ccc"))

const fetching = (url) => {
  console.log("response from", url);
};

const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const getRes = debounce(fetching, 100);

// getRes("api");
// getRes("api");
// getRes("api");
// getRes("api");
// getRes("api");
// getRes("api");
// getRes("restfull api");
// getRes("graphql");

const bindedFunc = function (args) {
  console.log(this, args);
};

const user = {
  name: "oskar",
};

// bindedFunc.bind(user, "user").call({ call: "call" }, "ne user");

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
    {
      value: 7,
      children: [{ value: 8 }, { value: 9, children: [{value: 10}] }],
    },
  ],
};

const getTreeValues = (tree) => {

  const result = [tree.value];
  const stack = [...tree.children];


  while(stack.length) {
    const node = stack.pop();

    if (node?.children?.length) {
      stack.push(...node.children);
      result.push(node.value);
      continue;
    }

    result.push(node.value);
  }

  return result;
}

// console.log(getTreeValues(tree))

// const getTreeValues = (tree) => {
//   const output = [];
//   const stack = [tree];

//   while(stack.length) {
//     const currentNode = stack.pop();


//     if(currentNode?.children) {
//       stack.push(...currentNode.children);
//     };

//     output.push(currentNode.value);
//   };

//   return output
// };

// console.log(getTreeValues(tree));

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectet" + 
"ur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Ph" + 
"asellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Pra" + 
"esent laoreet in enim ut placerat. Praesent a facilisis turpis."

function format(text, width) {
  const arr = text.split(' ')
  const output = []
  let tmpLine = ''
  
  arr.forEach((word, idx) => {
    if(idx === arr.length - 1) {
      if((tmpLine + word).length + 1 <= width) {
        output.push(tmpLine + ' ' + word)
        return
      }
      output.push(tmpLine, word)
      return
    }
    if((tmpLine + word + tmpLine.split(' ').length).length > width) {
      output.push(tmpLine)
      tmpLine = word
      return
    }

    tmpLine += idx !== 0 ? ' ' + word : word
  })
  
  return output.join(' \n ')
}

// console.log(format(text, 50))
// console.log(format('Loremipsum dolorsita.', 10))

function addTwoNumbers (l1, l2) {
  const result = [];
  l1 = l1.reverse()
  for(let idx = 0; idx < l1.length; idx++){
      const num = l1[idx]
      const num2 = l2[idx]

      if(num2 === undefined) {
        if(num >= 10) {
          if(l1[idx+1] === undefined) l1[idx+1] = 1
          else l1[idx+1] += 1

          result.push(+(num.toString()[1]))
          continue
        }
        else result.push(num)
        continue
      }

      const sum = num + num2
      
      if(sum >= 10) {
          l1[idx+1] += 1
          result.push(+(sum.toString()[1]))
          continue
      }
      result.push(sum)
  }
  return result
};

// console.log(addTwoNumbers([10], [9]))

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
let operationCount = 0;

const binarySerach2 = (array, target) => {
  let left = 0;
  let right = array.length;
  let position = -1;
  let found = false
  let mid;

  while(!found && left <= right) {
    operationCount += 1
    mid = Math.floor((left + right) / 2)
    console.log(mid, left, right);

    if(array[mid] === target) {
      found = true
      position = mid

      return position
    }

    if(array[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return position
} 

// console.log(binarySerach2(numbers, 40));

const unSortedarray = [3,6,8,1,0,4,5,5,7]

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i+1; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    let prevNum = array[i]
    array[i] = array[minIndex]
    array[minIndex] = prevNum
  }

  return array
}
   
// console.log(selectionSort(unSortedarray));

var sortColors = function(nums) {
  if(nums.length <= 1) return nums
  let left = [];
  let right = [];
  let newArray = [];
  let pivot = nums.pop();

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] <= pivot) {
          left.push(nums[i])
      } else right.push(nums[i])
  }

  return newArray.concat(sortColors(left), pivot, sortColors(right))
};

// console.log(sortColors([2,0,2,1,1,0]));

const reverse = (arr) => {
  const output = []
  for(let i = arr.length - 1; i > 0; i--) {
      if(arr[i] === '(' || arr[i] === ')') {
          continue
      }
      output.push(arr[i])
  }
  
  return output
}

function reverseBrackets(inputString) {

  let output = inputString;

  while (output.includes('(')) {
    
      const end = output.indexOf(')');
      const from = output.lastIndexOf('(', end);

      output = 
          output.slice(0, from) + 
          output.slice(from + 1, end).split('').reverse().join('') +
          output.slice(end + 1)
          
  }
  return output
}


// console.log(reverseBrackets('foo(bar)baz'));
// console.log(reverseBrackets("foo(bar)baz(blim)"));


var rotate = function(nums, k) {
  while(k) {
    const lastNum = nums.pop();
    nums.unshift(lastNum)
    k--;
  }

  return nums;
};

// console.log(rotate([...'1 2 3 4 5 6 7 8 9'.repeat(1000000).split(' ')], 1200));


function useCounter () {
  let count = 0;

  function inc () {
    count++
  }

  function dec () {
    count--
  }

  return {
    count,
    inc, 
    dec
  }
}
 
const tet = {
  name: 'shtefan',
  set: new Set([1,2,1]),
  obj: {
    id: 1
  }
}

const clondeByJson = JSON.parse(JSON.stringify(tet))
// const cloned = structuredClone(tet)

// tet.name ='oskar'
// tet.obj.id = 2


const map = (arr, callback) => {

  return arr.reduce((res, item, idx, array) => {
    res.push(callback(item, idx, array))
    return res
  }, [])
}

const filter = (arr, callback) => {

  return arr.reduce((res, item, idx, array) => {
    if(callback(item, idx, array)) { 
      res.push(item)
    }
    return res
  }, [])
}

// console.log( map([1,2,3], (item) => item + 1 ) );

// console.log( filter([1,2,3], (item) => item > 2 ) );


const promiseAll = (promises) => {
  let responses = [];
  let resolvesCount = 0

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, i) => {
        promise.then(res => {
          responses[i] = res
          resolvesCount += 1

          if(resolvesCount === promises.length) resolve(responses)
      }).catch(err => reject(err))
    });
  });
};


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1');
  }, 100);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('5');
  }, 500);
});

// promiseAll([p2, p1]).then(
//   (res, test) => {
//     console.log("Response => ", res);
//   }
// ).catch(err => console.log(err));
var lengthOfLongestSubstring = function(s) {
  let string = '';
  let tmpString = ''
  let count = 0;

  s.split('').forEach((char, idx, array) => {
    if(!string.includes(char) && count === string.length) {
      string+=char;
      count += 1;
      return;
    }
    
    if (tmpString.length < string.length) tmpString = string;

    const from = string.split('').findIndex(c => c === char);
    if (string[string.length - 1] !== char) string = string.slice(from + 1) + char;
    else string = char;
    count = 1;
  })

  return tmpString.length > string.length ? tmpString.length : string.length;
};


// console.log(lengthOfLongestSubstring('ohomm'));
// console.log(lengthOfLongestSubstring('cdd'));
// console.log(lengthOfLongestSubstring('dvdf'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring("abcabcbbkafgl"));
// console.log(lengthOfLongestSubstring("abcabcbb"));

var rotate = function(matrix) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix));

  matrix.forEach((array, index) => {
    array.forEach((n, i) => {
      array[i] = matrixCopy[matrix.length - 1 - i][index]
    })
  })

  return matrix;
};

// console.log(rotate([[1,2,3], [4,5,6], [7,8,9]]));
// console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

var minPathSum = function(grid) {
  const columns = grid.length;
  const rows = grid[0].length;

  for (let i = 1; i < columns; i++) {
    grid[i][0] += grid[i-1][0];
  }

  for (let j = 1; j < rows; j++) {
    grid[0][j] += grid[0][j-1];
  }


  for (let i = 1; i < columns; i++) {
    for (let j = 1; j < rows; j++) {
      grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
    }
  }

  return grid[columns - 1][rows - 1];
};
// console.log(minPathSum([[1,2,5],[3,2,1], [1,7,1]]));

var climbStairs = function(n) {
    const dp = [...Array(n + 1)].fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 2; i < dp.length; i++) {
       dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n];
}; 

// console.log(climbStairs(4));

var tribonacci = function(n) {
  if (!n) return 0;
  const dp = [...Array(n + 1)].fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < dp.length; i++) {
     dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n - 1];
};

// console.log(tribonacci(25));

var minCostClimbingStairs = function(cost) {
    if (cost.length === 1) return cost[0];
    cost.push(0);
    const dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
      dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]; 
    }

    return dp[dp.length-1];
};

// console.log(minCostClimbingStairs([10,15,20])); // 15
// console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // 6

var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
};

// console.log(maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2));
// console.log(maxSumTwoNoOverlap([3,8,1,3,2,1,8,9,0], 3, 2));
// console.log(maxSumTwoNoOverlap([2,1,5,6,0,9,5,0,3,8], 4, 3));


var construct2DArray = function(original, m, n) {
  const len = original.length
  if (len !== m * n)  return []
  
  
  let result = new Array(m)
  for (let i = 0; i < m; i++) {
      const row = new Array(n)
      for (let j = 0; j < n; j++) {
          const index = i * n + j
          row[j] = original[index]
      }
      
      result[i] = row
  }
  
  
  return result
};

// console.log(construct2DArray([1,2,3, 4], 4, 1));

var matrixReshape = function(mat, r, c) {
  const n = mat.length, m = mat[0].length;
  if (r * c !== n * m) return mat;

  const output = [];
  let temp = [];
  let i2 = 0, j2 = 0;

  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < m; j++) {
      temp.push(mat[i][j]);
      j2++;

      if (j2 === c) {
        i2++;
        j2 = 0;
        output.push(temp);
        temp = [];
      }
    }
  }

  return output;
};

// console.log(matrixReshape([[1,2],[3,4]], 1, 4));
// console.log(matrixReshape([[1,2],[3,4]], 4, 1));
// console.log(matrixReshape([[1,2],[3,4]], 2, 4));

var isValid = function(s) {
  if (s.length % 2 !== 0) return !!0;

  const stack = [];
  const openSet = new Set(['(', '{', '[']);
  const closeOpenMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  
  for (let i = 0; i < s.length; i += 1) {
    if (openSet.has(s[i])) {
      stack.push(s[i]);
    } else {
      const pop = stack.pop();
      if (pop !== closeOpenMap.get(s[i])) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};

// console.log(isValid('({})'));
// console.log(isValid('(}))'));
// console.log(isValid('([)]')); 
// console.log(isValid('[]')); 

const helper = (arr) => {
  const max = Math.max(...arr), min = Math.min(...arr);

  return {max, min}
}

var maxProfit = function(prices) {
  if (!prices.length) return 0;

  const {max, min} = helper(prices)
  let maxIdx = -1;
  let minIdx = -1;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === max) maxIdx = i;
    if (prices[i] === min) minIdx = i;

    if (minIdx < 0 || maxIdx < 0) continue;

    if (maxIdx === minIdx || maxIdx > minIdx) return prices[maxIdx] - prices[minIdx];

    if (maxIdx > minIdx) {
      
    }
  }

};

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([2,4,1]));
// console.log(maxProfit([7,2,1,4]));
// console.log(maxProfit([3,3,5,0,0,3,1,4]))
// console.log(maxProfit([3,3]));
// console.log(maxProfit([0,1,1,0]));


var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if (!num) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

// console.log(moveZeroes([0,0,1]));

var majorityElement2 = function(nums) {
  const counts = {};
  const res = [];

  nums.forEach((n, i) => {
      if(counts[n]) { counts[n] += 1; return}
      counts[n] = 1;
  })

  for (n in counts) {
      if (counts[n] >= Math.round(nums.length / 3)) res.push(+n);
  }

  return res;
};

// console.log(majorityElement2([3,2,3]));

var isCovered = function(ranges, left, right) {
  const numsSet = new Set();
  for (const [start, end] of ranges) {
      for (let i = start; i <= end; i++) {
          numsSet.add(i);
      }
  }

  for (let i = left; i <= right; i++) {
      if (!numsSet.has(i)) {
          return false;
      }
  }

  return true;
};
 
// console.log(isCovered([[25,42],[7,14],[2,32],[25,28],[39,49],[1,50],[29,45],[18,47]], 15, 38));
// console.log(isCovered([[50, 50]], 1, 50))
// console.log(isCovered([[1,1]], 1, 1))

var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (haystack.length === 1) return haystack === needle ? 0 : -1;

  const letters = {};
  let str = '';
  let firstIdx = -1;
  let prevIdx = -1;

  for (i in needle) {
      if (letters[needle[i]]) {
          letters[needle[i]] += 1;
          continue;
      }
      letters[needle[i]] = 1;
  }

  for (i in haystack) {
      if (str === needle) break;

      if (letters[haystack[i]] && i - prevIdx === 1) {
          if (str.length === 0) firstIdx = i;
          str += haystack[i];
      } else {
          str = '';
          firstIdx = -1;
      }
      
      prevIdx = i;
  }

  return firstIdx;
};

// console.log(strStr("leetcode", 'leeto'))
// console.log(strStr("aaaaa", "bba"))

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let output = [-1, -1];

  // Binary search for the target (left-biased)
  while (left < right) {
      let middle = Math.floor((left + right) / 2);

      if (nums[middle] < target) {
          left = middle + 1;
      } else {
          right = middle;
      }
  }

  // If the target was not found on the first pass
  if (nums[left] != target) {
      return output;
  }

  // Store the left-hand side
  output[0] = left;

  // Reset the right-hand side of the binary search (left-hand side remains as is)
  right = nums.length - 1;

  // Binary search for the target (right-biased)
  while (left < right) {
      let middle = Math.floor((left + right) / 2) + 1;
      if (nums[middle] <= target) {
          left = middle;
      } else {
          right = middle - 1;
      }
  }

  // Store the right-hand side
  output[1] = right;

  return output;
};

var minMoves = function(nums) {
  if (nums.length === 1) return 1;

  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    count += nums[i] - nums[0];
  }

  return count;
};

// console.log(minMoves([1,2,3]))
// console.log(minMoves([2,2,3]));
// console.log(minMoves([1,1,1000000000]))

function max (a, n = 0) {
  if (a.length === 1) return a[0] > n ? a[0] : n;
  let num = a.shift();
  if (num < n) num = n;
  return max(a, n);
}

// console.log(max([1,2,3,4,5]))

let arr = [3,4,1,5];
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.ceil(array.length / 2) - 1;
    const pivot = array[middle];
    
    const left = []; 
    const right = [];

    for (let i = 0; i < array.length; i ++) {
        if (middle === i) continue;
        array[i] < pivot ? right.push(array[i]) : left.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

// console.log(quicksort(arr))

var permute = function(nums, arr = [], res = []) {
    if (nums.length === 0) res.push([...arr]);

    for (let i = 0; i < nums.length; i++) {
      const rest = nums.filter((_n, index) => index !== i); 
      arr.push(nums[i]); 
      permute(rest, arr, res);
      arr.pop(); 
    }

    return res;
};

// console.log(permute([1,2,3,4]))

const createCounter = () => {
  let count = {current: 0};

  function inc () {
    count.current ++;
  }

  function dec () {
    count.current --;
  }


  return {
    inc, dec, count
  }
}

// const counter = createCounter();
// counter.inc();
// console.log(counter.count.current);


Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];

    const res = Array(rowsCount);

    let traverse = 0;
    let it = 1;

    while (this.length) {
        for (let i = 0; i < rowsCount; i ++) {
            it ++;
            if (!res[i]) res[i] = [];

            if (traverse % 2 === 0) {
                res[i].push(this.shift());
            } else {
                res[rowsCount - 1 - i].push(this.shift());
            }
        }

        traverse ++;
    }

    console.log(it)

    // return res;
}

// console.log(Array(100**2).fill(Math.random() * 10).snail(100, 100));




const countWords = (str) => {
//  let res = 0;
//  let tmpWord = '';
    
//  for (const char of str) {
//     if (char === ' ') {
//       if (tmpWord.length) res ++;
//       tmpWord = ''
//       continue;
//     }
//     tmpWord += char;
//  }

//  if (tmpWord.length) res ++;

//  return res;


  // const words =  str.split(' ');
  // return words.filter(char => char).length
  

  // return str.split(/\s+/)
}

// console.log(countWords("ksdfsdf    sdffsfd  sdfsdfsdf"));
// квантификаторы
// символьные классы


var throttle = function(fn, t) {
    let timeout = null;
    let nextTimeToCallFn = 0;

    return function(...args) {
        const delay = Math.max(0, nextTimeToCallFn - Date.now());
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
            nextTimeToCallFn = Date.now() + t;
        }, delay);
    }
};

// const throttled = throttle(console.log, 1000)

// setTimeout(() => {
//   console.log(throttled('poka'))
// }, 1000)

// console.log(throttled('skipped'));

// console.log(throttled('privet'));

const graph = {
  A: ['B', 'D'],
  B: ['C', 'N', 'Z'],
  D: ['E', 'F'],
  F: ['S'],
}

// A N

/*
  A A
  B A
  D A
  C B
  N B
*/


function findPath (from, to) {
  const map = new Map();
  const queue = [from];

  map.set(from, from)
  
  while (queue.length) {
    const fromNode = queue.shift();
    const neighbours = graph[fromNode];

    if (!neighbours) continue;

    for (const neighbour of neighbours) {
     if (!map.has(neighbour)) {
      map.set(neighbour, fromNode);
     }

     if (neighbour === to) {
      const res = [to];
      let point = map.get(to);

      while (point !== from) {
        res.push(point);
        point = map.get(point);
      }

      res.push(point);

      return res.reverse();
     }

     queue.push(neighbour);
    }
  }

  return 'No Way'
}


// console.log(findPath('D', 'S'));

// async function fetchFlights (from) {
//   return await graph[from];
// }

// async function findPath (from, to) {
//   const map = new Map();
//   map.set(from, [from]);
//   const q = [from];

//   while (q.length) {
//     const cn = q.shift();

//     const neightbours = await fetchFlights(cn);
//     if (!neightbours) continue;

//     const currentWay = map.get(cn);

//     for (const neighbour of neightbours) {
//       if (!map.has(neighbour)) {
//         q.push(neighbour);
//       }

//       map.set(neighbour, [...currentWay, neighbour])

//       if (to === neighbour) return Promise.resolve(map.get(to))
//     }
//   }

//   return await Promise.reject(new Error('there is no way'))
// }


// console.log(findPath('A', 'N').then(res => console.log(res))); // Promise.resolve(A, B, N);

setTimeout(() => console.log(2)) // 5

queueMicrotask(() => {
  console.log(7); // 1
})

Promise.resolve(3).then(console.log); // 2

setTimeout(() => {
  new Promise((resolve) => {
    console.log(4); // 6
    resolve(5); 
  }).then(console.log) // 7
}) 

setTimeout(() => console.log(6)) // 8

const promise1 = new Promise((res) => {
  setTimeout(() => {
    res(1) 
  })
});

const promise2 = new Promise((res) => {
  setTimeout(() => {
    res(2); 
  })
});

const promises = [promise1, promise2];

// try to underestand how async for promAll and t works

function promAll (arrOfProms){
  const res = Array(arrOfProms.length);
  let count = 0;

  return  new Promise(resolve => {
    for (let i = 0; i < arrOfProms.length; i ++) {
      arrOfProms[i].then(r => {
        res[i] = r + 1;
        count ++; 

        if (count === arrOfProms.length) resolve(res);
      }).catch(err => r[i] = err)
    }
  })
}

async function t () {
  return Promise.all(promises);
}

promAll(promises).then(console.log); // 3
t().then(console.log); // 4


const createKyrgyzPhone = (string) => {
  const regexp = /(\d{3})(\d{3})(\d{3})/;
  const matched = string.match(regexp);
  const kyrgyzCode = '996'

  return `+${kyrgyzCode} ${matched[1]} ${matched[2]} ${matched[3]}`
}

// console.log(createKyrgyzPhone(input));


const getDatesWithFromString = (string) => {
  const regexp = /\d{2}-\d{2}-\d{4}/g;
  const matched = string.match(regexp);
  return matched;
}

// console.log(getDatesWithFromString("Сегодняшняя дата: 31-07-2023, а завтрашняя дата: 01-08-2023")); // ["31-07-2023", "01-08-2023"]


const generateDoubleNamedEmail = (email) => {  
  const regexp = /^\w+/g;
  const name = email.match(regexp)[0];
  const replaceEmail = email.match(/@\w+/);
  
  return email.replace(replaceEmail, `@${name}`);
}

// console.log(generateDoubleNamedEmail('oskar@gmail.com'));
// console.log(generateDoubleNamedEmail('oskar@mail.ru')); 

// const reg = /\d+(?=[^0-9])/;
const reg = /(?<=[0-9]h)\d+/;

const re2 = /(([0-9]h)(\d+))/;
const re4 = /(?<=[0-9]h)\d+/;

// console.log('1h1'.match(re2));

const re3 = /[0-9]h+\d+/;

const string = 'hello oskar, yesterday I saw my old friend whoes name is also Oskar'; // /Oskar/g

// console.log(reg.test(string));
// console.log(string.match(reg));

// 'test1123?._-]'.match(/[\d\D]/);


// \d{n}
// \d{n,}
// \d{n,m}
// \d{1,}
// \d{0,}
// \d{0,1}


const findEmail = (string) => {
  const regexp = /(?<=[.])(\w+@\w+.\w+)/;

  return string.match(regexp);
}

// console.log(findEmail('my eamil is oskar@gmail.com'))
// console.log(findEmail('my eamil is oskar@gmail.com, you can use it to text me'))

function randomPassword (length) {
  // 65 - 90 upper letter
  // 97 - 122 lower letter
  // 33 - 126 alsmost all ascii symbols
  let result = '';

  const codesUpper = Array(26).fill(0).map((_, idx) => idx + 65);
  const codesLower = Array(26).fill(0).map((_, idx) => idx + 97);

  for (let i = 0; i < length; i ++) {
    const isNum = Math.floor(Math.random() * 2) > 0;
    if (isNum) {
      result += Math.floor(Math.random() * 10);
      continue; 
    }
    const isUpper = Math.floor(Math.random() * 2) > 0;
    const randomLetterIdx = Math.floor(Math.random() * 26);

    if (isUpper) {
      result += String.fromCharCode(codesUpper[randomLetterIdx]);
    } else {
      result += String.fromCharCode(codesLower[randomLetterIdx]);
    }
  }

  return result;
}

// console.log(randomPassword(150))


const condition1 = (key, value) => key !== 'x';
const condition2 = (key, value) => !!value;
const deepObj = {
  a: false,
  b: {
    c: 2,
    d: {
      e: '',
      f: 0,
    },
    x: 1,
  },
};

const deepFilter = (cb, obj) => {
  const stack = [obj];

  while (stack.length) {
    const node = stack.pop();
    for (const key in node) {
      const value = node[key];
      if (typeof value === 'object' && value !== null) {
        stack.push(value);
        continue;
      }
      if (!cb(key, value)) delete node[key];      
    }
  }
}

// deepFilter(condition2, deepObj);
// console.log(deepObj);

const nextGreaterheigth = (heigths) => {
  const res = [];
  const stack = [heigths[heigths.length - 1]];

  for (let i = heigths.length - 2; i > 0; i --) {
    const height = heigths[i];
    const last = stack[stack.length - 1];
    if (last < height) {
      res.push(height);
      stack.pop();
      stack.push(height);
    } else res.push(-1);
    stack.push(height);
  }

  return res;
}

console.log(nextGreaterheigth([2,1,2,4,3]))