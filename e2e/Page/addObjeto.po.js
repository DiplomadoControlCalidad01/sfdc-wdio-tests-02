const commonActions = require('../core/CommonActions');

class addObjeto{
    constructor(){
        this.locatorbotonAgregar = '//a[@class="slds-button slds-button--icon"]';
        this.locatorbotonCrearObjeto = '//span[contains(text(),"Crear Objeto")]';
        this.locatoriframe = '//iframe[contains(@id,"vfFrameId_")]';
        this.lacatorCO1 = '#options_28';
        this.locatorCO2 = '#options_29';
        this.locatorCO3 = '#options_30';
        this.locatorMostrarFormato = '#NameAutoNumberMask';
        this.locatorNumeroInicio = '#StartingNo';
        commonActions.click(this.locatorbotonAgregar);
        commonActions.click(this.locatorbotonCrearObjeto);
        commonActions.iframe(this.locatoriframe);
    }
    CrearObjetoPersonalizado(opJson){

        commonActions.setvalue('#MasterLabel',opJson.Etiqueta),
        commonActions.setvalue('#PluralLabel',opJson.EtiquetaPlural),
        commonActions.click('#Gender>option[value='+opJson.Sexo+']'),
        commonActions.setvalue('#DeveloperName',opJson.NombreObjeto),
        commonActions.setvalue('#Description',opJson.Descripcion),
        commonActions.setvalue('#MasterNameFieldLabel',opJson.NombreDelRegistro),
        commonActions.seleccionTipoDato('#AutoNo>option[value='+opJson.TipoDeDatos+']',this.locatorMostrarFormato,this.locatorNumeroInicio,opJson.TipoDeDatos,opJson.MostrarFormato,opJson.NumeroInicio),
        commonActions.SelecionComboBox('#options_0',opJson.PermitirInformes),
        commonActions.SelecionComboBox('#options_3',opJson.PermitirActividades),
        commonActions.SelecionComboBox('#options_6',opJson.PermitirSeguimientoDeHistorial),
        commonActions.SelecionComboBox('#options_32',opJson.PermitirGruposDeChatter),
        commonActions.clasificacionDeObjeto(this.lacatorCO1,this.locatorCO2,this.locatorCO3,opJson.ClasificacionDeObjeto),
        commonActions.click('//label[contains(text(),"'+opJson.EstadoDeImplementacion+'")]'),
        commonActions.SelecionComboBox('#options_20',opJson.PermitirBuscar),
        commonActions.SelecionComboBox('#NoteRL',opJson.AgregarNotasYarchivosAdjuntos),
        commonActions.SelecionComboBox('#CreateTab',opJson.IniciarAsistenteFichaPersonalizadaDespuesCrear)
        commonActions.pause(10000);
    };
    saveObjetoPersonalizado(){

        commonActions.click('td#bottomButtonRow>input[name=save]');
    }
}
module.exports = addObjeto;