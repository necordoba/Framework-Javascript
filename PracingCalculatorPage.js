
// Importing the By class from the selenium-webdriver package
const { By } = require('selenium-webdriver');

// Class definition for the PricingCalculatorPage
class PricingCalculatorPage {
  // Constructor method, takes a driver object as a parameter
  constructor(driver) {
    // Assigning the driver object to the driver property of the class
    this.driver = driver;
  }

  // Method to navigate to the Compute Engine section in the pricing calculator
  async goToComputeEngine() {
    // Finding and clicking on the tab for Compute Engine using XPath
    await this.driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[6]/div[2]/div/div/div/div[2]/div/div/div[1]/div/div/div/p')).click();
  }
}

// Exporting the PricingCalculatorPage class to make it available for use in other modules
module.exports = PricingCalculatorPage;