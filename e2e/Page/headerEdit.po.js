const commonActions = require('../core/CommonActions');

class headerEdit{
    constructor(){
        this.locatorbusqueda = '//input[@class="slds-input slds-text-color_default slds-p-left--none slds-size--1-of-1 input default input uiInput uiInputTextForAutocomplete uiInput--{remove}"]';
        this.locatorSelectGO = '//li[@class="lookup__item SETUP_NODE slds-text-link--reset slds-grid slds-grid--vertical-align-center slds-truncate default uiAutocompleteOption forceSearchInputDesktopOption"]';
        commonActions.setvalue(this.locatorbusqueda,'Gestor de objetos');
        commonActions.waitForVisble(this.locatorSelectGO);
        commonActions.click(this.locatorSelectGO);
    }
    static buscarObjetosPersonalizados(){
        return new headerEdit();
    }
}
module.exports= headerEdit;