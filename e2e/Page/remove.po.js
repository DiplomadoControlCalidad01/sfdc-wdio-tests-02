const commonActions = require('../core/CommonActions.js');
const SearchObjeto = require('../Page/searchObjeto.po');
class remove{
  constructor(){
      this.locatorBotonEliminar = '//span[contains(text(),"Eliminar")]';
      this.locatorbotonConfirEliminar = '.slds-button.slds-button--neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton';
  }
  eliminarObjeto(nombreObjeto){
      let searchObjeto = new SearchObjeto();
      let objetoAeliminar = searchObjeto.buscarObjeto(nombreObjeto);
      commonActions.click('//th//a[contains(text(),"'+objetoAeliminar+'")]');
      commonActions.click(this.locatorBotonEliminar);
      commonActions.pause();
      commonActions.click(this.locatorbotonConfirEliminar);
  }
}
module.exports = remove;