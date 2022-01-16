// dependencies
const Engineer = require('../lib/engineer');
//init

describe("Engineer", () => {
	describe("Initialization", () => {
		it("should initiate an object", () => {
			const obj = new Engineer();
			expect(typeof (obj)).toEqual("object");
		});
	});
	// github object
	describe("Github", () => {
		it("should create new github", () => {
			const obj = new Engineer("Billy", 12, "billy.email@email", "ChainRxn12");
			expect(obj.github).toEqual("ChainRxn12");
		});
	});
	//getGithub method
	describe("getGithub", () => {
		it("can return gitHub username by getGithub method", () => {
			const obj = new Engineer("Billy", 12, "billy.email@email", "ChainRxn12");
			expect(obj.getGithub()).toEqual("ChainRxn12");
		});
	});
	//getRole method
	describe("getRole", () => {
		it("can return role by getRole method", () => {
			const role = "Engineer";//must define role
			const obj = new Engineer("Billy", 12, "billy.email@email", "ChainRxn12");
			expect(obj.getRole()).toEqual(role);
		});
	});
});