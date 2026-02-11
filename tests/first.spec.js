import {test} from '@playwright/test'


test.describe('group of test', ()=>{

test('Sample script @reg',async({browser})=>{

    const context=  await browser.newContext() // like incagnatio browser a fresh browser does not contain any history or cookies 
     const page = await context.newPage()
     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
     await page.pause()

})


test('Sample script1',async({page})=>{

     await page.goto('https://playwright.dev/docs/test-fixtures')
     await page.pause()

})




})


test.describe('group of test', {tag:'@smoke'},()=>{

test('Sampl',async({browser})=>{

    const context=  await browser.newContext() // like incagnatio browser a fresh browser does not contain any history or cookies 
     const page = await context.newPage()
     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
     await page.pause()

})


test('Samp1',async({page})=>{

     await page.goto('https://playwright.dev/docs/test-fixtures')
     await page.pause()

})




})


//test annotations
// test.skip()
//test.only()
//test.fixme()
//test.fail()
//test.describe()






// new Promise(resolve, reject

//     resolve()
// )

// function sub (a) {

//     console.log(a);
    
    
// }


// //sub(10)



// let func1= (a)=>{

// console.log(a);


// }

// func1(20)