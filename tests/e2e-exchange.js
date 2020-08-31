import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'
import InnerNavBar from '../page-objects/components/InnerNavBar'
import PaymentsPage from '../page-objects/pages/PaymentsPage'

describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
        NavBar.insideNavbarIsVisible()
    })

    it('Should make currency exchange', () => {
        InnerNavBar.selectPayBillsTab()

        PaymentsPage.purchaseFCurrencyTab
        PaymentsPage.selectPurchaseForCurrencyTab()

        PaymentsPage.currencySelect
        PaymentsPage.selectCurrency('value', 'GBP')

        PaymentsPage.amount
        PaymentsPage.selectAmount('500')

        PaymentsPage.selectRadioButton
        PaymentsPage.selectRadioButton()

        PaymentsPage.calculateExchangeValue()

        const conversionAmountResult = PaymentsPage.conversionAmount
        expect(conversionAmountResult).toHaveText(
            '295.12 pound (GBP) = 500.00 U.S. dollar (USD)'
        )

        PaymentsPage.clickPurchaseButton()

        const successMessage = PaymentsPage.successMessage
        PaymentsPage.successMessageExist()
        expect(successMessage).toHaveText(
            'Foreign currency cash was successfully purchased.'
        )
    })
})
