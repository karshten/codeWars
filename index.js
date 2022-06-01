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
//
// console.log(divisors(14)) => [2,7] || num is prime

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

// function spinWords(string){
//   return string.split(' ').map((s)=>{
//       return s.length >= 5 ? s.split('').reverse().join('') : s
//   }).join(' ')
// }
//
// console.log(spinWords('Hey fellow warriors'))

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
//
// console.log(XO('oxdadasd'))

// function filter_list(l) {
//     return l.filter(i => {
//         return i === 0 || typeof i !== 'string'
//     })
// }
//
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123, 0]))

// function reverseWords(str) {
//     return str.split(' ').map((word)=>{
//         return word.split('').reverse().join("")
//     }).join(' ')
// }
//
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
//
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
// console.log(isMerge('codewars', 'cdwr', 'oeas'))

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

// function toCamelCase(str) {
//     const syms = /[-_]/gi
//     return syms.test(str) ? str
//             .replace(syms, ' ')
//             .split(' ')
//             .map((item, idx) => idx !== 0 ? item[0].toUpperCase() + item.substr(1) : item)
//             .join('')
//         : ''
// }
//
// console.log(toCamelCase("the-stealth-warrior"))

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
    let arrNum = num.toString().split('')
    if (arrNum.includes('0')) {
        return arrNum
    } else {
        return arrNum.map((item, idx) => {
            return item + `${arrNum.slice(idx + 1).map(i => '0').join('')}`
        }).join(' + ')
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
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    let data = await response.json()
    console.log(data.userId)
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
    let outputArr = []
    for (let i = 0; i < arr.length; i++) {
        outputArr.push(funcCB(arr[i]))
    }
    return outputArr
}
const toNameCase = (name) => {
    return name[0].toUpperCase() + name.slice(1)
}
// console.log(customMap(['oskar', 'beka', 'pasha'], toNameCase))

const person = {
    name: 'oskar',
    age: 15,
    password: 'tpircSavaJ',
    acceptedTerm: true,
    skills: ['cooking', 'coding'],
    info: {
        gender: 'male',
        diseases: ['negative vision', 'skalioz', 'cold']
    }
}
const validate = (...funcs) => {
    let verifyCount = 0
    return (obj) => {
        for (let i = 0; i < funcs.length; i++) {
            funcs[i](obj) === true ? verifyCount++ : null
        }
        return verifyCount === funcs.length ? `successfully passed ${verifyCount} verifies` : `need pass ${funcs.length - verifyCount} verifies to continue`
    }
}
const validAge = (obj) => {
    return obj.age >= 18
}
const validPassword = (obj) => {
    return obj.password.length >= 8
}
const validTerm = (obj) => {
    return obj.acceptedTerm
}
const validator = validate(validAge, validPassword, validTerm)
// console.log(validator(person))

const products = [
    {
        name: 'milk',
        price: 242,
        discount: false
    }, {
        name: 'salt',
        price: 145,
        discount: true
    }, {
        name: 'water',
        price: 54,
        discount: false
    }, {
        name: 'crisps',
        price: 76,
        discount: true
    }, {
        name: 'meat',
        price: 470,
        discount: true
    }
]
const withDiscount = (arr) => {
    const discount = 10
    return () => {
        return arr.map(item => item.discount ? item.price - (item.price / discount) : item.price)
    }
}
const withDiscountProducts = withDiscount(products)
// console.log(withDiscountProducts())

const greeting = (caption) => {
    let title = 'Article topic'
    return function (author) {
        return `${title}: ${caption}, written by ${author}`
    }
}
const greetingBy = greeting('closure func')
// console.log(greetingBy('oskar'))

//Spread
const arr1 = [1, 2, 3, '1', '2', '3']
const copyArr1 = [...arr1]
// console.log(copyArr1.map(i=>i*2))
// console.log(arr1)
// console.log(arr1)
// console.log(...arr1)
// console.log({...arr1})
// console.log([...arr1])

const personCopy = {...person}
const personCopy2 = Object.assign({}, person)
const personCopy3 = JSON.parse(JSON.stringify(person)) // best way to copy obj but functions become string (bag)
// console.log({...person, ...personCopy}) // concat objects
person.skills.push('dadas') // copied Obj will pushed too
// console.log(personCopy)
// console.log(personCopy3.info.diseases === person.info.diseases)
// console.log(Object.entries(personCopy3))
// console.log(Object.keys(personCopy3))
// console.log(Object.values(personCopy3))

//Rest
function rest(num, ...nums) { // spread operator in args this is Rest operator which create array from ...nums
    return nums.map(n => n * num)
}

//
// console.log(rest(3, 20, 10, 30))

// console.log([1, 2, 3, 4].find(item => item > 2))

let popArr = [1, 2, 3, 4]
popArr.pop() // remove last item in arr and return it
// console.log(popArr)

let unshifttedArr = [1, 2, 3, 4]
unshifttedArr.unshift(2) // added new item into arr and return arr.length
// console.log(unshifttedArr)

let shifttedArr = [1, 2, 3, 4, {name: 'oskar'}]
shifttedArr.shift() // remove first item in arr and return it
// console.log(shifttedArr)

let concatArr = [1, 2, 3, 4, 5]
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

const getData = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json()

    data.forEach(item => {
        const h2 = document.createElement('h2')
        const p = document.createElement('p')

        h2.innerHTML = item.title
        p.innerHTML = item.id

        document.body.innerHTML += h2.outerHTML
        document.body.innerHTML += p.outerHTML
    })
}

getData()