
// importing the By class  from  the selenium-Webdriver package 
const { By} = require('selenium-webdriver');

// class definition for the cumputeengeninepage
class ComputeEnginePage{

    // Constructor method, takes a driver object as a parameter
    constructor (driver){
        // Assigning the driver object to the driver property of the class
        this.driver = driver;
    }


    // Method to fill the form on the web page with provided test data
    async fillForm(testdata){
        await this.driver.findElement(By.name('quantity')).sendKeys(testdata.instances);
        await this.driver.findElement(By.name('os')).sendKeys(testdata.os);
        await this.driver.findElement(By.name('provisioning-model')).sendKeys(testdata.provisioningModel);
        await this.driver.findElement(By.name('series')).sendKeys(testdata.sries);
        await this.driver.findElement(By.name('machine-type')).sendKeys(testdata.machineType);
        await this.driver.findElement(By.css('button[ng-click="listingCtrl.addGpu()"]')).click();
        await this.driver.findElement(By.name('gpu-type')).sendKeys(testdata.gpuType);
        await this.driver.findElement(By.name('gpu-cont')).sendKeys(testdata.gpuCount);
        await this.driver.findElement(By.name('local-ssd')).sendKeys(testdata.localSSD);
        await this.driver.findElement(By.name('datacenter-location')).sendKeys(testdata.datacenterLocation);
        await this.driver.findElement(By.name('committed-usage')).sendKeys(testdata.committedUsage);

    }


    // Method to click on the "Add to Estimate" button
    async addToEstimate(){

        await this.driver.findElement(By).css('').click

    }

    // Method to verify the total estimated cost displayed on the web page
  async verifyEstimate() {
    // Finding the element containing the total estimated cost
    const costElement = await this.driver.findElement(By.xpath('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[1]/div[3]/span[1]'));
    // Getting the text content of the cost element
    const costText = await costElement.getText();
    // Returning the total estimated cost text
    return costText;
  }

  // Method to share the estimate by clicking on buttons
  async shareEstimate() {

    // Clicking on the button with aria-label "Share this estimate"
    await this.driver.findElement(By.css('//*[@id="ow4"]/div/div/div/div/div/div/div[2]/div[1]/div/div[2]/div/button/span[3]')).click();
    // Clicking on the button with aria-label "Open estimate summary"
    await this.driver.findElement(By.css('//*[@id="ow4"]/div/div/div/div/div/div/div[2]/div[1]/div/div[2]/div/button/span[3]')).click();
  }  

}
module.exports = ComputeEnginePage;