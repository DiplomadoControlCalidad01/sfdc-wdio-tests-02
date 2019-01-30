const commonActions = require('../core/CommonActions');
class ObjetoPersonalizado{
    constructor(){
        const locatorCrear = '.slds-button.slds-button--neutral.onesetupCreateMenuTrigger';
        const locatorLinkObjetoPersonalizado = '//span[contains(text(),\'Objeto personalizado\')]';
        const locatoriframe = '//iframe[contains(@id,"vfFrameId_")]';

        commonActions.click(locatorCrear);
        commonActions.click(locatorLinkObjetoPersonalizado);
        commonActions.iframe(locatoriframe);
    }
    static linkFormularioGO(){
        let form = new ObjetoPersonalizado();
    }
    static addEtiqueta(etiqueta){
        commonActions.setvalue('#MasterLabel',etiqueta);
    }
    static addEtiquetaPlural(etiquetaPlural){
        commonActions.setvalue('#PluralLabel',etiquetaPlural);
    }
    static addNombreObjeto(nombreObjeto){
        commonActions.setvalue('#DeveloperName',nombreObjeto);
    }
    static addDescripcion(descripcion){
        commonActions.setvalue('#Description',descripcion);
    }
    static addConfiguracionAyudaESTANDAR(){
        commonActions.click('#CustomHelpTypeSTANDARD_HELP');
    }
    static addConfiguracionAyudaConVisualforce(){
        commonActions.click('#CustomHelpTypeCUSTOM_HELP_VISUALFORCE');
    }
    static addNombreRegistro(nombreRegistro){
        commonActions.setvalue('#MasterNameFieldLabel',nombreRegistro);
    }
    static addTipoDeDatosTEXTO(){
        commonActions.click('#AutoNo>option[value=Text]');
    }
    static addTipoNumeracionAutomatica(){
        commonActions.click('#AutoNo>option[value=AutoNumber]');
    }
    static addMostrarFormato(formato){
        commonActions.setvalue('#NameAutoNumberMask',formato);
    }
    static addNumeroInicio(NumeroInicio){
        commonActions.setvalue('#StartingNo',NumeroInicio);
    }
    static addPermitirInformes(){
        commonActions.click('#options_0');
    }
    static addPermitirActividades(){
        commonActions.click('#NameAutoNumberMask');
    }
    static addSeguimientoDeHistorialCampos(){
        commonActions.click('#options_6');
    }
    static addPermitirGruposChatter(){
        commonActions.click('#options_32');
    }
    /*static addPermitirColaboracion(){
        commonAction.click('')
    }*/
    static PermitirAccesoAlaAPI_Masiva(boolean){
        commonActions.comboBox('#options_29',boolean);
    }
}
module.exports = ObjetoPersonalizado;