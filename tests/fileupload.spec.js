import{test, expect} from '@playwright/test'
import path from 'path';


test('fileupload', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.co/')
    console.log(__dirname);
    

    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../XpathPW.txt'))
     //setInputFiles('C:/Users/User/OneDrive/Desktop/playwrightmrn/XpathPW.txt')
    await page.getByRole('button', {name:'Upload Single File'}).click()
    let msg= await page.locator('#singleFileStatus').textContent()
    expect(msg).toContain('XpathPW.txt')   
    
});

test('fileupload multiple', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    

    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'../XpathPW.txt'), path.join(__dirname,'../jenkins.txt')])
     //setInputFiles('C:/Users/User/OneDrive/Desktop/playwrightmrn/XpathPW.txt')
    await page.getByRole('button', {name:'Upload Multiple Files'}).click()
    let msg= await page.locator('#multipleFilesStatus').textContent()
    expect(msg).toContain('XpathPW.txt', 'jenkins.txt')
    


   
    
});