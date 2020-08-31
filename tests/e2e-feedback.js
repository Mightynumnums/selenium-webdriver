import { short } from '../lib/timeouts'
import App from '../page-objects/App'

describe('E2E Tests - Feedback Form Flow', () => {
    it('Should load feedback form', () => {
        App.openHomePage()
        const feedBackLink = $('#feedback')
        feedBackLink.waitForExist()
        feedBackLink.click()
        browser.pause(short)

        const feedBackTitle = $('#feedback-title')
        feedBackTitle.waitForExist()
        expect(feedBackTitle).toHaveText('Feedback')
        browser.pause(short)
    })

    it('Should submit feedback form', () => {
        const addName = $('#name')
        addName.waitForExist()
        addName.setValue('Aleks Shineleva')
        browser.pause(short)

        const addValidEmail = $('#email')
        addValidEmail.waitForExist()
        addValidEmail.setValue('testemail@test.com')
        browser.pause(short)

        const addSubject = $('#subject')
        addSubject.waitForExist()
        addSubject.setValue('Test this Test to Test')
        browser.pause(short)

        const addText = $('#comment')
        addText.waitForExist()
        addText.setValue('I dont have a question, I only have answers')
        browser.pause(short)

        const sendMessageButton = $('input[type="submit"]')
        sendMessageButton.waitForExist()
        sendMessageButton.click()
        browser.pause(short)

        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html'
        )
    })
})
