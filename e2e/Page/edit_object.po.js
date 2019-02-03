const commonActions = require('../core/CommonActions');
const RouteEdit_remove = require('../Page/routeEdit_Remove.po');
class edit_object{
     constructor(){
         this.locatorBotonGuardar = '//td[@class="pbButtonb"]//input[@value="Guardar"]';
         this.lacatorCO1 = '#options_28';
         this.locatorCO2 = '#options_29';
         this.locatorCO3 = '#options_30';
         this.locatorMostrarFormato = '#NameAutoNumberMask';
         this.locatorNumeroInicio = '#StartingNo';
     }
     modifyObject(newobject){
         let routeEdit_Remove = new RouteEdit_remove();
         routeEdit_Remove.irFormularioEdit(newobject.Antigua_Etiqueta);
         this.fillObject(newobject);
     }
     fillObject(newObject){
         commonActions.setvalue('#MasterLabel',newObject.new_Etiqueta);
         commonActions.setvalue('#PluralLabel',newObject.new_EtiquetaPlural);
         commonActions.click('#Gender>option[value='+newObject.new_Sexo+']');
         commonActions.setvalue('#DeveloperName',newObject.new_NombreObjeto);
         commonActions.setvalue('#Description',newObject.new_Descripcion);
         commonActions.setvalue('#MasterNameFieldLabel',newObject.new_NombreDelRegistro);
         commonActions.seleccionTipoDato('#AutoNo>option[value='+newObject.new_TipoDeDatos+']',
             this.locatorMostrarFormato,this.locatorNumeroInicio,newObject.new_TipoDeDatos,
             newObject.new_MostrarFormato,newObject.new_NumeroInicio);
         commonActions.SelecionComboBox('#options_0',newObject.new_PermitirInformes);
         commonActions.seleccionVentanaEmegente('#options_3',newObject.new_PermitirActividades);
         commonActions.SelecionComboBox('#options_6',newObject.new_PermitirSeguimientoDeHistorial);
         commonActions.SelecionComboBox('#options_32',newObject.new_PermitirGruposDeChatter);
         commonActions.clasificacionDeObjeto(this.lacatorCO1,this.locatorCO2,this.locatorCO3,newObject.new_ClasificacionObjeto);
         commonActions.click('#InDevelopment1');
         commonActions.SelecionComboBox('#options_20',newObject.new_PermitirBuscar);
         commonActions.pause();
         commonActions.click(this.locatorBotonGuardar);
     }

}
module.exports = edit_object;