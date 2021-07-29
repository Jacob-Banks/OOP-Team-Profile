// node modules
const inquirer = require("inquirer");
const fs = require("fs");
// employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//page template
const generatePage = require("./src/page-template");

//team array
const team = [];

// writing files
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

//get data for constuctors
const prompts = (role) => {
  let unique;
  switch (role) {
    case "Manager":
      unique = "Office";
      break;
    case "Engineer":
      unique = "GitHub";
      break;
    case "Intern":
      unique = "School";
      break;
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `Enter ${role}'s name.`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter ${role}'s name!`);
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `Enter ${role}'s ID.`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter ${role}'s ID!`);
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `Enter ${role}'s email.`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter ${role}'s email!`);
          }
        },
      },
      {
        type: "input",
        name: "unique",
        message: `Enter ${role}'s ${unique}.`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter ${role}'s ID!`);
          }
        },
      },
      {
        type: "list",
        name: "nextEmployee",
        message: "What type of employee would you like to add to your team?",
        choices: ["Engineer", "Intern", "Finissheed building team"],
      },
    ])
    .then((data) => {
      const { name, id, email, unique, nextEmployee } = data;
      switch (role) {
        case "Manager":
          const manager = new Manager(name, id, email, unique);
          team.push(manager);
          break;
        case "Engineer":
          const engineer = new Engineer(name, id, email, unique);
          team.push(engineer);
          break;
        case "Intern":
          const intern = new Intern(name, id, email, unique);
          team.push(intern);
          break;
      }

      if (nextEmployee === "Engineer") {
        return prompts("Engineer");
      } else if (nextEmployee === "Intern") {
        return prompts("Intern");
      } else {
        console.log("finished", team);
        writeFile(generatePage(team));
      }
    });
};
prompts("Manager");
