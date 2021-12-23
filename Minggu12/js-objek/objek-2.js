var person1 = {
  firstName: "Fajriah",
  midName: "Uswatun",
  lastName: "Hasanah",
  showName: function () {
    alert(`She is ${this.firstName} ${this.midName} ${this.lastName}`);
  },
};
person1.showName();
