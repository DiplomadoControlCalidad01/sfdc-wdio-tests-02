const commonActions = require('../core/CommonActions');

class opView{
    getEtiquetaText(){
        return commonActions.getText('//span[@class=\'slds-form-element__static\'][contains(text(),\'test000\')]');
    }
    clickDetailsTab(){

    }
}