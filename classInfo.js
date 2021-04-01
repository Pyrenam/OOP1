// De objet literal a classe
class Human{
 constructor(firstName,lastName,age,languange){
   this.firstName = firstName
   this.lastName = lastName
   this.age = age
   this.languange = languange
 }
}

//methode printInfo

printInfo(){
  console.log(`first name: ${this.firstName}`)
  console.log(`last name : ${this.lastName}`)
  console.log(`age:${this.age}`)
  console.log(`languange:${this.language}`)
  
  Human.languange.forEach(element => {
    console.log(`\t${element}`)
    
  })
}
  //methode canVote (true false)
canVote(this.Human){
  if(this.Human.age>18){
    return true
  }else{
    return false
  }
}

canVote(bob)
canVote(charlie)
canVote(alice)

//methode mostSkilledDev