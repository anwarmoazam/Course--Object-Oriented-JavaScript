console.log('Lesson 9');

let users = [];

function User(userEmail,userName){
    this.email = userEmail;
    this.name = userName;
    this.online = false;
    this.score = 0;
    users.push(this);
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

function Admin(...args){
    User.apply(this,args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.name != u.name;
    });
}

let userOne = new User('anwar.moazam@hotmail.com','Anwar Moazam');
let userTwo = new User('pali_idsp@yahoo.com','IDSP');
let adminOne = new Admin('idsp.pali@gmail.com','Dr. Ankit');

userOne.login();
console.log(userOne);
userOne.increseScore();
userOne.logout();
console.log(userOne);
console.log(userTwo);

console.log(adminOne);
adminOne.login()
adminOne.logout()

console.log(users)
adminOne.deleteUser(userOne);
console.log(users)