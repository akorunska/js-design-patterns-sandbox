class Customer {
  constructor(name) {
    this.name = name;
    this.lastReceivedMagazine = -1;
  }

  update(magazineNumber) {
    this.lastReceivedMagazine = magazineNumber;
  }
}

export default Customer;
