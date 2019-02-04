const commonActions = require('../core/CommonActions.js');
class routeEdit_Remove{
  constructor(){
      this.locatorBotonModificacion = '//span[contains(text(),"Modificar")]';
      this.locatorPanelBuscarObjeto = '//input[@class=\'slds-input input\']';
      this.locatorIframe = 'iframe[name *="vfFrameId_"]'; // '//iframe[contains(@id,"vfFrameId_")]'
      this.locatorBotonEliminar = '//span[contains(text(),"Eliminar")]';
      this.locatorbotonConfirEliminar = '.slds-button.slds-button--neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton';
  }
  buscarObjetoPersonalizado(nombreobjeto) {
      console.log('entro la route edit');
      commonActions.setvalue(this.locatorPanelBuscarObjeto, nombreobjeto);
      browser.pause(10000);
      let a = '//a[contains(text(),"'+nombreobjeto+'")]';
      commonActions.click('//a[contains(text(),"'+nombreobjeto+'")]');
      console.log(a);
  }
  irFormularioEdit(nombreObject){
      this.buscarObjetoPersonalizado(nombreObject);
      commonActions.click(this.locatorBotonModificacion);
      commonActions.iframe(this.locatorIframe);
      commonActions.pause();
  }
  eliminarObjeto(nombreObjeto){
      commonActions.setvalue(this.locatorPanelBuscarObjeto,nombreObjeto);
      //commonActions.pause();
      browser.pause(20000);
      commonActions.click('//a[contains(text(),"'+nombreObjeto+'")]');
      browser.pause(10000);
      commonActions.click(this.locatorBotonEliminar);
      browser.pause(10000);
      commonActions.click(this.locatorbotonConfirEliminar);
  }
  buscarExistencia(nombreObjeto){
      commonActions.setvalue(this.locatorPanelBuscarObjeto,nombreObjeto);
  }
}
module.exports = routeEdit_Remove;