console.log('Course--Object-Oriented-JavaScript');

console.log('Lesson 5');

class User{
    constructor(userEmail,userName){
        this.email = userEmail;
        this.name = userName;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

let userOne = new User('ryu@ninjas.com','Ryu');
let userTwo = new User('yoshi@mariokorp.com','Yoshi');

console.log(userOne);
console.log(userTwo);

console.log('Lesson 6');

userOne.login();
userTwo.login()
