import { short } from '../lib/timeouts'

describe('E2E Tests - Make Payments', () => {
    it('Should log into application', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const signInButton = $('#signin_button')
        signInButton.waitForExist()
        signInButton.click()

        const logInInput = $('#user_login')
        logInInput.waitForExist()
        logInInput.setValue('username')

        const password = $('#user_password')
        password.waitForExist()
        password.setValue('password')

        const signIn = $('input[type="submit"]')
        signIn.waitForExist()
        signIn.click()

        const navTab = $('.nav-tabs')
        navTab.waitForExist()
    })

    it('Should Make Payments', () => {
        const payBillsButton = $('#pay_bills_tab')
        payBillsButton.waitForExist()
        payBillsButton.click()

        const paySavedPayee = $('#tabs > ul > li:nth-child(1) > a')

        paySavedPayee.waitForExist()
        expect(paySavedPayee).toExist()

        const payee = $('#sp_payee')
        payee.waitForExist()
        payee.selectByAttribute('value', 'sprint')

        const account = $('#sp_account')
        account.waitForExist()
        account.selectByAttribute('value', '2')
        //account.selectByVisibleText('Checking') //this will make it easier to read

        const amount = $('#sp_amount')
        amount.waitForExist()
        amount.setValue('75')

        const date = $('#sp_date')
        date.waitForExist()
        date.setValue('2020-08-12')

        const description = $('#sp_description')
        description.waitForExist()
        description.setValue('Rent')

        const payButton = $('#pay_saved_payees')
        payButton.waitForExist()
        payButton.click()

        const successMessage = $('#alert_content')
        successMessage.waitForExist()
        expect(successMessage).toHaveText(
            'The payment was successfully submitted.'
        )
        browser.pause(short)
    })
})
