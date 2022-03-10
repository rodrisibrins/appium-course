const { driverConfig } = require("appium/build/lib/cli/args")

describe('Android Native Feature Tests', () => {
    it('Access and Activity directly', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        //pause
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //accept alert
        //await driver.acceptAlert();

        //dismiss alert
        //await driver.dismissAlert();

        //click on the OK button
        //await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end (not stable if element gets moved)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - more stable
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal scrolling', async () => {
       await driver.startActivity(
           "io.appium.android.apis",
           "io.appium.android.apis.view.Gallery1"
       );

       //Horizontal scrolling - forward
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       
       //backward
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

       await driver.pause(3000);

    })
})
