console.log('Course--Object-Oriented-JavaScript');

let userOne = {
    email : 'ryu@ninjas.com',
    name : 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
}

console.log(userOne);

userOne.name = 'Mario';

console.log(userOne);

userOne['name'] = 'Anwar Moazam';

console.log(userOne);

let phone = 'Mobile Number';

userOne[phone] = 9785355186;

console.log(userOne);