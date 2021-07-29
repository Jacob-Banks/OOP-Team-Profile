const Manager = require("../lib/Manager");

test("get Manager's office username", () => {
  const manager = new Manager("alice", "11", "alice@email.com", "corner");

  expect(manager.office).toEqual(expect.any(String));
});

test("get's role of Manager", () => {
  const manager = new Manager("alice", "11", "alice@email.com", "corner");

  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
