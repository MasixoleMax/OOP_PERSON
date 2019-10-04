
describe("the Person class as a new object", function() {

    let  max = new Person('Max', 25, 'Male', ["playing soccer and coding"]);
    let  masixole = new Person('Yoliswa', 26, 'female', ["housekeeping, playing tennis and singing"]);

    it ("should be able to pass the instantiated arguments as values of the new object", function() {
  
       expect(max.hello()).toBe('Hello, my name is Max and I am a 25 year old Male. My interests are playing soccer and coding.');
    });

    it ("should be able to pass the instantiated arguments as values of the new object", function() {
  
        expect(masixole.hello()).toBe('Hello, my name is Yoliswa and I am a 26 year old female. My interests are housekeeping, playing tennis and singing.');
     });
});
       expect(max.hello('Max', 25, 'Male', ["playing soccer and coding"])).toBe('Hello, my name is Max and I am a 26 year old Male. My interests are playing soccer and coding.');
    })
})
