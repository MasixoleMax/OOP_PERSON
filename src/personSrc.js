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

let max = new Person ('Max', 26, 'Male', ["playing soccer and coding"]);
let masixole = new Person ('Yoliswa', 30, 'female', ["playing tennis, housekeeping and sleeping"]);


console.log(max.hello());
console.log(masixole.hello());

