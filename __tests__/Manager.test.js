const Manager = require("../lib/Manager");
// test function
test("get Manager's office username", () => {
  const manager = new Manager("alice", "11", "alice@email.com", "corner");

  expect(manager.office).toEqual(expect.stringContaining("corner"));
});
// test function
test("get's role of Manager", () => {
  const manager = new Manager("alice", "11", "alice@email.com", "corner");

  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
