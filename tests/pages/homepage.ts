import {expect, type Locator, type Page} from '@playwright/test'

export class Homepage {

    //-------------------------------locators-----------------------------------------------------------------


    readonly page:Page ;

    readonly admin_icon :Locator ;

    readonly Myinfo_icon:Locator;

    //-------------------------------Variables-----------------------------------------------------------------


    //------------------------------constructor ---------------------------------------------------------------

   constructor(page:Page){

    this.page = page;
    this.admin_icon = this.page.locator('//span[text()="Admin"]');
    this.Myinfo_icon = this.page.locator('//span[text()="My Info"]');
   }


    //--------------------------------Methods--------------------------------------------------------------------
      

    //--------------------------------Actions----------------------------------------------------------------------

    async openmyinfo(){

        await this.page.waitForLoadState('networkidle');
        await this.Myinfo_icon.click({timeout:100000});
    }
    //---------------------------------Assertions-------------------------------------------------------------------

    async verifyadmin_iconisdisplayed(){

        await expect(this.admin_icon).toBeVisible();
    }




}