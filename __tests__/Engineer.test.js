const Engineer = require("../lib/Engineer");

test("get Engineer's github username", () => {
  const engineer = new Engineer("alice", "11", "alice@email.com", "alice");

  expect(engineer.github).toEqual(expect.any(String));
});

test("get's role of Engineer", () => {
  const engineer = new Engineer("alice", "11", "alice@email.com", "alice");

  expect(engineer.getRole()).toEqual(expect.stringContaining("engineer"));
});
