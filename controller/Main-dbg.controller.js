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
        }
    });
});