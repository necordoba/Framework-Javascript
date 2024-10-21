
// Importing necessary classes from the selenium-webdriver package
const { By, Key, until } = require('selenium-webdriver');

// Class definition for the HomePage
class HomePage {
  // Constructor method, takes a driver object as a parameter
  constructor(driver) {
    // Assigning the driver object to the driver property of the class
    this.driver = driver;
    // Setting the URL of the home page
    this.url = 'https://cloud.google.com/';
  }

  // Method to open the home page
  async open() {
    // Navigating to the URL of the home page
    await this.driver.get(this.url);
  }

  // Method to search for the Google Cloud Platform Pricing Calculator
  async searchCalculator() {
    // Finding the search input field and entering the search query
    await this.driver.findElement(By.css('//*[@id="kO001e"]/div[2]/div[1]/div/div[2]/div[2]/div[1]/div/div')).sendKeys('Google Cloud Platform Pricing Calculator', Key.RETURN);
    // Waiting until the link to the calculator is located on the page
    await this.driver.wait(until.elementLocated(By.linkText('Google Cloud Platform Pricing Calculator')), 10000);
    // Clicking on the link to the calculator
    await this.driver.findElement(By.linkText('Google Cloud Platform Pricing Calculator')).click();
  }
}

// Exporting the HomePage class to make it available for use in other modules
module.exports = HomePage;