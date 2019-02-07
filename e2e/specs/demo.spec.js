const assert = require('chai').assert;
const login = require('../Page/Login.po');
const AddObjecto = require('../Page/addObjeto.po');
const vop = require('../Page/viewObjetosPers.po');

const Menu  = require('../Page/menu.po');
const Remove = require('../Page/remove.po');
const Edit_object = require('../Page/edit_object.po');
const SearchObjeto = require('../Page/searchObjeto.po');
const AddCampo = require('../Page/addCampoAObjeto');
const SearchCampo = require('../Page/searchCampoRelaciones.po');

describe('Test Suite',()=>{
    beforeEach(()=>{
       login.iniciarSecion();
    });
    /*
    // PRIMER TEST CASE
    it('Verificar la existencia de un Objeto Personalizado en Salesforce', ()=> {
        let menu = new Menu();
        menu.clickMenuObjetos();
        let searchEtiqueta = {'nombreEtiqueta':'Marcos'}; // ingresar la nombre del objeto a Buscar
        let searchObjeto = new SearchObjeto();
        searchObjeto.buscarObjeto(searchEtiqueta.nombreEtiqueta);//imprime en consola si existe el objeto
    });
  */
     /*
    // SEGUNDO TEST CASE
    it('Crear un Objeto Personalizado en Salesforce',()=>{
        let menu = new Menu();
        menu.clickMenuObjetos();
        let ValuesOP = {
                "Etiqueta": "Marco",
                "EtiquetaPlural": "Marcos",
                "Sexo": "m", // sexo: f,m [f=Femenino, m=Masculino]
                "NombreObjeto": "objetoMarcos",  // el nombre de objeto tiene que ser unico
                "Descripcion": "Esto es una descripcion del Objeto Marcos",
                "NombreDelRegistro": "RegistroMarcos",
                "TipoDeDatos": "AutoNumber", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
                "MostrarFormato": 000, // solo ceros cantidad no mayor a 9
                "NumeroInicio": 1, // introducir un numero positivo
                // 1 = true, 0 = false
                "PermitirInformes": 1,
                "PermitirActividades": 0,
                "PermitirSeguimientoDeHistorial": 0,
                "PermitirGruposDeChatter": 1,
                "ClasificacionDeObjeto": 1,
                "EstadoDeImplementacion":"En desarrollo", // valores (En desarrollo, implementado)
                "PermitirBuscar": 1,
                "AgregarNotasYarchivosAdjuntos": 1,
                "IniciarAsistenteFichaPersonalizadaDespuesCrear": 0
       };
        let addObjeto = new AddObjecto();
        addObjeto.CrearObjetoPersonalizado(ValuesOP);
        addObjeto.GuardarObjeto();
        menu.clickMenuObjetos();
        let searchObjeto = new SearchObjeto();
        let objetoagregado = searchObjeto.buscarObjeto(ValuesOP.Etiqueta);
         addObjeto.detalleObjeto(objetoagregado);
         assert.equal(ValuesOP.Etiqueta, objetoagregado,"No se agrego el Objeto !!!!!!!");

         browser.pause(10000);
     });
     */
   /*
    // TERCER TEST CASE
    it('Modificar de un Objeto Personalizado',()=>{
        let menu = new Menu();
        menu.clickMenuObjetos();
        let objetoAModif = {
            "Antigua_Etiqueta": "Marco",
            "new_Etiqueta":"Miriam", //
            "new_EtiquetaPlural": "dafads",
            "new_Sexo":"f", // sexo: f,m [f=Femenino, m=Masculino]
            "new_NombreObjeto": "adfadsf", // Obligatoriamente tiene q cambiar el dato
            "new_Descripcion": "Esto es una descripcion  de de Miriam qefrq",
            "new_NombreDelRegistro": "nombre de registro",
            "new_TipoDeDatos": "Text", // valores: Text,AutoNumber [ Text= Texto, AutoNumber= Numeracion Automatica]
            "new_MostrarFormato": 00, // solo ceros cantidad no mayor a 9
            "new_NumeroInicio": 1, // introducir un numero positivo
            // 1 = true, 0 = false
            "new_PermitirInformes": 1,
            "new_PermitirActividades": 0,
            "new_PermitirSeguimientoDeHistorial": 0,
            "new_PermitirGruposDeChatter": 1,
            "new_ClasificacionObjeto": 1,
            "new_EstadoDeImplementacion":"En desarrollo", // valores (En desarrollo, implementado)
            "new_PermitirBuscar": 1
        };
        let editarObjeto = new Edit_object();
        editarObjeto.modifyObject(objetoAModif);
        browser.pause(10000);
    });
     */
    // CUARTO TEST CASE

    /*it('Eliminar un Objeto Pesonalizado',()=>{
        let menu = new Menu();
        menu.clickMenuObjetos();
        let  objetoAeliminar ={ 'nameEtiqueta':'Miriam' };
        let remove = new Remove();
        remove.eliminarObjeto(objetoAeliminar.nameEtiqueta);
        let searchObjeto = new SearchObjeto();
        searchObjeto.buscarObjeto(objetoAeliminar.nameEtiqueta);
    });
  */
    // QUINTO TEST CASE
    it('Verificar que permita agregar  un campo de tipo fecha a un objeto',()=>{
       let menu = new Menu();
       menu.clickMenuObjetos();
       let objetoAmodificar = {
           'nombreObjeto' : 'Ariel',
            'nombreCampo' : 'Fecha5'
       };
       let addCampo = new AddCampo();
       addCampo.addCampoAobjeto(objetoAmodificar.nombreObjeto,objetoAmodificar.nombreCampo);
       let searchCampos = new SearchCampo();
       let campo = searchCampos.buscarObjeto(objetoAmodificar.nombreCampo);
       console.log(campo);

       browser.pause(10000);


    });
});
