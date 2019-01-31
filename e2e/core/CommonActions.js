const tiempoEspera = require('../../environment').tiempoespera;

class CommonActions{
    static setvalue(locator,value){
        browser.waitForVisible(locator,tiempoEspera);
        browser.element(locator).setValue(value);
    }
    static click(locator){
        browser.waitForVisible(locator,tiempoEspera);
        browser.element(locator).click();
    }
    static waitForVisble(locator){
        browser.waitForVisible(locator,tiempoEspera);
    }
    static iframe(locator){
        browser.waitForVisible(locator,tiempoEspera);
        browser.frame(browser.element(locator).value);
    }
    static SelecionComboBox(locator,numero){
       let bool = Boolean(numero);
       let navegador = browser.isSelected(locator);
       if(bool != navegador){
           browser.waitForVisible(locator,tiempoEspera);
           browser.element(locator).click();
       }
    }
    static getText(locator){
        browser.waitForVisible(locator,tiempoEspera);
        return browser.getText(locator);
    }
}

module.exports = CommonActions;