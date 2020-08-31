import Base from '../Base'

class FiltersPage extends Base {
    get description() {
        return $('#aa_description')
    }

    get formSubmitButton() {
        return $('button[type="submit"]')
    }

    get resultOfFilter() {
        return $('#filtered_transactions_for_account')
    }

    get successMessage() {
        return $('.well')
    }

    fillOutForm(description) {
        this.description.waitForExist()
        this.description.setValue(description)
    }

    submitForm() {
        this.formSubmitButton.waitForExist()
        this.formSubmitButton.click()
    }

    resultsExist() {
        this.resultOfFilter.waitForExist()
    }
}

export default new FiltersPage()
