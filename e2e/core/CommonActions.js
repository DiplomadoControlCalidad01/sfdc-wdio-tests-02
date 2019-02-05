const tiempoEspera = require('../../environment').tiempoespera;

class CommonActions {
    static setvalue(locator, value) {
        browser.waitForVisible(locator, tiempoEspera);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        browser.waitForVisible(locator, tiempoEspera);
        browser.element(locator).click();
    }

    static waitForVisble(locator) {
        browser.waitForVisible(locator, tiempoEspera);
    }

    static iframe(locator) {
        browser.waitForVisible(locator, tiempoEspera);
        browser.frame(browser.element(locator).value);
        browser.pause(10000);
    }

    static SelecionComboBox(locator, numero) {
        let bool = Boolean(numero);
        let navegador = browser.isSelected(locator);
        browser.pause(3000);
        if (bool != navegador) {
            browser.waitForVisible(locator, tiempoEspera);
            browser.element(locator).click();
        }
    }

    static getText(locator) {
        browser.waitForVisible(locator, tiempoEspera);
        return browser.getText(locator);
    }

    static pause() {
        browser.pause(10000);
    }

    static seleccionVentanaEmegente(locator, value) {
        let stateActual = Boolean(value);
        let statelast = browser.isSelected(locator);
        if (statelast === false) {
            if (stateActual === true) {
                browser.waitForVisible(locator, tiempoEspera);
                browser.element(locator).click();
                browser.alertAccept();
            }
        }
        else {
            if (stateActual === false) {
                browser.waitForVisible(locator, tiempoEspera);
                browser.element(locator).click();
            }
        }
    }
    static clasificacionDeObjeto(locator1,locator2,locator3,value){
        this.SelecionComboBox(locator1,value);
        this.SelecionComboBox(locator2,value);
        this.SelecionComboBox(locator3,value);
    }
    static seleccionTipoDato(locatorTipoDato,locatorMostrarFormato,locatorNumeroInicio,value1,value2,value3){
        this.click(locatorTipoDato);
        if(value1==="AutoNumber"){
            this.valor2 = '{'+value2+'}';
            this.setvalue(locatorMostrarFormato,this.valor2);
            this.setvalue(locatorNumeroInicio,value3);
        }
    }
}
module.exports = CommonActions;