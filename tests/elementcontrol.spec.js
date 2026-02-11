import {test, expect} from '@playwright/test'

test('element control', async({page}) => {

    //test.setTimeout(20000)
   // test.slow()

    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await expect(page.getByRole('button',{name:'Yes'})).toBeEnabled()
    // await page.getByRole('button',{name:'Yes'}).click()
    // await expect(page.getByText('You selected "Yes"',{exact:true})).toContainText('No')




    // let text= await page.getByText('You selected "Yes"',{exact:true}).textContent()
    // console.log(text);

    // //link
    // await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0&scenario=1')
    // await page.getByRole('link' , {name: 'Men', exact:true}).click()
    // 

    //checkbox

    // await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    // await page.locator('#domain_a').check()
    // //await expect(page.locator('#domain_a')).toBeChecked()
    // //await page.locator('#domain_a').uncheck()
    // await expect(page.locator('#domain_a')).not.toBeChecked()

    // //radio button
    // await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    // await page.locator('#attende').check()

    //single select dropdown
    // await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
    // await page.locator('#country_code').selectOption({label:'+92'})
    // await page.locator('#country_code').selectOption({index:3})
    // await page.locator('#country_code').selectOption('+44')

    //multi select

    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
    await page.locator('#select-multiple-native').selectOption(['Fjallraven - Foldsac...', 'Mens Casual Premium ...', 'Mens Cotton Jacket...'])
    await expect(page.getByRole('button',{name:'Add'})).toHaveAttribute('class', 'bg-orange-500 p-2 text-white rounded w-[150px]')
    await expect.soft(page.getByRole('button',{name:'Add'}),'it should match the colour').toHaveCSS('background-color','rgb(249, 115)')
    await page.getByRole('button',{name:'Add'}).click()
    

    await expect(page.locator('//tbody//tr/td[1]'),'should contain text').toContainText(['Mens Cotton Jacket...'])
    await expect(page.locator('//tbody//tr/td[1]')).toHaveCount(3)
    let alltext = await page.locator('//tbody//tr/td[1]').allTextContents()
    console.log(alltext); 

    //auto sugg dynamic dropdown

    // await page.goto('https://www.amazon.in/')
    // await page.getByPlaceholder('Search Amazon.in').fill('mobile')
    // await page.locator('//div[@class="left-pane-results-container"]/div').last().waitFor()
    //  let allloc= await page.locator('//div[@class="left-pane-results-container"]/div').all()

    //  for(let loc of allloc)
    //  {
        
    //     let text= await loc.textContent()
    //     console.log(text);
    //     if(text.includes('7000'))
    //     {
    //         await loc.click()
    //         break
    //     }
        
    //  }


    // await page.pause()
});