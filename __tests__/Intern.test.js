const Intern = require("../lib/Intern");

test("get Intern's school ", () => {
  const intern = new Intern("alice", "11", "alice@email.com", "nascad");

  expect(intern.school).toEqual(expect.any(String));
});

test("get role of Intern", () => {
  const intern = new Intern("alice", "11", "alice@email.com", "nascad");

  expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});
