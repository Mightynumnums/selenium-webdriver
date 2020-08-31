import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('E2E Tests - Feedback Form Flow', () => {
    it('Should load feedback page', () => {
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('Should submit feedback form', () => {
        const addName = FeedbackPage.name
        FeedbackPage.formAddName('Aleks')

        const addValidEmail = FeedbackPage.email
        FeedbackPage.formAddEmail('test@test.com')

        const addSubject = FeedbackPage.subject
        FeedbackPage.formAddSubject('Test Subject Fluffs')

        const addText = FeedbackPage.commentText
        FeedbackPage.formAddText(
            'This is a test text to test the comment feedback form.'
        )

        const sendMessageButton = FeedbackPage.sendMessageButton
        FeedbackPage.submitFeedbackForm()
    })
})
