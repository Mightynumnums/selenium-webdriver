import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import LogInPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLogInPage()
        LogInPage.logIn('username', 'password')
        NavBar.insideNavbarIsVisible()
    })

    it('Should make currency exchange', () => {
        const payBillsButton = $('#pay_bills_tab')
        payBillsButton.waitForExist()
        payBillsButton.click()

        const purchaseFCurrencyButton = $('#tabs > ul > li:nth-child(3) > a')
        purchaseFCurrencyButton.waitForExist()
        purchaseFCurrencyButton.click()
        browser.pause(short)

        const currencySelect = $('#pc_currency')
        currencySelect.waitForExist()
        currencySelect.selectByAttribute('value', 'GBP')

        const amount = $('#pc_amount')
        amount.waitForExist()
        amount.setValue('500')
        browser.pause(short)

        const usdradioButton = $(
            '#pc_purchase_currency_form > div.board > div > article > fieldset > div:nth-child(3) > div > label:nth-child(3)'
        )
        usdradioButton.waitForExist()
        usdradioButton.click()
        browser.pause(short)

        const calculateButton = $('#pc_calculate_costs')
        calculateButton.waitForExist()
        calculateButton.click()

        const conversionAmountResult = $('#pc_conversion_amount')
        conversionAmountResult.waitForExist()
        expect(conversionAmountResult).toHaveText(
            '295.12 pound (GBP) = 500.00 U.S. dollar (USD)'
        )

        const purchaseButton = $('#purchase_cash')
        purchaseButton.waitForExist()
        purchaseButton.click()

        const successMessage = $('#alert_content')
        successMessage.waitForExist()
        expect(successMessage).toHaveText(
            'Foreign currency cash was successfully purchased.'
        )
    })
})
