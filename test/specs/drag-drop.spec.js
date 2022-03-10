describe("Drag & drop", () => {
    it("Access drag & drop", async () => {
      await driver.startActivity(
        "io.appium.android.apis",
        "io.appium.android.apis.view.DragAndDropDemo"
      );
    });
    it("drag & drop", async () => {
      const element1 = await $(
        '//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_1"]'
      );
      const element2 = await $(
        '//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_2"]'
      );
      
      await driver.touchAction({
        action: 'longPress',
        element: element1
    },
    {
        action: 'moveTo',
        element: element2
    },
    {
        action: 'release'
    }
    );
    });
  });