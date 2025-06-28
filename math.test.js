const isPrime  = require("./math");

it("returns false if a number is smaller than 1",()=>{
expect(isPrime(0)).toBe(false)
})
it("returns true for prime numbers",()=>{
    expect(isPrime(7)).toEqual(true);
})
it("returns false if it divides by 2",()=>{
    expect(isPrime(20)).toEqual(false);
})