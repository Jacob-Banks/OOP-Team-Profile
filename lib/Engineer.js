const Employee = require("./Employee");

// create engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "engineer";
  }
}

module.exports = Engineer;
