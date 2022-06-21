import { ForgotPassword } from "../MODUL/ForgotPassword";

const forgotp = new ForgotPassword()

describe('validate the forgot password page',function(){

    beforeEach(function(){
        forgotp.navigate()
    })

    it('validate Logo',function(){

        forgotp.validateLogo()

    })

    it('validate text',function(){
        forgotp.validateText()
        
    })

    it('validate reset button',function(){
        forgotp.validateResetPasswordButton('Admin')
    })

    it('validate cancel button',function(){
        forgotp.validateCancel()
    })




})