import Base from '../Base'

class LogInPage extends Base {
    //set up getters for the login page
    get logInForm() {
        return $('#login_form')
    }

    get userNameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    get error() {
        return $('.alert-error')
    }

    //create functions for the login page
    formIsVisible() {
        this.logInForm.waitForExist()
    }

    fillForm(username, password) {
        this.userNameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm() {
        this.submitButton.click()
    }

    // logIn(username, password) {
    //     this.logInForm.waitForExist()
    //     this.userNameInput.setValue(username)
    //     this.userNameInput.setValue(password)
    //     this.submitButton.click()
    // }

    logIn(username, password) {
        this.formIsVisible()
        this.fillForm(username, password)
        this.submitForm()
    }
}

export default new LogInPage()
