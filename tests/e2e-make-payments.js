import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'

describe('E2E Tests - Make Payments', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
        NavBar.insideNavbarIsVisible()
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
