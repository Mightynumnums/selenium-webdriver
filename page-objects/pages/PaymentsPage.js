import Base from '../Base'

class PaymentsPage extends Base {
    get purchaseFCurrencyTab() {
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    get currencySelect() {
        return $('#pc_currency')
    }

    get amount() {
        return $('#pc_amount')
    }

    get usdRadioButton() {
        return $(
            '#pc_purchase_currency_form > div.board > div > article > fieldset > div:nth-child(3) > div > label:nth-child(3)'
        )
    }

    get calculateButton() {
        return $('#pc_calculate_costs')
    }

    get conversionAmount() {
        return $('#pc_conversion_amount')
    }

    get purchaseButton() {
        return $('#purchase_cash')
    }

    get successMessage() {
        return $('#alert_content')
    }

    selectPurchaseForCurrencyTab() {
        this.purchaseFCurrencyTab.waitForExist()
        this.purchaseFCurrencyTab.click()
    }

    selectCurrency(value, choice) {
        this.currencySelect.waitForExist
        this.currencySelect.selectByAttribute(value, choice)
    }

    selectAmount(amount) {
        this.amount.waitForExist()
        this.amount.setValue(amount)
    }

    selectRadioButton() {
        this.usdRadioButton.waitForExist()
        this.usdRadioButton.click()
    }

    calculateExchangeValue() {
        this.conversionAmount.waitForExist()
        this.calculateButton.waitForExist()
        if (this.amount) {
            this.calculateButton.click()
        }
    }

    clickPurchaseButton() {
        this.purchaseButton.waitForExist()
        this.purchaseButton.click()
    }

    successMessageExist() {
        this.successMessage.waitForExist()
    }
}

export default new PaymentsPage()
