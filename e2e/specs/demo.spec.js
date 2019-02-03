const assert = require('chai').assert;
const login = require('../Page/Login.po');
const op = require('../Page/ObjetoPersonalizado.po');
const vop = require('../Page/viewObjetosPers.po');

const header  = require('../Page/header.po');
const RouteEdit_Remove = require('../Page/routeEdit_Remove.po');
const Edit_object = require('../Page/edit_object.po');

describe('Test Suite',()=>{
    beforeEach(()=>{
       login.iniciarSecion();
    });
    // PRIMER TEST CASE
   it('Crear un Objeto Personalizado',()=>{
       header.irAPanelObjetoPersonalizado();
       let ValuesOP = {
                "Etiqueta": "Etiqueeta42",
                "EtiquetaPlural": "etiquetaass42",
                "Sexo": "m", // sexo: f,m [f=Femenino, m=Masculino]
                "NombreObjeto": "abadfd",
                "Descripcion": "Esto es una descripcion  asdfasdf",
                "NombreDelRegistro": "NameRegistroIs",
                "TipoDeDatos": "Text", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
                // 1 = true, 0 = false
                "PermitirInformes": 1,
                "PermitirActividades": 1,
                "PermitirSeguimientoDeHistorial": 0,
                "PermitirGruposDeChatter": 1,
                "PermitirColaboracion": 0,
                "PermitirAccesoAlaAPI_MASIVA": 0,
                "PermitirAccesoAlaAPI_TRANSMISION": 0,
                //"EstadoDeImplementacionEnDesarrollo": "1", //
                "PermitirBuscar": 1,
                "AgregarNotasYarchivosAdjuntos": 1,
                "IniciarAsistenteFichaPersonalizadaDespuesCrear": 0
            };
            op.crearinstancia();
            op.CrearObjetoPersonalizado(ValuesOP);
            op.saveObjetoPersonalizado();
            vop.crearInstanciaVOP();
            let etiquetaAgregada = vop.getEtiquetaAgregada();
            assert.equal(ValuesOP.Etiqueta, etiquetaAgregada,"no se agrego Exitosamente");
      });


    // SEGUNDO TEST CASE
      /*it('Editar un Objeto Personalizado',()=>{
        header.irAPanelObjetoPersonalizado();
        let objetoAModif = {
            "Antigua_Etiqueta": "Etiqueta20",
            "new_Etiqueta":"Etiqueta20", //
            "new_EtiquetaPlural": "etiquetaass422",
            "new_Sexo":"m", // sexo: f,m [f=Femenino, m=Masculino]
            "new_NombreObjeto": "abadfd5", // Obligatoriamente tiene q cambiar el dato
            "new_Descripcion": "Esto es una descripcion  de la etiqueta 20",
            "new_NombreDelRegistro": "NameRegistroIs",
            "new_TipoDeDatos": "Text", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
            "new_MostrarFormato": 00, // solo ceros cantidad no mayor a 9
            "new_NumeroInicio": 1, // introducir un numero positivo
            // 1 = true, 0 = false
            "new_PermitirInformes": 0,
            "new_PermitirActividades": 0,
            "new_PermitirSeguimientoDeHistorial": 1,
            "new_PermitirGruposDeChatter": 1,
            "new_ClasificacionObjeto": 1,
            "new_PermitirBuscar": 1
        };
        let editarObjeto = new Edit_object();
        editarObjeto.modifyObject(objetoAModif);
        browser.pause(30000);
    });

    // TERCER TEST CASE
     it('Eliminar un Objeto Pesonalizado',()=>{
        header.irAPanelObjetoPersonalizado();
        let  objetoAeliminar ={ 'nameEtiqueta':'Etiqueeta16' };
        let remove = new RouteEdit_Remove();
        remove.eliminarObjeto(objetoAeliminar.nameEtiqueta);
        browser.pause(30000);
    });
*/
});
