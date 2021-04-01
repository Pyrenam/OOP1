// printInfo objet
const alice  = {
  firstName:'Alice',
  lastName: 'Liddell',
  age: 28
  language: ['javasript', 'C++','ruby']
}

const bob  = {
  firstName:'Bob',
  lastName : 'Lemon',
  age: 30
  Language: ['javasript','ruby'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8
  language: ['javasript','C++','ruby','python'],
}

//printInfo fonction
const printInfo = (person) =>{

console.log(`first name: ${person.firstName}`)
console.log(`last name : ${person.lastName }`)
console.log(`age:${person.age}`)
console.log(`languange:${person.language}`)  
}
printInfo (bob)
printInfo(alice)
printInfo(charlie)


// canVote (true false)

const canVote =(person)=>{
  if(person.age>18){
    return true
  }else{
    return false
  }
}
canVote(alice)
canVote(bob)
canVote(charlie)


//mostSkilledDev