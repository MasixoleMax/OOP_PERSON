
describe("the Person class as a new object", function() {
    let max = new Person ('Max', 25, 'Male', ["playing soccer and coding"]);
    it ("should be able to pass the instantiated arguments as values of the new object", function() {
  
       expect(max.hello('Max', 25, 'Male', ["playing soccer and coding"])).toBe('Hello, my name is Max and I am a 26 year old Male. My interests are playing soccer and coding.');
    })
})
