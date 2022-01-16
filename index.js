// modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// answers questions
const newStaffMemberData = [];

// Array object questions
const questions = async () => {
	const answers = await inquirer
		.prompt([
			{
				type: "input",
				message: "What is your name?",
				name: "name",
			},
			{
				type: "input",
				message: "What is your ID number?",
				name: "id",
			},
			{
				type: "input",
				message: "What is your email?",
				name: "email",
			},
			{
				type: "list",
				message: "What is your role?",
				name: "role",
				choices: ["Engineer", "Intern", "Manager"],
			},
		])

