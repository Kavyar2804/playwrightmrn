import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByTestId('twotabsearchtextbox').click();
  await page.getByTestId('twotabsearchtextbox').fill('laptops');
  await page.getByTestId('sac-suggestion-row-2-cell-1').getByRole('button', { name: 'laptops under' }).click();
  await page.getByRole('link', { name: 'Apply the filter Dell to' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTestId('0dc5e4eb-128f-4427-a46e-999d186991ed').getByRole('link', { name: 'Dell Inspiron 3530, Intel' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Dell-Inspiron-15-3530-Laptop-i7-1355U/dp/B0DSFP9FCS/ref=sr_1_3?crid=2SEZPB5CW237&dib=eyJ2IjoiMSJ9.KWf7W9Rv1PKtdgl7aPL40KMo8JXnZzn90oOl85FWNUXOOsO5-tpm7RV7hyDuh70vJvvhou-fNdrDTrpcucW5TvZ8RGuGFtf62hsDPM6MjWVQCntWOgCYCkoWhqPAOoluuYkNmoFdsEtkbHZa-GyDIK47g2f1Ndl2fM_kBcUmv9oxKOHy938TRRqx5jm7TT7kXq2JhVeVQSihlA_CrdVtGjwG_EYxwkF9JpypZnK9NiM.dXxQOh_ItgMg0JPuw-4YWgKODo-t__cY7Ne4Agyrrtg&dib_tag=se&keywords=laptops%2Bunder%2B70000&qid=1770692064&refinements=p_123%3A241862&rnid=91049095031&sprefix=laptops%2Caps%2C551&sr=8-3&th=1');
  await page1.getByTestId('desktop_qualifiedBuyBox').getByTestId('add-to-cart-button').click();
  await page1.getByTestId('sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
});