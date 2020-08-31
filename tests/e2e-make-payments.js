import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'
import InnerNavBar from '../page-objects/components/InnerNavBar'
import PaymentPagePay from '../page-objects/pages/PaymentsPage-Pay'
import PaymentsPagePay from '../page-objects/pages/PaymentsPage-Pay'

describe('E2E Tests - Make Payments', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
        NavBar.insideNavbarIsVisible()
    })

    it('Should Make Payments', () => {
        InnerNavBar.selectPayBillsTab()

        PaymentsPagePay.paySavedPayeeTab
        PaymentsPagePay.selectPaySavedPayeeTab()

        PaymentsPagePay.payee
        PaymentsPagePay.makeSelectionForPayee('value', 'sprint')

        const account = PaymentsPagePay.account
        account.selectByVisibleText('Loan')

        PaymentsPagePay.fillForm('200', '2020-08-12', 'Rent')

        PaymentsPagePay.submitForm()

        const successMessage = PaymentsPagePay.successMessage
        successMessage.waitForExist()
        expect(successMessage).toHaveText(
            'The payment was successfully submitted.'
        )
    })
})
