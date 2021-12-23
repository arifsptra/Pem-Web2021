var myName = {
  // Properti
  firstName: "Arif",
  lastName: "Saputra",
  //   Method
  showName: function () {
    alert(`My Name is ${this.firstName} ${this.lastName}`);
  },
};
// Pemanggilan Method
myName.showName();
