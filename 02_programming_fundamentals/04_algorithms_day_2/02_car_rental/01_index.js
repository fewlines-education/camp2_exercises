const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(driver) {
  let canRent;
  if ((driver.bonus > 0.7 || driver.numberOfAccident === 0)&& driver.driverLicense >= "B" && driver.licenseIssued <= new Date().getFullYear() - 2){
    canRent = true;
  }else {
    canRent = false;
  }
  return canRent;
}


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
