import {test} from '@playwright/test'
//import './hooks.spec.js'


test('Sample script1',async({page})=>{

     await page.goto('https://demoqa.com/automation-practice-for')
     console.log( await page.locator('#subjectsInput').isEditable());
    await page.locator('#subjectsInput').fill('hjjjh')
     
    
     await page.pause()

})


test('test1', () => {

    console.log('test1');
    
    
});