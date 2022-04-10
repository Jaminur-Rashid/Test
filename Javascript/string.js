function checkIncludes(str, target){
    return str.includes(target)
}
let userName = 'Jaminur rashid test   '
let userLength = userName.length
userName = userName.trim()
let newUser = userName.replace('test', 'Tarun')
let splitedUser = newUser.split(' ') // split by " "
console.log(userName, 'Length : ', userName.length)
console.log(userName.slice(8, 14))
console.log(newUser)
console.log(splitedUser, 'Splitted user type ', typeof(splitedUser))
console.log(`The string "rashid " ${checkIncludes(userName, 'rashid') ? 'is' : 'is not '} in the ${userName}`)


