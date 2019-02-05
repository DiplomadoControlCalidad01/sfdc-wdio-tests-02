const commonActions = require('../core/CommonActions');
const Objeto = require('../Page/objeto.po');
const SearchObjeto = require('../Page/searchObjeto.po');
class edit_object extends Objeto{
     constructor(){
         super();
         this.locatorBotonModificacion = '//span[contains(text(),"Modificar")]';
     }
     modifyObject(newobject){
         let searchObjeto = new SearchObjeto();
         let ObjetoAnterior = searchObjeto.buscarObjeto(newobject.Antigua_Etiqueta);
         commonActions.click('//th//a[contains(text(),"'+ObjetoAnterior+'")]');
         commonActions.click(this.locatorBotonModificacion);
         commonActions.iframe(this.locatorIframe);
         commonActions.pause();
         this.fillObject(newobject);
     }
     fillObject(newObject){

         commonActions.setvalue(this.l_Etiqueta,newObject.new_Etiqueta);
         commonActions.setvalue(this.l_EtiquetaPlural,newObject.new_EtiquetaPlural);
         commonActions.click(this.l_Sexo+newObject.new_Sexo+']');
         commonActions.setvalue(this.l_NombreObjeto,newObject.new_NombreObjeto);
         commonActions.setvalue(this.l_Descripcion,newObject.new_Descripcion);
         commonActions.setvalue(this.l_NombreRegistro,newObject.new_NombreDelRegistro);
         commonActions.seleccionTipoDato(this.l_TipoDeDato+newObject.new_TipoDeDatos+']', this.l_MostrarFormato,this.l_NumeroInicio,newObject.new_TipoDeDatos,
             newObject.new_MostrarFormato,newObject.new_NumeroInicio);
         commonActions.SelecionComboBox(this.l_PermitirInformes,newObject.new_PermitirInformes);
         commonActions.seleccionVentanaEmegente(this.l_PermitirActividades,newObject.new_PermitirActividades);
         commonActions.SelecionComboBox(this.l_SeguimientoHistorial,newObject.new_PermitirSeguimientoDeHistorial);
         commonActions.SelecionComboBox(this.l_GruposChatter,newObject.new_PermitirGruposDeChatter);
         commonActions.clasificacionDeObjeto(this.l_PermitirColoboracion,this.l_API_Masiva,this.l_API_Transmicion,newObject.new_ClasificacionObjeto);
         commonActions.click(this.l_EstadoImplementacion+newObject.new_EstadoDeImplementacion+'")]');
         commonActions.SelecionComboBox(this.l_PermitirBuscar,newObject.new_PermitirBuscar);
         commonActions.pause();
         this.GuardarObjeto();
     }

}
module.exports = edit_object;