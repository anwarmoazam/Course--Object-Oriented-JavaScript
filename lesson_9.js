console.log('Lesson 9');

function User(userEmail,userName){
    this.email = userEmail;
    this.name = userName;
    this.online = false;
    this.score = 0;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.name,'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.name,'has logged out');
}

User.prototype.increseScore = function(){
    this.score++;
}

let userOne = new User('anwar.moazam@hotmail.com','Anwar Moazam');
let userTwo = new User('pali_idsp@yahoo.com','IDSP');

userOne.login();
console.log(userOne);
userOne.increseScore();
userOne.logout();
console.log(userOne);
console.log(userTwo);