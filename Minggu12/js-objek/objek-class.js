function Manusia(firstName, lastName) {
  // Properti
  this.firstName = firstName;
  this.lastName = lastName;

  // Method
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.showName = function () {
    document.write(this.fullName());
  };
}
var manusia1 = new Manusia("Arif", "Saputra");
var manusia2 = new Manusia("Saputra", "Arif");

manusia1.showName();
document.write("<br>");
manusia2.showName();
