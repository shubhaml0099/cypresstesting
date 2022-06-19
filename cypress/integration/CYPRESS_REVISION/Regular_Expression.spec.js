// // // new
// // //let fullName = new String("chinmay")
// // // normal 
// // // using regEx object

// // // object literal

// // let chinmay = {
// //     fullName:"chinmay deshpande",
// //     age:31,
// //     skills:["python","javascript","python3"]
// // }

// // let amol = {
// //     fullName:"amol rao",
// //     age:30,
// //     skills:["python","sql","wordpress"]
// // }

// // // template .. blue print to create the objects 


// // // setting the properties outside the class


// // class Person {

// //     fullName = undefined
// //     age = undefined
// //     skills = undefined

// // }

// // let amolOne = new Person()
// // let chinmayTwo = new Person()
// // console.log(amolOne)

// // // update 
// // amolOne.age = 12
// // amolOne.skills = ["python","javascript"]
// // amolOne.fullName = "amol rao"
// // console.log(amolOne)

// // // delete amolOne.age 
// // // amolOne.language = " marathi"
// // // console.log(amolOne.skills)
// // console.log(chinmayTwo)
// // chinmayTwo.age = 23
// // chinmayTwo.skills = ["marathi","hindi","marathi"]
// // chinmayTwo.fullName = "chinmay2 deshpande"
// // console.log(chinmayTwo)

// // // setting the properties at the time of object creation

// // class Person2 {
// //     constructor(fn,age,skls){
        
// //         this.fullName = fn
// //         this.age = age
// //         this.skills = skls
// //         // return keyword is not used 
// //         // they always return object
// //     }

// // }

// // let amol3 = new Person2("amol3",34,["python","msbi"])
// // let chinmay3 = new Person2("chinmay",33,["html","css"])
// // console.log(amol3)
// // console.log(chinmay3)
// // //                      0                            1                           2
// // let students = [new Person2("a",23,["html"]),new Person2("b",34,["css"]),new Person2("c",33,["css","java"])]
// // //console.log(students[0])

// // students.forEach(function(el){
// //     for(let key in el){
// //         console.log(key,el[key])
// //     }
// // })

// // students.forEach(function(el){
// //     el.language = "Marathi"
// // })
// // console.log(students)

// // // using get and set method


// // class Person4 {

// //     setAge(ag){
// //         this.age = ag
// //     }

// //     setRoll(rl){
// //         this.rollNumber = rl
// //     }

// //     setFullName(fn){
// //         this.fullName = fn
// //     }

// // }

// // let amol5 = new Person4()
// // console.log(amol5)
// // amol5.setFullName("chinmay")
// // amol5.setRoll(12)
// // amol5.setAge(23)
// // console.log(amol5)

// // // setting the value outside the class
// // // using constructor at the time of object creation 
// // // using set function

// // class Bank {

// //     constructor(accName,accNo,bal){
// //         this.fullName = accName
// //         this.accountNumber = accNo
// //         this.bal = bal

// //     }
// //     depoist(amount){
// //         this.bal = this.bal + amount
// //     }

// //     withdrawl(amount){
// //         this.bal = this.bal - amount
// //     }

// // }

// // let poorva = new Bank("poorva",123,10000)
// // console.log(poorva)
// // poorva.depoist(200000)
// // console.log(poorva['bal'])
// // console.log(poorva.bal)
// // poorva.withdrawl(10000)
// // console.log(poorva.bal)



// /* -----regular---------------- */


// let h = "I am learning javascript and i love Javascript javascript"
// let reg = /javascript/gi
// // let hay = reg.exec(h)
// // let hae = reg.exec(h)
// // let haf = reg.exec(h)
// // let hal = reg.exec(h)
// // console.log(hay)
// // console.log(hae)
// // console.log(haf)
// // console.log(hal)
// let result = reg.exec(h)
// while(result !== null){
//     console.log(result)
//     result = reg.exec(h)
// }

// //['JAVASCRIPT','javascript','JAvascript']

// let rrrr = reg.test(h)
// console.log(rrrr)

// // replace , search , match


// //   http:localhost:8080/*
// // ^ $

// let j = "IanetoPythonand,iamlearningpython..PYTHON PYthon"
// let reg2 = /python/gi

// let rrr = j.search(reg2)
// console.log(rrr)

// let uuu = j.match(/python/gi)
// console.log(uuu)

// let yyy = j.replace(reg2,"html")
// console.log(yyy)


// //string -----------------------//





// let regex = /javascript/ig
// let str = "I am learning javscript , i am new to Javascript"


// if(regex.test(str)){
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }


























// /* Day ------------------------------------------------------*/
// /* section */

// // metachracters in regular expression
// //let regex = /javascript/ig 
// //let regexOne = /^java/ig     //  regex will match if string starts with pattern
// //regexOne = /Javascript$/ig   // regex will match if string starts with pattern
// //let str = "Java am learning javascript , i am new to Javascript"

// // if(regexOne.test(str)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }


// // program2

// //let str2 = "learning"
// //let regex3 = /l.ar./ // matches any one character // literal
// //regex3 = /le*/ // either 0 or many characters


// // if(regex3.test(str2)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }

// // program 3
// // let str3 = "mi"
// // let regex4 = /a?mit?/

// // if(regex4.test(str3)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }
// // program 4

// // let str4 = "har*kesh"
// // let regex5 = /har\*kesh/

// // if(regex5.test(str4)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }


// // program 7

// // let str4 = "rnm"
// // let regex5 = /r[a-z]m/

// // if(regex5.test(str4)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }

// // let str4 = "rcm"
// // let regex5 = /r[acvb]m/

// // if(regex5.test(str4)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }

// // let str4 = "r3m"
// // let regex5 = /r[0-9]m/

// // if(regex5.test(str4)){
// //     console.log('pass')
// // }
// // else {
// //     console.log('fail')
// // }













// /*Revision */



// // exec()
// // let aaa = regex.exec(str)
// // console.log(aaa)

// // let bbb = regex.exec(str)
// // console.log(bbb)

// // let ccc = regex.exec(str)
// // console.log(ccc)


// // test()



















// // string methods with regular expression 
// // // string match search and replace
// // let regex2 = /chinmay/gi
// // // search()
// // let str2 = "I am chinmay , my full name is cHINmay deshpande and i am learning regular"
// // console.log(str2.search(regex2))
// // // match()
// // console.log(str2.match(regex2))
// // //replace
// // let hhh =  str2.replace(regex2,"tanmay")
// // console.log(hhh)











// let k = " i am learning jAvascriptjaVascriptjavascript"
// console.log(typeof k)
// let regOne = /Java/gi


// // let a = regOne.exec(k)
// // console.log(a)

// // let b = regOne.exec(k)
// // console.log(b)

// // let c = regOne.exec(k)
// // console.log(c)

// // let d = regOne.exec(k)
// // console.log(d)


// // test()
// if(regOne.test(k)){
//     console.log("pass")
// }
// else {
//     console.log('fail')
// }

// // string ==>
// let h =  "I am am am new to javascript Am goodam with logic"
// let regTwo = /am/gi

// let kay = h.search(regTwo)
// console.log(kay)

// let hjk = h.match(regTwo)
// console.log(hjk.length)

// let kll = h.replace(regTwo,"pm")
// console.log(kll)


// ///------------------------------------/

// // Metacharcters

// let kat = "apple a day keeps doctor away"
// regOne = /^Apple/gi
// regTwo = /ay$/gi



// if(regOne.test(kat)){
//     console.log("pass")
// }
// else {
//     console.log('fail')
// }

// if(regTwo.test(kat)){
//     console.log("pass")
// }
// else {
//     console.log('fail')
// }


// let fruit = "rat"
// let regFour =  /.at/ 

// if(regFour.test(fruit)){
//     console.log("pass")
// }
// else {
//     console.log('fail')
// }

// let vegetables =  "Tomato"
// let regFive = /to*/ // zero or any number  of characters

// if(regFive.test(vegetables)){
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

// let j = "apple"
// let regSix = /ap?p?le/

// if(regSix.test(j)){
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

// // groups



// let n = "mabt"
// let regSeven = /m[ab][ab]t/
// console.log(regSeven.test(n))


// let na = "mrAt"
// let regEight = /m[a-z][0-9]t/
// console.log(regEight.test(na))


// let nat = "mrbt"
// let regNine = /m[a-z][0-9abc]t/
// console.log(regNine.test(nat))

// /*************/


// // regular Expresion by me//

// // regular expression methods   1> .exec()    2> .test()

// let string = "i am shubham learning java scripts with java cypress by chinmay sir"
// let reg1 = /java/gi

//  let a1 = reg1.exec(string)
//  console.log(a1)

//  let a2 = reg1.test(string)
//  console.log(a2)

//  // regular Expression on string  methods 1> search()   2>match()   3>replace()

//  //  search()

//  let string1 = "i am shubham learning java scripts with java cypress by chinmay sir"
//  let reg2 = /java/gi

//   let a3 =string1.search(reg2)
//   console.log(a3)

//   let a4 =string1.search(reg2)
//   console.log(a4)

// // match()

//   let a5 =string1.match(reg2)
//   console.log(a5)
  
//   let a6 =string1.match(reg2)
//   console.log(a6.length)


// // replace 
// let a7 =string1.replace(reg2,'phython')
// console.log(a7)


// // now some regular expression methods //


// let string2 = "i am shubham learning java scripts with java cypress by chinmay sir"
// let reg3 = /java/gi



// // tarting with string check by regular expression 

// let reg4 = /^i/gi

// let r1 =reg4.test(string2)
// console.log(r1)


// // End with string check by regular expression 

// let reg5 = /r$/gi

// let r2 =reg5.test(string2)
// console.log(r2)

// // regular expression  by using .  


let fruit = "rat"
let regFour =  /.at/   // before . any value or string no matter but after dot values should be mandetary 

if(regFour.test(fruit)){
    console.log("pass")
}
else {
    console.log('fail')
}


// // by *

let reg0 = / r*/      // after star * any value or string no matter but before * values should be mandetary 
let dd = reg0.test(fruit)
console.log(dd) 


// // groups



// let n = "mabt"
// let regSeven = /m[ab][ab]t/             // one group []  for one degit 
// console.log(regSeven.test(n))


// let na = "mrAt"
// let regEight = /m[a-z][0-9]t/           // we also give renge [0-9],[a-z] any other 
// console.log(regEight.test(na))


// let nat = "mrbt"
// let regNine = /m[a-z][0-9abc]t/
// console.log(regNine.test(nat))

// // /*************/


// describe('run string in cypress',()=>{
//     it('string msg ',()=>{
  
//        cy.log( 'hello shubham')
//     })
// })