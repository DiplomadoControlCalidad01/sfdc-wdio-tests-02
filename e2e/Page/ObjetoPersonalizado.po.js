const commonActions = require('../core/CommonActions');

class ObjetoPersonalizado{
    constructor(){
        //const locatorInicio = '//ul[contains(@class,\'tabBarItems slds-grid\')]//span[contains(@class,\'title slds-truncate\')][contains(text(),\'Inicio\')]';
        const locatorConfiguration = '//*[@class=\'slds-icon slds-icon-text-default\']';
        const locatorselecConfig = '';
        const locatorCrear = '.slds-button.slds-button--neutral.onesetupCreateMenuTrigger';
        const locatorLinkObjetoPersonalizado = '//span[contains(text(),\'Objeto personalizado\')]';
        const locatoriframe = '//iframe[contains(@id,"vfFrameId_")]';

        //commonActions.click(locatorInicio);
        commonActions.click(locatorConfiguration);
        commonActions.click(locatorCrear);
        commonActions.click(locatorLinkObjetoPersonalizado);
        commonActions.iframe(locatoriframe);
    }
    //Op = Objeto Personalizado
    CrearObjetoPersonalizado(opJson){
        let opStep = {
            "Etiqueta": () => commonActions.setvalue('#MasterLabel',opJson.Etiqueta),
            "EtiquetaPlural": () => commonActions.setvalue('#PluralLabel',opJson.EtiquetaPlural),
            "Sexo":() => commonActions.click('#Gender>option[value='+opJson.Sexo+']'),
            "NombreObjeto": ()=> commonActions.setvalue('#DeveloperName',opJson.NombreObjeto),
            "Descripcion": ()=> commonActions.setvalue('#Description',opJson.Descripcion),
            "NombreDelRegistro": ()=> commonActions.setvalue('#MasterNameFieldLabel',opJson.NombreDelRegistro),
            "TipoDeDatos": ()=> commonActions.click('#AutoNo>option[value='+opJson.TipoDeDatos+']'),
            "PermitirInformes" : ()=> commonActions.SelecionComboBox('#options_0',opJson.PermitirInformes),
            "PermitirActividades" : ()=> commonActions.SelecionComboBox('#options_3',opJson.PermitirActividades),
            "PermitirSeguimientoDeHistorial": () => commonActions.SelecionComboBox('#options_6',opJson.PermitirSeguimientoDeHistorial),
            "PermitirGruposDeChatter" : () => commonActions.SelecionComboBox('#options_32',opJson.PermitirGruposDeChatter),
            "PermitirColaboracion" : () => commonActions.SelecionComboBox('#options_28',opJson.PermitirColaboracion),
            "PermitirAccesoAlaAPI_MASIVA" : ()=> commonActions.SelecionComboBox('#options_29',opJson.PermitirAccesoAlaAPI_MASIVA),
            "PermitirAccesoAlaAPI_TRANSMISION" : ()=> commonActions.SelecionComboBox('#options_30',opJson.PermitirAccesoAlaAPI_TRANSMISION),
            "EstadoDeImplementacionEnDesarrollo":()=> commonActions.click('#InDevelopment1'),
            "PermitirBuscar" :() => commonActions.SelecionComboBox('#options_20',opJson.PermitirBuscar),
            "AgregarNotasYarchivosAdjuntos": ()=> commonActions.SelecionComboBox('#NoteRL',opJson.AgregarNotasYarchivosAdjuntos),
            "IniciarAsistenteFichaPersonalizadaDespuesCrear" : () => commonActions.SelecionComboBox('#CreateTab',opJson.IniciarAsistenteFichaPersonalizadaDespuesCrear)
        };
        Object.keys(opJson).forEach(key => {
            opStep[key].call();
        });
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
    saveObjetoPersonalizado(){
        commonActions.click('td#bottomButtonRow>input[name=save]');
    }
}
module.exports = ObjetoPersonalizado;