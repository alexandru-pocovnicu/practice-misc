const isPrime  = require("./math");

it("returns false if a number is smaller than 1",()=>{
expect(isPrime(0)).toBe(false)
})
it("returns true for prime numbers",()=>{
    expect(isPrime(7)).toBe(true);
})