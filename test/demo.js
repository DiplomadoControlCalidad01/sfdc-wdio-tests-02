var assert = require('assert');
const credencial = require('../environment').credenciales;

describe( 'login to salesforce', () => {
        it('login', ()=>{
            browser.url('https://login.salesforce.com');

            browser.waitForVisible('#theloginform',30000);
            browser.element('#username').setValue(credencial.sysadmin.user);

            browser.waitForVisible('#password',30000);
            browser.element('#password').setValue(credencial.sysadmin.password);

            browser.waitForVisible('#Login',30000);
            browser.element('#Login').click();

           // browser.waitForVisible('.filter-box.input', 30000);
           // browser.element('.filter-box.input').setValue('Gestor de Objetos');
            browser.waitForVisible('.slds-button.slds-button--neutral.onesetupCreateMenuTrigger',30000);
            browser.element('.slds-button.slds-button--neutral.onesetupCreateMenuTrigger').click();

            browser.waitForVisible('//span[contains(text(),\'Objeto personalizado\')]',30000);
            browser.element('//span[contains(text(),\'Objeto personalizado\')]').click();



            browser.waitForVisible('//iframe[contains(@id,"vfFrameId_")]');
            browser.frame(browser.element('//iframe[contains(@id,"vfFrameId_")]').value);

            browser.waitForVisible('#MasterLabel',30000);
            browser.element('#MasterLabel').setValue('TEST2');
            browser.waitForVisible('#PluralLabel',30000);
            browser.element('#PluralLabel').setValue('EtiquetaPlurales');
            browser.element('#Gender').click();
            browser.element('td#bottomButtonRow>input[name=save]').click();

            browser.pause(50000);

        })
    }

);