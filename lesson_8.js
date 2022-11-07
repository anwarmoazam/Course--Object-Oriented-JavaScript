console.log('Course--Object-Oriented-JavaScript');

console.log('Lesson 5');

let users = [];

class User{
    constructor(userEmail,userName){
        this.email = userEmail;
        this.name = userName;
        this.score = 0;
        users.push(this);
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);       
        return this;
    }
}

let userOne = new User('ryu@ninjas.com','Ryu');
let userTwo = new User('yoshi@mariokorp.com','Yoshi');
let userThree = new User('anwar.moazam@hotmail.com','Anwar Moazam');
let userFour = new User('pali_idsp@yahoo.com','Sikandar Khan');

console.log('Lesson 6');

userOne.login();
userTwo.logout()
userOne.score;
console.log(userOne.email,'score is : ',userOne.score);
userOne.updateScore()

console.log(userTwo.email,'score is : ',userTwo.score);
userTwo.updateScore();

// method chaining by return this in method
userOne.login().updateScore().updateScore().logout();

console.log('Lesson 8 - Class Inheritence')

class Admin extends User{
    deleteUser(user){
        users = users.filter(u=>{
            return u.name != user.name;
        })
        console.log(user.name, 'is deleted successfully');
    }
}

let adminOne = new Admin('shaun@ninjas.com','Shoun');

console.log(users);

console.log(adminOne);

adminOne.deleteUser(userTwo);
// adminOne.deleteUser(userOne);

console.log(users);

function showUser(){
    for(let user of users){
        console.log(user);
    }
}

showUser()