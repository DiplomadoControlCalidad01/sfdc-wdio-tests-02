const commonActions = require('../core/CommonActions');

class menu{
    constructor(){
        this.locatorMenuInicio = '//ul[@class="tabBarItems slds-grid"]//li//a//span[contains(text(),"Inicio")]';
        this.locatorMenuGestorObjeto = '//a[@class="tabHeader slds-context-bar__label-action "]//span[contains(text(),"Gestor de objetos")]';
    }
    clickMenuInicio()
    {   commonActions.click(this.locatorMenuInicio);
    }
    clickMenuObjetos(){
        commonActions.pause();
        commonActions.click(this.locatorMenuGestorObjeto);
    }

}
module.exports= menu;
