describe('Solution exercise 2', ()=>{
   it('Working with a date picker', async () => {
    //access the date picker
    await driver.startActivity(
        "io.appium.android.apis",
        "io.appium.android.apis.view.DateWidgets1"
    )

    //get current date
    //const date = await $('//*[@resource-id="io.appium.apis:id/dateDisplay"]');
    //const currentDate = await date.getText();

    //click on change the date button
    await $('~change the date').click();
    

    //scroll right to the next month
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    //select the 10th date
   // await $('//*[@text="10"]').click();

    //click on ok button
    //await $('//*[@resource-id="android:id/button1"]').click();

    //verify the updated date
    //await expect(await date.getText()).not.toEqual(currentDate);
    })
})
