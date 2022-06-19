


// not understanding 
//  ========= sunil problem  === == ==  

let students = [{ fname: 'sunil chougale' },
    { fname: 'anil chougale' },
    { fname: 'sunil chavan' },
    { fname: 'pratik shinde' },
    { fname: 'sunil ahashti' },
    { fname: 'sunita chougale' }
]

students.forEach(function (el) {
    let un = el.fname.split(' ').reduce(function (acc, el) {
        return acc + el[0]
    }, '')
    un = isUnique(un)
    el.userName = un
})
console.log(students)

function isUnique(userName) {
    for (i = 0; i < students.length; i++) {
        if (students[i].userName) {
            if (students[i]['userName'] == userName) {
                let update = userName + userName
                return isUnique(update)
            }
        } else {
            return userName
        }
    }
}