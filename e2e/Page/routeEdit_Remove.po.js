const commonActions = require('../core/CommonActions.js');
class routeEdit_Remove{
  constructor(){
      this.locatorBotonModificacion = '//span[contains(text(),"Modificar")]';
      //span[contains(text(),"Objeto personalizado")]
      this.locatorPanelBuscarObjeto = '//input[@class=\'slds-input input\']';
      this.locatorIframe = 'iframe[name *="vfFrameId_"]'; // '//iframe[contains(@id,"vfFrameId_")]'
      this.locatorBotonEliminar = '//span[contains(text(),"Eliminar")]';
      this.locatorbotonConfirEliminar = '.slds-button.slds-button--neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton';
  }
  buscarObjetoPersonalizado(nombreobjeto) {
      commonActions.setvalue(this.locatorPanelBuscarObjeto, nombreobjeto);
      commonActions.click('//a[contains(text(),"' + nombreobjeto + '")]');
  }
  irFormularioEdit(nombreObject){
      this.buscarObjetoPersonalizado(nombreObject);
      commonActions.click(this.locatorBotonModificacion);
      commonActions.iframe(this.locatorIframe);
      commonActions.pause();
  }
  eliminarObjeto(nombreObjeto){
      this.buscarObjetoPersonalizado(nombreObjeto);
      commonActions.click(this.locatorBotonEliminar);
      commonActions.click(this.locatorbotonConfirEliminar);
  }
}
module.exports = routeEdit_Remove;