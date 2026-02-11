import {test,expect} from '@playwright/test'

test('assertion methods', async({page}) => {

    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // //await expect(page).toHaveTitle('DemoApps | Qspiders | Text') 
    // await expect( page.getByPlaceholder('Enter your name')).toBeEditable()
    // await page.getByPlaceholder('Enter your name').fill('abc')

    // await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    // await page.locator('#domain_a').check()
    // await page.locator('#domain_a').uncheck()
    // await expect(page.locator('#domain_a')).toBeChecked()

    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    // await expect(page.locator('[class="flex"] p')).toContainText('Already have')

    // await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')

    // await expect.soft(page.locator('//tbody/tr/th'),'It should not contain').toContainText(['Playwright'])

    // await expect(page.locator('//tbody/tr[1]/th')).toHaveAttribute('scope', 'row')
    // await expect(page.locator('//tbody/tr/th')).not.toHaveCount(5)

    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await expect(page.getByRole('button', {name:'Yes'})).toHaveCSS('background-color','rgb(253, 186, 116)', {timeout:3000})
    //  await expect(page.getByRole('button', {name:'Yes'})).toHaveScreenshot()

    // actual & expected/

    let car = {

            brand: 'Tat@a',
            colour: ['black', 'white', 'grey'],
            price: [100000, 200000, 3000000], 
            model : {
                modelname1 :'harrier' ,
                modelname2  : 'safari'

            }

    }

    expect(car.brand).toEqual(expect.any(String))
    expect(car.brand).toEqual(expect.anything())
    expect(car.colour).toEqual(expect.arrayContaining(['black']))
    expect(car.model).toEqual(expect.objectContaining({modelname1:expect.any(String)}))
    expect(car.brand).toEqual(expect.stringContaining('@'))


    
});