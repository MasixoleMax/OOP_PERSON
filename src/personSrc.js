class Person {
    constructor (name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello(){
        return 'Hello, my name is ' + this.name + ' and I am a ' + this.age + ' year old ' +  this.gender + '.' + ' My interests are ' + this.interests + '.' 
    }
}

let max = new Person ('Max', 25, 'Male', ["playing soccer and coding"]);
let masixole = new Person ('Yoliswa', 26, 'female', ["housekeeping, playing tennis and singing"]);

console.log(max.hello());
console.log(masixole.hello());

