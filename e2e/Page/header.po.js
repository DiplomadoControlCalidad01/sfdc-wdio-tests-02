const commonActions = require('../core/CommonActions');

class header{
    constructor(){
        this.locatorInicio = '//ul[@class="tabBarItems slds-grid"]//li//a//span[contains(text(),"Inicio")]';
        this.locatorGestorObjeto = '//a[@class="tabHeader slds-context-bar__label-action "]//span[contains(text(),"Gestor de objetos")]';
        commonActions.click(this.locatorInicio);
        commonActions.click(this.locatorGestorObjeto);
    }
    static irAPanelObjetoPersonalizado(){
        return new header();
    }
    static clickGestorObjeto()
    {
        commonActions.click(this.clickGestorObjeto());
    }
}
module.exports= header;
