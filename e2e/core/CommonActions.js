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
    static Selecion(locator,numero){
        let boolean = new Boolean(numero);
        browser.selectByAttribute()
        //browser.element(locator).set(value=boolean);
        browser.selectByValue(locator,boolean);
    }
}

module.exports = CommonActions;