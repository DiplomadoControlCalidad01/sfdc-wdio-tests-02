const commonActions = require('../core/CommonActions');
class objeto{
    constructor(){
        this.l_Etiqueta = '#MasterLabel';
        this.l_EtiquetaPlural ='#PluralLabel';
        this.l_Sexo ='#Gender>option[value=';
        this.l_NombreObjeto='#DeveloperName';
        this.l_Descripcion='#Description';
        this.l_NombreRegistro='#MasterNameFieldLabel';
        this.l_TipoDeDato='#AutoNo>option[value=';
        this.l_MostrarFormato = '#NameAutoNumberMask';
        this.l_NumeroInicio = '#StartingNo';
        this.l_PermitirInformes = '#options_0';
        this.l_PermitirActividades = '#options_3';
        this.l_SeguimientoHistorial = '#options_6';
        this.l_GruposChatter = '#options_32';
        this.l_PermitirColoboracion = '#options_28';
        this.l_API_Masiva= '#options_29';
        this.l_API_Transmicion = '#options_30';
        this.l_EstadoImplementacion = '//label[contains(text(),"';
        this.l_PermitirBuscar = '#options_20';
        this.locatorIframe = '//iframe[contains(@id,"vfFrameId_")]'; //'iframe[name *="vfFrameId_"]'
        this.l_BotonGuardar = 'td#bottomButtonRow>input[name=save]';
    }
    GuardarObjeto(){
        commonActions.click(this.l_BotonGuardar);
    }

}
module.exports = objeto;