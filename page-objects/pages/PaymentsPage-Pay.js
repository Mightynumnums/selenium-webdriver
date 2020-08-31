import Base from '../Base'

class PaymentPagePay extends Base {
    get paySavedPayeeTab() {
        return $('#tabs > ul > li:nth-child(1) > a')
    }

    get payee() {
        return $('#sp_payee')
    }

    get account() {
        return $('#sp_account')
    }

    get amount() {
        return $('#sp_amount')
    }

    get datePicker() {
        return $('#sp_date')
    }

    get description() {
        return $('#sp_description')
    }

    get submitFormButton() {
        return $('#pay_saved_payees')
    }

    get successMessage() {
        return $('#alert_content')
    }

    selectPaySavedPayeeTab() {
        this.paySavedPayeeTab.waitForExist()
        this.paySavedPayeeTab.click()
    }

    makeSelectionForPayee(value, nameOfPayee) {
        this.payee.waitForExist()
        this.payee.selectByAttribute(value, nameOfPayee)
    }

    fillInAmount(amount) {
        this.amount.waitForExist()
        this.amount.setValue(amount)
    }

    pickDate(date) {
        this.datePicker.waitForExist()
        this.datePicker.setValue(date)
    }

    fillDescription(text) {
        this.description.waitForExist()
        this.description.setValue(text)
    }

    fillForm(amount, date, description) {
        this.amount.setValue(amount)
        this.datePicker.setValue(date)
        this.description.setValue(description)
    }

    submitForm() {
        this.submitFormButton.waitForExist()
        this.submitFormButton.click()
    }
}

export default new PaymentPagePay()
