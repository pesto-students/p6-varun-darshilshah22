const all = require('./calculation');
 
describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   var result = all.sum(1,2)
   expect(result).toBe(3);
 });
 
 test("subtracting 2 from 10 should return 8", () => {
   var result = all.diff(10,2)
   expect(result).toBe(8);
 });
 
 test("multiplying 2 and 8 should return 16", () => {
   var result = all.product(2,8)
   expect(result).toBe(16);
 });
})