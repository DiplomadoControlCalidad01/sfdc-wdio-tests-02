const commonActions = require('../core/CommonActions');
const Objeto = require('../Page/objeto.po');
class addObjeto extends Objeto{
    constructor(){
        super();
        this.l_NotasYarchivosAdjuntos = '#NoteRL';
        this.l_AsistenteFichaPersonalizad = '#CreateTab';
        this.locatorBotonAgregar = '//a[@class="slds-button slds-button--icon"]';
        this.locatorbotonCrearObjeto = '//span[contains(text(),"Crear Objeto")]';
        commonActions.click(this.locatorBotonAgregar);
        commonActions.click(this.locatorbotonCrearObjeto);
        commonActions.iframe(this.locatorIframe);
    }
    CrearObjetoPersonalizado(opJson){
        commonActions.setvalue(this.l_Etiqueta,opJson.Etiqueta),
        commonActions.setvalue(this.l_EtiquetaPlural,opJson.EtiquetaPlural),
        commonActions.click(this.l_Sexo+opJson.Sexo+']'),
        commonActions.setvalue(this.l_NombreObjeto,opJson.NombreObjeto),
        commonActions.setvalue(this.l_Descripcion,opJson.Descripcion),
        commonActions.setvalue(this.l_NombreRegistro,opJson.NombreDelRegistro),
        commonActions.seleccionTipoDato(this.l_TipoDeDato+opJson.TipoDeDatos+']',this.l_MostrarFormato,this.l_NumeroInicio,opJson.TipoDeDatos,opJson.MostrarFormato,opJson.NumeroInicio),
        commonActions.SelecionComboBox(this.l_PermitirInformes,opJson.PermitirInformes),
        commonActions.SelecionComboBox(this.l_PermitirActividades,opJson.PermitirActividades),
        commonActions.SelecionComboBox(this.l_SeguimientoHistorial,opJson.PermitirSeguimientoDeHistorial),
        commonActions.SelecionComboBox(this.l_GruposChatter,opJson.PermitirGruposDeChatter),
        commonActions.clasificacionDeObjeto(this.l_PermitirColoboracion,this.l_API_Masiva,this.l_API_Transmicion,opJson.ClasificacionDeObjeto),
        commonActions.click(this.l_EstadoImplementacion+opJson.EstadoDeImplementacion+'")]'),
        commonActions.SelecionComboBox(this.l_PermitirBuscar,opJson.PermitirBuscar),
        commonActions.SelecionComboBox(this.l_NotasYarchivosAdjuntos,opJson.AgregarNotasYarchivosAdjuntos),
        commonActions.SelecionComboBox(this.l_AsistenteFichaPersonalizad,opJson.IniciarAsistenteFichaPersonalizadaDespuesCrear)
        commonActions.pause();
    };
    detalleObjeto(nombre){
        const locatorEnlace = '//th//a[contains(text(),"'+nombre+'")]';
        commonActions.click(locatorEnlace);
    }
}
module.exports = addObjeto;