const company = { name: 'Hexlet', employees: [] };

company.getName = function getName() {
  return this.name;
};

company.setName = function setName(name) {
  this.name = name;
};

company.addEmployee = function addEmployee(user) {
  this.employees.push(user);
};

console.log(company.getName());
