const commonActions = require('../core/CommonActions.js');
const SearchObjeto = require('../Page/searchObjeto.po');
class remove{
  constructor(){
      this.locatorbotonConfirEliminar = '.slds-button.slds-button--neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton';
  }
    eliminarObjeto(nombreObjeto){
        let searchObjeto = new SearchObjeto();
        let objetoAeliminar = searchObjeto.buscarObjeto(nombreObjeto);
        this.locatorBotonEliminar = '//span[contains(text(),"Eliminar")]';
      commonActions.click('//th//a[contains(text(),"'+objetoAeliminar+'")]');
      commonActions.click(this.locatorBotonEliminar);
      commonActions.pause();
      commonActions.click(this.locatorbotonConfirEliminar);
      commonActions.pause();
  }
}
module.exports = remove;