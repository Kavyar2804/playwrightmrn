import {test} from '@playwright/test'

test('locators', async({page}) => {

    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // // await page.locator('//input[@id="name"]').fill('abc')
    // //css/xpath
    // //page.locator('css/xpath expression')

    // //built in locators or getby methods

    // await page.getByPlaceholder('Enter your name').fill('xyz')
     

    //  await page.getByLabel('Email Id').fill('xyz@gmail.com')

    //  await page.getByText('With ToolTip').click()

    //  await page.goto('https://demoapps.qspiders.com/ui/image/linkImage?sublist=1')
    //  await page.getByAltText('broken image').nth(1).click()
    //  //first()
    //  //last()
    //  //nth

    //  await page.goto('https://demo.nopcommerce.com/computers')
    //  await page.getByTitle('Show products in category Desktops').last().click()

    //  await page.goto('https://demo.nopcommerce.com/')
    //  await page.getByPlaceholder('Search store').fill('laptop')
    //  //await page.getByRole('search', {name:'Search store'}).fill('mobile')
    //  await page.waitForTimeout(2000)
    //  await page.getByRole('button', {name: 'Search'}).click()

    await page.goto('https://www.saucedemo.com/')
    await page.getByTestId('user-name').fill('abc')

     await page.pause()

});