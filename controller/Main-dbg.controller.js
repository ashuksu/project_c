sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectc.controller.Main", {
        onInit() {
        },
        clickMyButton() {
            let oView = this.getView();

            let oImage1 = oView.byId('myImage1');
            let oImage2 = oView.byId('myImage2');

            let isImage1Visible = oImage1.getVisible();

            oImage1.setVisible(!isImage1Visible);
            oImage2.setVisible(isImage1Visible);

            let text = {on: 'Toggle ON', off: 'Toggle OFF'};
            let oToggleButton = oView.byId('myToggleButton');

            if (oToggleButton.getPressed()) {
                oToggleButton.setPressed(false);
                sap.m.MessageToast.show(text.off);
                oToggleButton.setText(text.off);
            }
        },
        toggleMyButton() {
            let oView = this.getView();
            
            let oToggleButton = oView.byId('myToggleButton');
            let bPressed = oToggleButton.getPressed(); // is active

            let text = {on: 'Toggle ON', off: 'Toggle OFF'};
            
            if (bPressed) {
                sap.m.MessageToast.show(text.on);
                oToggleButton.setText(text.on);
            } else {
                sap.m.MessageToast.show(text.off);
                oToggleButton.setText(text.off);
            }

            let oImage1 = oView.byId('myImage1');
            let oImage2 = oView.byId('myImage2');

            let isImage1Visible = oImage1.getVisible();
            let isImage2Visible = oImage2.getVisible();

            oImage1.setVisible(bPressed);
            oImage2.setVisible(bPressed);
        },
    });
});