const login = require('../Page/Login.po');
const op = require('../Page/ObjetoPersonalizado.po');

describe('Test Suite',()=>{
   it('Crear un Objeto Personalizado',()=>{
       login.iniciarSecion();
            let ValuesOP = {
               "Etiqueta":"Etiqueta10",
               "EtiquetaPlural": "adf",
               "Sexo":"m", // sexo: f,m [f=Femenino, m=Masculino]
               "NombreObjeto": "objetoEtiqueta",
               "Descripcion": "Esto es una descripcion ",
               "NombreDelRegistro": "NameRegistroIs",
               "TipoDeDatos": "Text", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
               // 1 = true, 0 = false
               "PermitirInformes": 0,
               "PermitirActividades": 1,
               "PermitirSeguimientoDeHistorial": 1,
               "PermitirGruposDeChatter": 1,
               "PermitirColaboracion": 0,
               "PermitirAccesoAlaAPI_MASIVA": 0,
               "PermitirAccesoAlaAPI_TRANSMISION": 1,
               //"EstadoDeImplementacionEnDesarrollo": "1", //
               "PermitirBuscar": 1,
               "AgregarNotasYarchivosAdjuntos": 1,
               "IniciarAsistenteFichaPersonalizadaDespuesCrear": 0
             };
       let op2 = new op();
       op2.CrearObjetoPersonalizado(ValuesOP);
       op2.saveObjetoPersonalizado();

       browser.pause(50000);
   });


});
