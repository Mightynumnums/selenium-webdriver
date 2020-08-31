import App from '../page-objects/App'
import NavBar from '../page-objects/components/Navbar'

describe('E2E tests - Search', () => {
    it('Should load Home Page', () => {
        App.openHomePage()
    })

    it('Should submit search box', () => {
        const searchBox = NavBar.searchInputBox
        NavBar.search('bank')
        const resultTitle = $('h2')
        resultTitle.waitForExist()
        expect(resultTitle).toHaveText('Search Results:')
    })
})
