import{test, expect} from '@playwright/test'
import path from 'node:path';
import fs from 'fs'

test('file download', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    let customdowloadfolder = 'C:/Users/User/OneDrive/Desktop/dowload'
    let customfilename = 'some.txt'
    let customfullpath = path.join(customdowloadfolder,customfilename)
    console.log(customfullpath);
    await page.getByPlaceholder('Enter text here').fill('Playwright')
    let dowloadpromise = page.waitForEvent('download')
    await page.getByRole('button',{name:'Download'}).click()
    let dowloadfile= await dowloadpromise
    await dowloadfile.saveAs(customfullpath)

    if(fs.existsSync(customfullpath))
    {
        console.log('file is present');
        
    }
    else{
        console.log('not present');
        
    }
let filecontent = fs.readFileSync(customfullpath,'utf-8')
console.log(filecontent);
expect(filecontent).toContain('Playwright')





    
});