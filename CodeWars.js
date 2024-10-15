// function evenOrOdd(number) {
//     return (number % 2) === 0 ? "Even"  : "Odd"
// }
// console.log(evenOrOdd(2))
// console.log(evenOrOdd(7))
// console.log(evenOrOdd(-42))
// console.log(evenOrOdd(-7))
// console.log(evenOrOdd(0))


// makeNegative=(num)=> num > 0 ? -num : num
// console.log(makeNegative(1)) // return -1
// console.log(makeNegative(-5))// return -5
// console.log(makeNegative(0))// return 0
// console.log(makeNegative(0.12))// return -0.12
// return -Math.abs(num); ????


// function positiveSum(arr) {
//     let sum = 0
//     arr.forEach(i => (i > 0) && (sum += i))
//     return sum
// }


// function positiveSum(arr) {
//     let sum = 0
//     for(let i = 0; i <= arr.length; i++ ){
//         (arr[i] > 0) && (sum += arr[i])
//     }
//     return sum
// }
// console.log(positiveSum([1,2,3,4,5]))
// console.log(positiveSum([1,-2,3,4,5]))
// console.log(positiveSum([]))
// console.log(positiveSum([-1,-2,-3,-4,-5]))
// console.log(positiveSum([-1,2,3,4,-5]))


// solution = (srt) => srt.split('').reverse().join('')
// console.log(solution('world'))
// console.log(solution('hello'))
// console.log(solution(''))
// console.log(solution('h'))


// boolToWord = bool => bool ? 'Yes' : 'No'
// console.log(boolToWord(true))
// console.log(boolToWord(false))


// const numberToString = num => num + '' // `${num}` // mun.toString() // String(num)
// console.log(numberToString(67))


// const solution = (str, ending) => {
//     let arr = str.split(ending)
//     return ending !== '' ?  arr[arr.length - 1] === '' : true
// }
// function solution(str, ending){
//     return str.slice(0 - ending.length) === ending;
// }
// const solution = (str, ending) => str.endsWith(ending);
// console.log(solution('abcde', 'cde'))
// console.log(solution('abcde', 'abc'))
// console.log(solution('abc', ''))

// const opposite = number => number - number*2
// console.log(opposite(4.25))
// console.log(opposite(3.3333333))
// console.log(opposite(-12525220.3325))
// console.log(opposite(-5))

// const removeChar = str => str.slice(1, -1)
//
// console.log(removeChar('eloquent'))
// console.log(removeChar('country'))
// console.log(removeChar('person'))
// console.log(removeChar('place'))
// console.log(removeChar('ooopsss'))

// const squareSum = num => num.reduce((acc, current) => acc += Math.pow(current, 2), 0)
// console.log(squareSum([1,2]))
// console.log(squareSum([0, 3, 4, 5]))
// console.log(squareSum([]))


// const repeatStr = (rep, str) => str.repeat(rep)
// console.log(repeatStr(3, "*"))
// console.log(repeatStr(5, "#"))
// console.log(repeatStr(2, "ha "))


// const summation =  num => {
//     let sum = 0
//     for(let i = 0; i <= num; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(summation(1))
// console.log(summation(2))
// console.log(summation(8))


// function findSmallestInt(arr) {
//     return arr.reduce((acc, curr)=> curr < acc ? acc = curr : acc)
// }
// function findSmallestInt(arr) {
//     return Math.min(...arr)
// }
// console.log(findSmallestInt([78,56,232,12,8]))
// console.log(findSmallestInt([78,56,232,12,18]))
// console.log(findSmallestInt([78,56,232,412,228]))
// console.log(findSmallestInt([78,56,232,12,0]))
// console.log(findSmallestInt([1,56,232,12,8]))


// function noSpace(x){
//     // return x.split(' ').join('')
//     return x.replaceAll(' ', '')
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
// console.log(noSpace('8aaaaa dddd r     '))


// function countSheeps(sheep) {
//    return  sheep.filter(i => i).length
// }
// console.log(countSheeps([]))
// console.log(countSheeps([undefined]))
// console.log(countSheeps([null]))
// console.log(countSheeps([false]))
// console.log(countSheeps([true]))
// console.log(countSheeps([undefined,null,false,true]))
// console.log(countSheeps([undefined,null,false,true,true,false,null,undefined])) //2
// console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true])) //17


// function basicOp(operation, value1, value2){
//     return eval(`${value1} ${operation} ${value2}`)
// }
// console.log(basicOp("+", 4, 7))
// console.log(basicOp("-", 15, 18))
// console.log(basicOp("*", 5, 5))
// console.log(basicOp("/", 49, 7))


// function abbrevName(name){
//     return name.toUpperCase().split(' ').map(i => i.slice(0, 1)).join('.')
// }
// console.log(abbrevName("Sam Harris"))
// console.log(abbrevName("Patrick Feenan"))
// console.log(abbrevName("Evan Cole"))
// console.log(abbrevName("P Favuzzi"))
// console.log(abbrevName("David Mendieta"))


// function century(year) {
//     return Math.ceil(year /100)
// }
// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))
// console.log(century(89))
// console.log(century(220928))


// function digitize(n) {
//     return n.toString().split('').reverse().map(Number)
// }
// console.log(digitize(987654321))


// function isDivisible(n, x, y) {
//     return n%x === 0 && n%y === 0
// }
// console.log(isDivisible(3,3,4))
// console.log(isDivisible(12,3,4))
// console.log(isDivisible(8,3,4))
// console.log(isDivisible(48,3,4))


// function findNeedle(haystack) {
//     const needleIndex = haystack.indexOf('needle')
//    return  needleIndex !== -1 ? `found the needle at position ${needleIndex}` :  `Your function didn't return anything`
// }
// const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// const haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// const haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
// console.log(findNeedle(haystack_1))
// console.log(findNeedle(haystack_1))
// console.log(findNeedle(haystack_2))
// console.log(findNeedle(haystack_3))


// function past(h, m, s){
//     // const hMs = h*60*60*1000 //ms
//     // const mMs = m*60*1000 //ms
//     // const sMs = s*1000 //ms
//     // return hMs + mMs + sMs
//
//     return  (h*3600 + m*60 + s)*1000
// }
// console.log(past(0,1,1))//61000
// console.log(past(1,1,1))//3661000
// console.log(past(0,0,0))//0
// console.log(past(1,0,1))//3601000
// console.log(past(1,0,0))//3600000


// function betterThanAverage(classPoints, yourPoints) {
//    return ((classPoints.reduce((acc, curr) => acc +=curr, 0)) + yourPoints) / (classPoints.length + 1) < yourPoints
// }
// console.log(betterThanAverage([2, 3], 5))
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))
// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))


// function invert(array) {
//     // return array.reduce((acc, curr)=> {
//     //     acc.push(-curr)
//     //     return acc
//     // },[])
//     return array.map(num => -num)
// }
// console.log(invert([1,2,3,4,5]))


// function countPositivesSumNegatives(input) {
//     const inputFilter = input !== null && input.filter(i => i > 0 || i < 0)
//     return inputFilter.length > 0 ?  inputFilter.reduce((acc, curr)=> {
//             curr > 0 ? acc[0] += 1 : acc[1] +=curr
//             return acc
//     }, [0, 0]) : []
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
// console.log(countPositivesSumNegatives([0]))
// console.log(countPositivesSumNegatives([null]))

// function getCount(str) {
//     return str.split('').reduce((acc, curr)=> {
//         acc += curr === 'a' || curr === 'e' || curr === 'i' || curr === 'o' || curr === 'u' && 1
//         return acc
//     }, 0)
// }
// console.log(getCount("pear tree"))
//a, e, i, o, u


// function squareDigits(num){
//     return Number(num.toString().split('').map(n => n**2).join(''))
// }
// console.log(squareDigits(3212))
// console.log(squareDigits(2112))
// console.log(squareDigits(0))// 0


// function highAndLow(numbers){
//     const arrNumbers = numbers.split(' ').map(Number)
//     return  arrNumbers.reduce((acc, curr)=> {
//         acc[0] < curr ? acc[0] = curr : ''
//         acc[1] > curr ? acc[1] = curr : ''
//         return acc
//     },[arrNumbers[0], arrNumbers[0]]).join(' ')
// }
// function highAndLow(numbers){
//     const arrNumbers = numbers.split(' ')
//     return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
// console.log(highAndLow("1 2 3"))


// function descendingOrder(n){
//     return +n.toString().split('').sort((a, b) => b - a).join('')
// }
// console.log(descendingOrder(0))
// console.log(descendingOrder(1))
// console.log(descendingOrder(111))
// console.log(descendingOrder(15))
// console.log(descendingOrder(1021))
// console.log(descendingOrder(123456789))


// function solution(number){
//     let sumNumbers = 0
//     for(let i = 0; i < number; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sumNumbers += i
//         }
//     }
//     return sumNumbers
// }
// console.log(solution(10))


// function spinWords(string){
//     return  string.split(' ').map(i => i.length >= 5 ? i.split('').reverse().join('') : i).join(' ')
// }
// console.log(spinWords("Welcome"))
// console.log(spinWords("Hey fellow warriors"))


// function findOdd(a) {
//     let mySet = new Set(a)
//     const arrA = [...mySet]
//     const acc = [...arrA].fill(0)
//     const repetitions = arrA.reduce((acc, curr, index) => {
//         for(let i = 0; i < a.length; i++){
//             if(curr === a[i]){
//                 acc[index] += 1
//             }
//         }
//         return acc
//     }, acc)
//     const x = repetitions.reduce((acc, curr)=> {
//         if(curr % 2 !== 0 && curr > acc){
//             acc = curr
//         }
//         return acc
//     }, 0)
//     return arrA[repetitions.indexOf(x)]
// }
// function findOdd(A) {
//     const obj = {};
//     A.forEach(function(el){
//         obj[el] ? obj[el]++ : obj[el] = 1;
//     });
//     for(let prop in obj) {
//         if(obj[prop] % 2 !== 0) return Number(prop);
//     }
// }
// function findOdd(arr) {
//     const obj = {};
//     arr.forEach(el => {
//         obj[el] ? (obj[el] += 1) : (obj[el] = 1);
//     });
//     return +Object.entries(obj).find(([key, value]) => value % 2 !== 0)[0];
// }
// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el === item).length % 2)
// }
// console.log(findOdd([7]))
// console.log(findOdd([0]))
// console.log(findOdd([1, 1, 2]))
// console.log(findOdd([0,1,0,1,0]))
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))


// function getChar(c){
//     return String.fromCharCode(c)
// }
// console.log(getChar(55))


// function symmetricPoint(p, q) {
//     return [q[0]-p[0] + q[0], q[1]-p[1] + q[1]]
// }
//
// console.log(symmetricPoint([0,0], [1,1]))//[2, 2]
// console.log(symmetricPoint([2, 6], [-2, -6]))//[-6, -18]
// console.log(symmetricPoint([10, -10], [-10, 10]))//[-30, 30]
// console.log(symmetricPoint([1, -35], [-12, 1]))//[-25, 37]
// console.log(symmetricPoint([1000, 15], [-7, -214]))//[-1014, -443]
// console.log(symmetricPoint([0, 0], [0, 0]))//[0, 0]


// const reverseSeq = n => {
//     const arr = []
//     for(let i = n; i > 0 ; i--){
//         arr.push(i)
//     }
//     return arr
// };
// console.log(reverseSeq(5))


// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; z.length !== n ; i++){
//         if(i%x === 0) z.push(i)
//     }
//     return z;
// }
// console.log(countBy(1,10))//[1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2,5))//[2,4,6,8,10]


// const countSheep =  (num) =>{
//     const ArrSheep = []
//     if(num !== 0) for(let i = 0; i < num; i++){
//         ArrSheep.push(`${i + 1} sheep...`)
//     }
//     return ArrSheep.join('')
// }
// console.log(countSheep(3))


// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!"
//     if(p1 === 'scissors'){
//         if(p2 === 'rock') return "Player 2 won!"
//         return "Player 1 won!"
//     }
//     if(p1 === 'paper'){
//         if(p2 === 'scissors') return "Player 2 won!"
//         return "Player 1 won!"
//     }
//     if(p1 === 'rock'){
//         if(p2 === 'paper') return "Player 2 won!"
//         return "Player 1 won!"
//     }
// };
// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//         return "Player 1 won!";
//     }
//     else {
//         return "Player 2 won!";
//     }
// };
// console.log(rps('rock', 'scissors'))
// console.log(rps('scissors', 'rock'))
// console.log(rps('rock', 'rock'))
// console.log(rps('rock', 'rock'))
// console.log(rps('scissors', 'scissors'))
// console.log(rps('paper', 'paper'))


// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     return str.split('').filter(b => !vowels.includes(b.toLowerCase())).join('')
// }
// console.log(disemvowel("This website is for losers LOL!"))
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// console.log(disemvowel("What are you, a communist?"))


// function getMiddle(s){
//     const middle = Math.floor(s.length/2)
//     return  (s.length % 2) ?  s.charAt(middle) : s.slice(middle - 1, middle + 1)
// }
// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))


// function accum(s) {
//     let acc = ''
//     for(let i = 0; i < s.length; i++){
//         acc += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-'
//     }
//     return acc.slice(0, -1)
// }
// console.log(accum("ZpglnRxqenU"))


// function isIsogram(str){
//     return new Set(str.toLowerCase()).size === str.length
// }
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("isogram"))
// console.log(isIsogram("aba"))
// console.log(isIsogram("moOse"))
// console.log(isIsogram("isIsogram"))
// console.log(isIsogram(""))


// function XO(str) {
//     const counter = str.toLowerCase().split('').reduce((acc, curr) => {
//         if(curr === 'x') acc[0]++
//         if(curr === 'o') acc[1]++
//        return acc
//     }, [0,0] )
//     return counter[0] === counter[1]
// }
// console.log(XO('xo'))
// console.log(XO("xxOo"))
// console.log(XO("xxxm"))
// console.log(XO("Oo"))
// console.log(XO("ooom"))


// const str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function () {
//     return  this.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')
// };
// console.log(str.toJadenCase())

// function findShort(s){
//     return s.split(' ').reduce((acc, curr)=> {
//          if(curr.length < acc.length) return  acc = curr
//         return acc
//     }).length
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// function maskify(cc) {
//     const arr = cc.split('')
//     if(cc.length > 4) arr.splice(0, cc.length - 4, '#'.repeat(cc.length - 4))
//     return arr.join('')
// }
// function maskify(cc) {
//     return cc.slice(-4).padStart(cc.length, '#')
// }
// console.log(maskify('4556364607935616'))


// function sumTwoSmallestNumbers(numbers) {
//     const min = Math.min(...numbers)
//     numbers.splice(numbers.indexOf(min), 1)
//     return  Math.min(...numbers) + min
// }
// const sumTwoSmallestNumbers = (arr) => {
//     arr.sort((a, b) => a - b)
//     return  arr[0] + arr[1]
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))


// function getSum(a, b)
// {
//     const min = Math.min(a,b)
//     const max = Math.max(a,b)
//     let result = min
//     for(let i = min + 1; i <= max; i++){
//         result += i
//     }
//     return  result
// }
// const getSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }
// console.log(getSum(0,-1))
// console.log(getSum(0, 1))
// console.log(getSum(2, 2))
// console.log(getSum(2, 0))
// // count * sum /2


// function longest(s1, s2) {
//    return [...new Set(s1 + s2)].sort().join('')
// }
// console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))//"abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions"))//"acefghilmnoprstuy"


// function findNextSquare(sq) {
//     return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1 )**2
// }
// console.log(findNextSquare(121))


// function printerError(s) {
//     const erroneousLetters = 'nopqrstuvwxyz'
//     return `${s.toLowerCase().split('').reduce((acc, curr)=> {
//         (erroneousLetters.includes(curr)) ? acc++ : acc
//         return acc
//     },0)}/ ${s.length}`
// }
// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))


// function validatePIN(pin) {
//     if (pin.length === 4 || pin.length === 6) {
//         return pin.split('').reduce((acc, curr) => {
//             if(isNaN(curr) || curr === ' ' || curr === '\n') acc = false
//             return acc
//         }, true)
//     }else{
//         return  false
//     }
// }
// console.log(validatePIN("-12345"))
// console.log(validatePIN("1.234"))
// console.log(validatePIN("-1.234"))
// console.log(validatePIN("0000"))
// console.log(validatePIN("a234"))
// console.log(validatePIN('123 '))
// console.log(validatePIN('123'))
// console.log(validatePIN('123\n'))
// console.log(validatePIN('123\ '))


// function nbYear(p0, percent, aug, p) {
//     let i = 0
//     for(i; p0 < p; i++){
//         p0 += aug + Math.floor(p0*percent/100)
//     }
//     return i
// }
// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
// console.log(nbYear(1500000, 0.25, 1000, 2000000))
// console.log(nbYear(1000, 2.0, 50, 1214))


// function rowSumOddNumbers(n) {
//     return n**3
// }
// console.log(rowSumOddNumbers(1))
// console.log(rowSumOddNumbers(42))


// const binaryArrayToNumber = arr => {
//     return  arr.reverse().reduce((acc, curr, index) => {
//         if(index === 0 && curr){acc++}
//         else {
//             if(curr){
//                 acc +=2**index
//             }
//         }
//         return acc
//     }, 0)
// };
// const binaryArrayToNumber = arr => {
//     return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// }
// console.log(binaryArrayToNumber([0, 0, 0, 1]))//1
// console.log(binaryArrayToNumber([0, 0, 1, 0]))//2
// console.log(binaryArrayToNumber([1, 1, 1, 1]))//15
// console.log(binaryArrayToNumber([0, 1, 1, 0]))//6
// console.log(binaryArrayToNumber([1,0,1,1,0,0,1]))//89

// function dnaStrand(dna){
//     let and = ''
//     for(let i = 0; i < dna.length; i++){
//         if(dna[i] === 'A'){
//             and += dna[i].replace('A', 'T')
//         }else if (dna[i] === 'T'){
//             and += dna[i].replace('T', 'A')
//         }
//         if(dna[i] === 'C'){
//             and += dna[i].replace('C', 'G')
//         }else if (dna[i] === 'G'){
//             and += dna[i].replace('G', 'C')
//         }
//     }
//     return and
// }
// function dnaStrand(dna){
//     let and = ''
//     for(let i = 0; i < dna.length; i++){
//         let x = dna[i] === 'A' ? 'T' : dna[i] === 'T' ? 'A' : dna[i] === 'C' ? 'G' :  dna[i] === 'G' ? 'C' : ''
//         and += dna[i].replace(dna[i], x)
//     }
//     return and
// }
// function dnaStrand(dna){
//     const obj = {
//         A : 'T',
//         T : 'A',
//         C : 'G',
//         G : 'C'
//     }
//     let and = ''
//     for(let i = 0; i < dna.length; i++){
//         and += dna[i].replace(dna[i], obj[dna[i]])
//     }
//     return and
// }
// console.log(dnaStrand("AAAA"))
// console.log(dnaStrand("ATTGC"))
// console.log(dnaStrand("GTAT"))


// function oddOrEven(array) {
//     const sum = array.reduce((acc, curr)=> {
//         acc += curr
//         return acc
//     }, 0)
//     return sum%2 === 0 ? 'even' : 'odd'
// }
// console.log(oddOrEven([0, 1, 5]))


// function reverseWords(str) {
//     return str.split(' ').map(s => s.split('').reverse().join('')).join(' ')
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))


// function SeriesSum(n) {
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         sum += 1 / (i * 3 + 1)
//     }
//     return sum.toFixed(2)
// }
// console.log(SeriesSum(2))
// console.log(SeriesSum(3))
// console.log(SeriesSum(4))
// console.log(SeriesSum(0))


// function removeSmallest(numbers) {
//     let result = [...numbers]
//     result.splice(numbers.indexOf(Math.min(...numbers)), 1)
//     return result;
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]))
// console.log(removeSmallest([5, 3, 2, 1, 4]))
// console.log(removeSmallest([2, 2, 1, 2, 1]))
// console.log(removeSmallest([]))
// console.log(removeSmallest([378, 250, 23, 331, 31, 337, 135, 223, 382, 329, 153, 141, 49, 107, 261]))


// function likes(names) {
//     if(names.length === 0) return  'no one likes this'
//     if(names.length === 1) return `${names[0]} likes this`
//     if(names.length ===2) return names.join(' and ') + ' like this'
//     if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     const otherLength = names.length -2
//     if(names.length > 3) return  `${names[0]}, ${names[1]} and ${otherLength} others like this`
// }
// console.log(likes([]))//'no one likes this';
// console.log(likes(['Peter']))//'Peter likes this';
// console.log(likes(['Jacob', 'Alex']))//'Jacob and Alex like this';
// console.log(likes(['Max', 'John', 'Mark']))//'Max, John and Mark like this';
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))//'Alex, Jacob and 2 others like this';


// function digitalRoot(n) {
//         let stringN = n + ''
//         if(stringN.length > 1){
//             return  stringN.split('').map(n => +n).reduce((acc, curr) => {
//                 acc += curr
//                 return digitalRoot(acc)
//             })
//         }else {
//             return n
//         }
// }
// console.log(digitalRoot(16))
// console.log(digitalRoot(456))
// console.log(digitalRoot(45656345637356))


// function arrayDiff(a, b) {
//     let arrA = a
//     if(b.length){
//          b.forEach(i => {
//              filter(arrA)
//              function filter (arr){
//                  arrA = arr.filter(n => n !== i)
//              }
//          })
//     }else {return a}
//     return arrA
// }
// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2,2], [1]))
// console.log(arrayDiff([1,2,2], [2]))
// console.log(arrayDiff([1,2,2], []))
// console.log(arrayDiff([], [1,2]))
// console.log(arrayDiff([1,2,3], [1,2]))


// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//"(123) 456-7890"


// function findOutlier(integers){
//     const oddEven = integers.reduce((acc, curr) => {
//         if(curr % 2){acc[0]++}else{acc[1]++}
//         return acc
//     }, [0,0])
//     if(oddEven[0] > oddEven[1]){
//         return  (integers.filter(n => !(n % 2))[0])
//     }else {
//        return  (integers.filter(n => n % 2))[0]}
// }
// console.log(findOutlier([0, 1, 2]))
// console.log(findOutlier([1, 2, 3]))
// console.log(findOutlier([2,6,8,10,3]))
// console.log(findOutlier([0,0,3,0,0]))
// console.log(findOutlier([1,1,0,1,1]))


// function duplicateCount(text){
//     let result = 0
//     const arr = text.toLowerCase().split('')
//     const set = [...new Set(arr)]
//     set.forEach((n) => {
//         arr.filter(i => i === n).length > 1 && result++
//     })
//     return result
// }
// function duplicateCount(text){
//     return text.toLowerCase().split('').filter((val, i, arr) =>{
//         return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }
// console.log(duplicateCount(""))
// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("aabbcde"))
// console.log(duplicateCount("aabBcde"))
// console.log(duplicateCount("Indivisibility"))
// console.log(duplicateCount("Indivisibilities"))


// function duplicateEncode(word){
//     return  word.toLowerCase().split('').map((val, ind, arr) => {
//         if(arr.indexOf(val) === arr.lastIndexOf(val)){
//             return '('
//         }else {return ')'}
//     }).join('')
// }
// console.log(duplicateEncode("din"))// (((
// console.log(duplicateEncode("recede"))//()()()
// console.log(duplicateEncode("Success"))//)())())
// console.log(duplicateEncode("(( @"))//))((
//word.lastIndexOf(word[i]) === word.indexOf(word[i])


// function solution(str){
//     if(str.length === 0) return []
//     const arr = str.match(/..?/g)
//     arr[arr.length - 1].length < 2 ? arr[arr.length - 1] = arr[arr.length - 1] + '_' :  arr
//     return arr
// }
// console.log(solution("abcdef"))
// console.log(solution("abcdefg"))
// console.log(solution(""))
// function solution(str){
//     const arr = []
//     for(let i = 0; i < str.length; i = i + 2){
//         if(str[i + 1]){
//             arr.push(str[i] + str[i + 1])
//         }else {
//             arr.push(str[i] + '_')
//         }
//     }
//     return arr
// }
// function sq(num){
//     let str = ''
//     for(let i = 1; i <= num**2; i++){
//         if(i % num === 0 && i !== num**2){
//             str += '+\n'
//         }else {
//             str += '+'
//         }
//     }
//     return str
// }
// console.log(sq(8))

// function isValidWalk(walk) {
//     if (walk.length === 10) {
//         const obj = {
//             n: 0,
//             s: 0,
//             w: 0,
//             e: 0
//
//         }
//         walk.forEach((el, ind)=>{
//             obj[walk[ind]]++
//         })
//         return  obj.n === obj.s && obj.w === obj.e
//
//     }else {
//         return false
//     }
// }
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))
// console.log(isValidWalk(['w']))
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))


// function persistence(num) {
//     let ind = 0
//     rec(num)
//     function rec(num){
//         if(num >= 10){
//             let newNum = 1
//             num.toString().split('').forEach(n => newNum *= Number(n))
//             ind++
//             return  rec(newNum)
//         }else {
//             return num
//         }
//     }
//     return ind
// }
// function persistence(num) {
//     let times = 0;
//     num = num.toString();
//
//     while (num.length > 1) {
//         times++;
//         num = num.split('').reduce((a, b) => Number(a) * Number(b)).toString();
//     }
//     return times;
// }
// console.log(persistence(39))//3
// console.log(persistence(4))//0
// console.log(persistence(25))//2
// console.log(persistence(999))//4


// function toCamelCase(str){
//    if(str.length === 0){return str}
//    return  str.split('_').map(s => s.split('-')).flat().map((el, ind, arr) => arr[0] !== el ?  el[0].toUpperCase() + el.slice(1) : el).join('')
// }
// console.log(toCamelCase(''))
// console.log(toCamelCase("the_stealth_warrior"))
// console.log(toCamelCase("The-Stealth-Warrior"))
// console.log(toCamelCase("A-B-C"))


// function narcissistic(value) {
//     const valueArr = value.toString().split('')
//     const result =  valueArr.reduce((acc, curr) => {
//         acc += (+curr)**valueArr.length
//         return acc
//     }, 0)
//     return result === value
// }
//
// console.log(narcissistic(7))// true
// console.log(narcissistic(153))//true
// console.log(narcissistic(122))//false
// console.log(narcissistic(487))//false


// function order(words){
//     const result = []
//     words.split(' ').forEach((w, ind, arr)=> w.split('').forEach(s =>  {
//         if(+s % 1 === 0){result[+s - 1] = w}
//     }))
//     return result.join(' ')
// }
// console.log(order("is2 Thi1s T4est 3a"))//"Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//"Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order(""))//""


// function tribonacci(signature,n){
//     if (n === 0) return []
//     if(n === 1) return [signature[0]]
//     if(n === 2) return [signature[0], signature[1]]
//     for (let i = 3; signature.length < n; i++){
//         signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
//     }
//     return  signature
// }
// console.log(tribonacci([1,1,1], 10))// [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0,0,1], 10))// [0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0,1,1], 10))// [0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1,0,0], 10))// [1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0,0,0], 10))// [0,0,0,0,0,0,0,0,0,0]
// console.log(tribonacci([1,2,3], 10))// [1,2,3,6,11,20,37,68,125,230]
// console.log(tribonacci([1,1,1],  2))// [1]
// console.log(tribonacci([300,200,100], 0))// []


// const uniqueInOrder = function(iterable){
//     if(!iterable){return []}
//     const result = [iterable[0]]
//     const arr = typeof iterable === 'string'? iterable.split('') : iterable
//     arr.forEach((i) => {
//         if(result[result.length - 1] !== i){
//             result.push(i)
//         }
//     })
//     return result
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder([1,2,2,3,3]))
// console.log(uniqueInOrder(undefined))


// function isPangram(string){
//     const map = [...new Set(string.toLowerCase().split(''))].filter(s => s && s.charCodeAt() >= 97 && s.charCodeAt() <= 122)
//     return map.length === 26
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log(isPangram("This is not a pangram."))


// decodeMorse = function(morseCode){
//     const arrWords = morseCode.trim().split('   ')
//     return  arrWords.map(w => w.split(' ')).map(w => w.map(s => MORSE_CODE[s]).join('')).join(' ')
// }
//
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
// console.log(decodeMorse('   .... . -.--   '))


// function digPow(n, p){
//     let stringN = n.toString()
//     let number = 0
//     for(let i = 0; i + 1 <= stringN.length; i++ ){
//         number += (+(stringN[i]))**(p + i)
//     }
//     return number % n ? -1 :  number / n
// }
// console.log(digPow(89, 1))
// console.log(digPow(92, 1))
// console.log(digPow(46288, 3))


// function findEvenIndex(arr){
//     let result = -1
//     for(let i = 0; i<=arr.length; i++){
//         const startArr = arr.slice(0, i)
//         const endArr = arr.slice(i + 1, arr.length)
//         if(startArr.reduce((a, b) => a + b, 0) === endArr.reduce((a, b) => a + b, 0)){
//             result = i
//             break
//         }
//     }
//     return result
// }
// console.log(findEvenIndex([1,2,3,4,3,2,1]))//3
// console.log(findEvenIndex([1,100,50,-51,1,1]))//1
// console.log(findEvenIndex([1,2,3,4,5,6]))//-1
// console.log(findEvenIndex([20,10,30,10,10,15,35]))//3
// console.log(findEvenIndex([0,0,0,0,0]))//3


// function pigIt(str){
//     const wordsArr = str.split(' ')
//     return  wordsArr.map(w => w.toLowerCase().charCodeAt() >= 97 && w.toLowerCase().charCodeAt() <= 122 ? w.slice(1, w.length) + w.slice(0,1) + 'ay': w).join(' ')
// }
// function pigIt(str){
//     const wordsArr = str.split(' ')
//     return  wordsArr.map(w => console.log(w[0].charAt())).join(' ')
// }
// console.log(pigIt('Pig latin is cool'))//'igPay atinlay siay oolcay'
// console.log(pigIt('This is my string'))//'hisTay siay ymay tringsay'
// console.log(pigIt('Hello world !'))// elloHay orldway !


// function sortArray(array) {
//     const odd = array.filter(n => n % 2 !== 0).sort((a, b) => a - b)
//     let ind = 0
//     return array.reduce((acc, curr) => {
//         if (curr % 2){
//             acc.push(odd[ind])
//             ind++
//         }else {
//             acc.push(curr)
//         }
//         return acc
//     },[])
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]))//[1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0]))//[1, 3, 5, 8, 0]
// console.log(sortArray([]))//[]
// console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]))//[ 1, 3, 2, 8, 5, 4, 11 ]
// console.log(sortArray([ -29, -41, 1, -46, 33 ]))//[ -41, -29, 1, -46, 33 ]


// function maxRot(n) {
//     const stringN = n.toString()
//     const arrN = [stringN]
//     for(let i = 0; i < stringN.length - 1; i++){
//             const newStingN = arrN[i].slice(0, i) + arrN[i].slice(i + 1) + arrN[i][i]
//             arrN.push(newStingN)
//     }
//     return  Math.max(...arrN.map(n => Number(n)))
// }
// //56789 -> 6 7895 -> 68 957 -> 685 79 -> 6859 (7)
// // 0         1         2           3         4
//
// console.log(maxRot(56789))//68957
// console.log(maxRot(38458215))//85821534
// console.log(maxRot(195881031))//988103115
// console.log(maxRot(896219342))//962193428
// console.log(maxRot(69418307))//94183076


// function findUniq(arr) {
//     const map = [...new Set(arr)]
//     const c = {
//         [0]: 0,
//         [1]: 0
//     }
//     for(let i = 0; i < 3; i++){
//         arr[i] === map[0]
//             ? c[0] = c[0] + 1
//             : c[1] = c[1] + 1
//     }
//     return c[0] > c[1] ? map[1] : map[0]
// }
// console.log(findUniq([ 1, 0, 0 ]))//1
// console.log(findUniq([ 0, 1, 0 ]))//1
// console.log(findUniq([ 0, 0, 1 ]))//1
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))//2
// console.log(findUniq([ 1, 1, 2, 1, 1 ]))//2
// console.log(findUniq([ 3, 10, 3, 3, 3 ]))//10


// function moveZeros(arr) {
//     let zeroCounter = 0
//     const newArr = arr.filter(i => {
//         if(i === 0){
//             zeroCounter++
//         }
//         return i !== 0
//     })
//     while(newArr.length < arr.length){
//         newArr.push(0)
//     }
//     return newArr
// }
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))//[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]


// function humanReadable (seconds) {
//     let hours = Math.floor(seconds / 3600);
//     let minutes = Math.floor((seconds % 3600) / 60);
//     let secs = seconds % 60;
//
//     hours = String(hours).padStart(2, '0');
//     minutes = String(minutes).padStart(2, '0');
//     secs = String(secs).padStart(2, '0');
//
//     return `${hours}:${minutes}:${secs}`
// }
// console.log(humanReadable(      0))// '00:00:00'
// console.log(humanReadable(     59))// '00:00:59'
// console.log(humanReadable(     60))// '00:01:00'
// console.log(humanReadable(     90))// '00:01:30'
// console.log(humanReadable(   3599))// '00:59:59'
// console.log(humanReadable(   3600))// '01:00:00'
// console.log(humanReadable(  45296))// '12:34:56'
// console.log(humanReadable(  86399))// '23:59:59'
// console.log(humanReadable(  86400))// '24:00:00'
// console.log(humanReadable( 359999))// '99:59:59'


// function towerBuilder(nFloors) {
//     let tower = [];
//     for (let i = 1; i <= nFloors; i++) {
//         let stars = '*'.repeat(2 * i - 1);
//         let spaces = ' '.repeat(nFloors - i);
//         tower.push(spaces + stars + spaces);
//     }
//     return tower;
// }
//
// console.log(towerBuilder(1))// ["*"]);
// console.log(towerBuilder(2))// [" * ","***"]);
// console.log(towerBuilder(3))// ["  *  "," *** ","*****"]
//
// // 1-1 2-3 3-5 4-7 5-9 6-11 (2 * n - 1)
// //
// // [
// //   "     *     ",
// //   "    ***    ",
// //   "   *****   ",
// //   "  *******  ",
// //   " ********* ",
// //   "***********"
// // ]


// function findMissingLetter(array) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const necessary = alphabet.slice(alphabet.indexOf(array[0].toLowerCase()))
//     for(let i = 0; i < alphabet.length; i++){
//         if(array[i].toLowerCase() !== necessary[i]){
//             if(array[i].toUpperCase() === array[i] ){
//                 return necessary[i].toUpperCase()
//             }
//             return necessary[i]
//         }
//     }
// }
// console.log(findMissingLetter(['a','b','c','d','f'])) // 'e'
// console.log(findMissingLetter(['O','Q','R','S'])) // 'P'


// snail = function(array) {
//     let result = []
//
//     while (array.length){
//         result = result.concat(array.shift())
//
//         for(let i = 0; i < array.length; i++){
//             result.push(array[i].pop())
//         }
//
//         if(array.length){
//             result = result.concat(array.pop().reverse())
//         }
//
//         for(let i = array.length - 1; i >= 0; i--){
//             result.push(array[i].shift())
//             console.log(999)
//         }
//     }
//     return result
// }
//
// console.log(snail([[]]))// []
// console.log(snail([[1]]))// [1]
// console.log(snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
// // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

// function high(str){
//     const arrStr = str.split(' ')
//     const arrCount = []
//     for(let i = 0; i < arrStr.length; i++){
//         let count = 0
//         for(let q = 0; q < arrStr[i].length; q++){
//             count += arrStr[i][q].charCodeAt() - 96
//         }
//         arrCount.push(count)
//     }
//
//     return arrStr[arrCount.indexOf(Math.max(...arrCount))]
// }
//
// console.log(high('man i need a taxi up to ubud'))// 'taxi');
// console.log(high('what time are we climbing up the volcano'))// 'volcano');
// console.log(high('take me to semynak'))// 'semynak');
// console.log(high('aa b'))// 'aa');
// console.log(high('b aa'))// 'b');
// console.log(high('bb d'))// 'bb');
// console.log(high('d bb'))// 'd');
// console.log(high('aaa b'))// 'aaa');


// function deleteNth(arr,n){
//     let obj = {}
//     return arr.filter(num => {
//         if(!obj[num]){
//             obj[num] = 0
//         }
//         obj[num] += 1
//         return obj[num] <= n
//     })
// }
//
// console.log(deleteNth([20,37,20,21], 1))// [20,37,21])
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))// [1, 1, 3, 3, 7, 2, 2, 2])
// console.log(deleteNth([12,39,19,39,39,19,12], 1))// [12, 39, 19])


// function countSmileys(arr) {
//     const smile = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
//     return  arr.reduce((acc, cur)=>{
//         if(smile.indexOf(cur) >= 0){
//           return ++acc
//         }
//         return acc
//     }, 0)
// }
//
// console.log(countSmileys([]                             ))// 0
// console.log(countSmileys([':D',':~)',';~D',':)']        ))// 4
// console.log(countSmileys([':)',':(',':D',':O',':;']     ))// 2
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))// 1


// function reverseWords(str) {
//     if (!str.length) {
//         return str
//     }
//     return str.split(' ').reverse().join(' ')
// }
// console.log(reverseWords("hello world!"))//"world! hello"
// console.log(reverseWords("yoda doesn't speak like this"))//"this like speak doesn't yoda"
// console.log(reverseWords("foobar"))//"foobar"
// console.log(reverseWords("kata editor"))//"editor kata"
// console.log(reverseWords("row row row your boat"))//"boat your row row row"
// console.log(reverseWords(""))//""


// function points(games) {
//     return games.reduce((acc, carr) => {
//         const [x, y] = carr.split(":").map(n => +n)
//         const points = x > y ? 3 : x === y ? 1 : 0
//         return acc + points
//     }, 0)
// }
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))// 30
// console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))// 10
// console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))// 0
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]))// 15
// console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]))// 12


// function dirReduc(directions) {
//     const opposites = {
//         "NORTH": "SOUTH",
//         "SOUTH": "NORTH",
//         "EAST": "WEST",
//         "WEST": "EAST"
//     };
//
//     let stack = [];
//     for (let dir of directions) {
//         if (stack.length > 0 && stack[stack.length - 1] === opposites[dir]) {
//             stack.pop();
//         } else {
//             stack.push(dir);
//         }
//     }
//     return stack;
// }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))//["WEST"]
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))//["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))//[]


// function rgb(r, g, b) {
//     return ([r, g, b].map(col =>{
//         if(col < 0){
//             col = 0
//         } else if(col > 255){
//             col = 255
//         }
//         const hex = col.toString(16).toUpperCase()
//         return hex.length === 1 ? "0" + hex : hex;
//     }).join(''))
// }
// console.log(rgb(0,   0,   0))//'000000'
// console.log(rgb(0,   0, -20))//'000000'
// console.log(rgb(300, 255, 255))//'FFFFFF'
// console.log(rgb(173, 255,  47))//ADFF2F'


// function formatDuration(seconds) {
//     if (seconds === 0) return "now";
//
//     const units = [
//         { label: "year", value: 365 * 24 * 60 * 60 },
//         { label: "day", value: 24 * 60 * 60 },
//         { label: "hour", value: 60 * 60 },
//         { label: "minute", value: 60 },
//         { label: "second", value: 1 }
//     ];
//
//     let result = [];
//
//     for (const unit of units) {
//         const unitValue = Math.floor(seconds / unit.value);
//         if (unitValue > 0) {
//             result.push(unitValue + ' ' + (unitValue > 1 ? unit.label + 's' : unit.label));
//             seconds -= unitValue * unit.value; // Subtract the processed seconds
//         }
//     }
//
//     const len = result.length;
//     if (len === 1) {
//         return result[0];
//     } else if (len === 2) {
//         return result.join(' and ');
//     } else {
//         return result.slice(0, len - 1).join(', ') + ' and ' + result[len - 1];
//     }
// }
// console.log(formatDuration(62));     // "1 minute and 2 seconds"
// console.log(formatDuration(3662));   // "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(31556952)); // "1 year"
// console.log(formatDuration(1))// "1 second"
// console.log(formatDuration(62))// "1 minute and 2 seconds"
// console.log(formatDuration(120))// "2 minutes"
// console.log(formatDuration(3600))// "1 hour"
// console.log(formatDuration(3662))// "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(2380891))// '27 days, 13 hours, 21 minutes and 31 seconds'
// console.log(formatDuration(3723000))// '43 days, 2 hours and 10 minutes'


// function getGrade(s1, s2, s3) {
//     const medium = (s1 + s2 + s3 )/ 3
//     if(90 <= medium && medium <= 100) return 'A'
//     if(80 <= medium && medium < 90) return 'B'
//     if(70 <= medium && medium < 80) return 'C'
//     if(60 <= medium && medium < 70) return 'D'
//     if(0 <= medium && medium < 60) return 'F'
// }
// console.log(getGrade(95, 90, 93))// 'A'
// console.log(getGrade(100, 85, 96))// 'A'
// console.log(getGrade(92, 93, 94))// 'A'
// console.log(getGrade(70, 70, 100))// 'B'
// console.log(getGrade(82, 85, 87))// 'B'
// console.log(getGrade(84, 79, 85))// 'B'
// console.log(getGrade(89, 89, 90))// 'B'
// console.log(getGrade(70, 70, 70))// 'C'
// console.log(getGrade(75, 70, 79))// 'C'
// console.log(getGrade(60, 82, 76))// 'C'
// console.log(getGrade(65, 70, 59))// 'D'
// console.log(getGrade(66, 62, 68))// 'D'
// console.log(getGrade(58, 62, 70))// 'D'
// console.log(getGrade(44, 55, 52))// 'F'
// console.log(getGrade(48, 55, 52))// 'F'
// console.log(getGrade(58, 59, 60))// 'F'


// function sumArray(array) {
//     if(!array || array.length < 3) return 0
//     const max = Math.max(...array)
//     const min = Math.min(...array)
//     const sum = array.reduce((acc, curr) => acc + curr)
//     return sum - max - min
// }
// console.log(sumArray(null))//                     , 0 );
// console.log(sumArray([ ]))//                      , 0 );
// console.log(sumArray([ 3 ]))//                    , 0 );
// console.log(sumArray([ 3, 5 ]))//                 , 0 );
// console.log(sumArray([ 6, 2, 1, 8, 10 ]))//       , 16 );
// console.log(sumArray([ 0, 1, 6, 10, 10 ]))//      , 17 );
// console.log(sumArray([ -6, -20, -1, -10, -12 ]))//, -28 );
// console.log(sumArray([ -6, 20, -1, 10, -12 ]))//  , 3 );


// function solution(string) {
//     if (!string) {
//         return string
//     }
//     return string.split('').map(l => l.charCodeAt() >= 65 && l.charCodeAt() <= 90 ? ` ${l}` : l).join('')
// }
// console.log(solution(""))// ""
// console.log(solution("camelCasing"))// "camel Casing"
// console.log(solution("camelCasingTest"))// "camel Casing Test"


// function findNb(m) {
//     let n = 0
//     let sum = 0
//     while (sum < m){
//         n++
//         sum += Math.pow(n, 3)
//     }
//     return sum === m ? n : -1
// }
// console.log(findNb(4183059834009))// 2022
// console.log(findNb(24723578342962))// -1
// console.log(findNb(135440716410000))// 4824
// console.log(findNb(40539911473216))// 3568
// //1^3 + 2^3 + 3^3, ... + n^3 = m


// function longestConsec(strarr, k) {
//     if(k <= 0 || !strarr.length || strarr.length < k) return ''
//     let arr = []
//     let el = ''
//     for (let i = 0; i < strarr.length; i++){
//         for(let q = 0; q < k; q++){
//             if(strarr[i + q]){
//                 el += strarr[i + q]
//             }
//         }
//         arr.push(el)
//         el = ''
//     }
//     return arr.reduce((acc, curr)=> {
//        return  curr.length > acc.length ? curr : acc
//     })
// }
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))// "abigailtheta"
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))// "oocccffuucccjjjkkkjyyyeehh"
// console.log(longestConsec([], 3))// "")
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))// "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))// "wlwsasphmxxowiaxujylentrklctozmymu"
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))// "")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))// "ixoyx3452zzzzzzzzzzzz"
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))// ""
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))// ""