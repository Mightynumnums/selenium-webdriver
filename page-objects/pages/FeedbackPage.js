import Base from '../Base'

class FeedbackPage extends Base {
    get feedbackForm() {
        return $('form')
    }

    get name() {
        return $('#name')
    }

    get email() {
        return $('#email')
    }

    get subject() {
        return $('#subject')
    }

    get commentText() {
        return $('#comment')
    }

    get sendMessageButton() {
        return $('input[type="submit"]')
    }

    formIsVisible() {
        this.feedbackForm.waitForExist()
    }

    formAddName(name) {
        this.name.waitForExist()
        this.name.setValue(name)
    }

    formAddEmail(email) {
        this.email.waitForExist()
        this.email.setValue(email)
    }

    formAddSubject(subject) {
        this.subject.waitForExist()
        this.subject.setValue(subject)
    }

    formAddText(text) {
        this.commentText.waitForExist
        this.commentText.setValue(text)
    }

    submitFeedbackForm() {
        this.sendMessageButton.waitForExist()
        this.sendMessageButton.click()
    }

    fillOutForm(name, email, subject, text) {
        this.formAddName(name)
        this.formAddEmail(email)
        this.formAddSubject(subject)
        this.formAddText(text)
    }

    submitForm() {
        this.submitFeedbackForm()
    }
}

export default new FeedbackPage()
