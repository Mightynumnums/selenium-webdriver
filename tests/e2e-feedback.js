import { short } from '../lib/timeouts'
import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('E2E Tests - Feedback Form Flow', () => {
    it('Should load feedback page', () => {
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('Should submit feedback form', () => {
        FeedbackPage.fillOutForm(
            'Aleks',
            'test@test.com',
            'Test Subject',
            'Sample test text to test the test!'
        )
        FeedbackPage.submitForm()
    })
})
