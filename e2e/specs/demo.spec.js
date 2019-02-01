
const assert = require('chai').assert;
const login = require('../Page/Login.po');
const op = require('../Page/ObjetoPersonalizado.po');
const vop = require('../Page/viewObjetosPers.po');

const headerEdit  = require('../Page/headerEdit.po');
const editionOP = require('../Page/editionOP.po');
describe('Test Suite',()=>{
    beforeEach(()=>{
        login.iniciarSecion();
    });
    it('Crear un Objeto Personalizado',()=>{
            let ValuesOP = {
                "Etiqueta":"Etiqueeta42",
                "EtiquetaPlural": "etiquetaass42",
                 "Sexo":"m", // sexo: f,m [f=Femenino, m=Masculino]
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
            assert.equal(ValuesOP.Etiqueta,vop.getEtiquetaAgregada(),"se agrego Exitosamente");
      });
    it('Editar un Objeto Personalizado',()=>{
        headerEdit.buscarObjetosPersonalizados();
        let modifyAccount = {
            "Etiqueta":"Etiqueeta42",
            "EtiquetaPlural": "etiquetaass42",
            /*"Sexo":"m", // sexo: f,m [f=Femenino, m=Masculino]
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
            "IniciarAsistenteFichaPersonalizadaDespuesCrear": 0*/
        }

    });
});
