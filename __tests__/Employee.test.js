const Employee = require("../lib/Employee");

test("create a employee object", () => {
  const employee = new Employee("Anna", "11", "Anna@email.com");

  expect(employee.name).toBe("Anna");
  expect(employee.id).toBe("11");
  expect(employee.email).toBe("Anna@email.com");
});

test("gets emplyee's name", () => {
  const employee = new Employee("Anna", "11", "Anna@email.com");

  expect(employee.getName()).toEqual(expect.stringContaining("Anna"));
});

test("get employee's id", () => {
  const employee = new Employee("Anna", "11", "Anna@email.com");

  expect(employee.getId()).toEqual(expect.stringContaining("11"));
});

test("get employee's email", () => {
  const employee = new Employee("Anna", "11", "Anna@email.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining("Anna@email.com")
  );
});

test("get role of Employee", () => {
  const employee = new Employee("Anna", "11", "Anna@email.com");

  expect(employee.getRole()).toEqual(expect.stringContaining("employee"));
});
