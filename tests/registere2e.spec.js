import {test, expect} from '@playwright/test'
import {RegisterPage} from '../pageobjects/registerpage.js'
import rdata from '../testdata/rgisterdata.json';


rdata.forEach(({username,email,pwd},index)=>{

test(`register user #${index+1}` , async({page}) => {

   let rpage = new RegisterPage(page)

   await rpage.naviagation('https://demoapps.qspiders.com/ui?scenario=1')
  // await expect(page).toHaveTitle('Expected title')
   await rpage.registeraction(username,email,pwd)
   await page.screenshot('./screen1.png')
   await page.pause()

   //explicit waits

   await page.waitForSelector('#locator')
   await page.waitForURL('https://demoapps.qspiders.com/ui?scenario=1')
   await page.getByAltText().waitFor({state:'hidden'}) //by default it will wait for visible
   await page.waitForEvent('') //window handle, dowloads
   await page.waitForLoadState('domcontentloaded')
   await page.waitForTimeout(2000)



    
});




})
