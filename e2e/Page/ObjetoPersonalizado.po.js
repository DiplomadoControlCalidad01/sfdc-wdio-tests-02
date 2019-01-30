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
    static permitirInformes(boolean){
        commonActions.SelecionComboBox('#options_0',boolean);
    }
    static permitirActividades(boolean){
        commonActions.SelecionComboBox('#options_3',boolean);
    }
    static seguimientoDeHistorialCampos(boolean){
        commonActions.SelecionComboBox('#options_6',boolean);
    }
    static permitirGruposChatter(boolean){
        commonActions.SelecionComboBox('#options_32',boolean);
    }
    static permitirColaboracion(boolean){
        commonActions.SelecionComboBox('#options_28',boolean);
    }
    static PermitirAccesoAlaAPI_Masiva(boolean){
        commonActions.SelecionComboBox('#options_29',boolean);
    }
    static PermitirAccesoAlaAPI_Transmision(boolean){
        commonActions.SelecionComboBox('#options_30',boolean);
    }
    static EstadoDeImplementacionEnDesarrollo(){
        commonActions.click('#InDevelopment1');
    }
    static PermitirBuscar(boolean){
        commonActions.SelecionComboBox('#options_20',boolean);
    }
    static AgregarNotasyArchivosAdjuntos(boolean){
        commonActions.SelecionComboBox('#NoteRL',boolean);
    }
    static IniciarAsistenteFichaPersonalizadaDespuesdeGuardar(boolean){
        commonActions.SelecionComboBox('#CreateTab',boolean);
    }
    static Guardar(){
        commonActions.click('td#bottomButtonRow>input[name=save]');
    }
}
module.exports = ObjetoPersonalizado;