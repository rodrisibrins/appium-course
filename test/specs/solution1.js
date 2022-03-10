describe('Solution 1', () => {
    it('Find element by accessibility id', async () => {
        //access the screen
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        //enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        // verify the country name
        await expect(textField).toHaveText('Canada');
    })
})