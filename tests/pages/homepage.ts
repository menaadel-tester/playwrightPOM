import {expect, type Locator, type Page} from '@playwright/test'

export class Homepage {

    //-------------------------------locators-----------------------------------------------------------------


    readonly page:Page ;

    readonly admin_icon :Locator ;

    //-------------------------------Variables-----------------------------------------------------------------


    //------------------------------constructor ---------------------------------------------------------------

   constructor(page:Page){

    this.page = page;
    this.admin_icon = this.page.locator('//span[text()="Admin"]');
   }


    //--------------------------------Methods--------------------------------------------------------------------

    //--------------------------------Actions----------------------------------------------------------------------

    //---------------------------------Assertions-------------------------------------------------------------------

    async verifyadmin_iconisdisplayed(){

        await expect(this.admin_icon).toBeVisible();
    }




}