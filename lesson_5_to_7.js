console.log('Course--Object-Oriented-JavaScript');

console.log('Lesson 5');

class User{
    constructor(userEmail,userName){
        this.email = userEmail;
        this.name = userName;
        this.score = 0;
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

console.log(userOne);
console.log(userTwo);

console.log('Lesson 6');

userOne.login();
userTwo.logout()
userOne.score;
console.log(userOne.email,'score is : ',userOne.score);
userOne.updateScore()
userOne.updateScore()
userOne.updateScore()
userOne.updateScore()

console.log(userTwo.email,'score is : ',userTwo.score);
userTwo.updateScore();
userTwo.updateScore();

// method chaining by return this in method
userOne.login().updateScore().updateScore().logout();