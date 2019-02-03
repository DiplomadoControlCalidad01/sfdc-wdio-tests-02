const commonActions = require('../core/CommonActions');

class ObjetoPersonalizado{
    constructor(){
        //const locatorConfiguration = '//*[@class=\'slds-icon slds-icon-text-default\']';
        const locatorCrear = '.slds-button.slds-button--neutral.onesetupCreateMenuTrigger';
        const locatorLinkObjetoPersonalizado = '//span[contains(text(),\'Objeto personalizado\')]';
        const locatoriframe = '//iframe[contains(@id,"vfFrameId_")]';
        // commonActions.click(locatorConfiguration);
        commonActions.click(locatorCrear);
        commonActions.click(locatorLinkObjetoPersonalizado);
        commonActions.iframe(locatoriframe);

    }
    static crearinstancia(){
        return new ObjetoPersonalizado();
    }
    static CrearObjetoPersonalizado(opJson){
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
            "PermitirBuscar" :() => commonActions.SelecionComboBox('#options_20',opJson.PermitirBuscar)
            //"AgregarNotasYarchivosAdjuntos": ()=> commonActions.SelecionComboBox('#NoteRL',opJson.AgregarNotasYarchivosAdjuntos),
            //"IniciarAsistenteFichaPersonalizadaDespuesCrear" : () => commonActions.SelecionComboBox('#CreateTab',opJson.IniciarAsistenteFichaPersonalizadaDespuesCrear)
        };
        Object.keys(opJson).forEach(key => {
             opStep[key].call();
        });
        commonActions.pause(1000);
    }
    static saveObjetoPersonalizado(){
        commonActions.click('td#bottomButtonRow>input[name=save]');
    }
}
module.exports = ObjetoPersonalizado;