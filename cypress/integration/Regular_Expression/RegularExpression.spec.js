





let sentence = "I amchinmayand I am new to javscript My fullname is Chinmay deshpande chinmay"
let reg = /chinmay/gi // literal cHINMaY
//let regA = /chinmat/i
// let aaa = reg.exec(sentence)
// let bbb = reg.exec(sentence)
// let ccc = reg.exec(sentence)
// let ddd = reg.exec(sentence)
// let eee = reg.exec(sentence)
// console.log(aaa)
// console.log(bbb)
// console.log(ccc)
// console.log(ddd)
// console.log(eee)

let resultA = reg.exec(sentence)
while(resultA){
    console.log(resultA)
    resultA = reg.exec(sentence)
    
}

let hello = reg.test(sentence)
console.log(hello)


// search , match , replace  ==> string


let subjects = "Marathi Hindi English English english  ENGLISH English"
let reg2 = /English/gi
let yu = subjects.search(reg2)
console.log(yu)

let uuu = subjects.match(reg2)
console.log(uuu)


let iii = subjects.replace(reg2,"Hindi")
console.log(iii)









//chinmay-deshpande-7709192441

// d = "Mcd 89939028349328498320948902384903829489023849023849823904829384092384238"

// cy.get(path[d^="Mcd *"])

// localhost:8000/username/chinmay010
// localhost:8000/username/*
// let d = "chinmay" //===> string 
// let e = new String("chinmay") // ===> with object
// let g = [1,2,3,4]
// let ga = new Array(4)
// let obectA = {
//     age:10,
//     roll:23
// }
// let a = new Object()
//cy.contans('/username/') 



let js = "I am learning javascript , i like JAVASCRIPT"

let regExp = /javascript/gi

let r = regExp.exec(js)
let ra = regExp.exec(js)
console.log(r)
console.log(ra)

let aaaaaa = regExp.test(js)
console.log(aaaaaa)


// string , search , match , replace

let rrraa = js.search(regExp)
console.log(rrraa)

let rrrrr = js.match(regExp)
console.log(rrrrr)


let ffy = js.replace(regExp,"ABC")
console.log(ffy)


/* tranverse --------------  >*/ 

// --->

