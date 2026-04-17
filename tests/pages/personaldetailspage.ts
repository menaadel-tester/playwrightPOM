import {expect, type Locator, type Page} from '@playwright/test'
import { time } from 'node:console';

export class PersonalDetailsPage{

    //=====================================Locators ==========================================

    readonly page:Page ;
    readonly firstname:Locator ;
    readonly middlename:Locator;
    readonly lastname :Locator ;
    readonly save_btn :Locator ;
    readonly profile_name :Locator;





    //=======================================Variables ========================================



    //=========================================Constructors ====================================
     constructor(page:Page){

        this.page = page ;
        this.firstname = this.page.locator('//input[@name="firstName"]');
        this.middlename = this.page.locator('//input[@name="middleName"]');
        this.lastname = this.page.locator('//input[@name="lastName"]');
        this.save_btn = this.page.locator('(//button[@type="submit"])[1]');
        this.profile_name = this.page.locator('//h6[text()="mena makeen"]');

    
     }

    //=========================================Actions============================================

    async editpersonaldetails(firstname:string , middlename:string , lastname:string){
        await this.page.waitForLoadState('networkidle');
        await this.firstname.clear({timeout:70000}); 
        await this.firstname.fill(firstname);
        await this.middlename.clear({timeout:70000});
        await this.middlename.fill(middlename);
        await this.lastname.clear({timeout:70000});
        await this.lastname.fill(lastname);
        await this.save_btn.click({timeout:70000});
        await this.page.waitForLoadState('networkidle');
        await this.page.reload({timeout:80000});
    }

    //===================================Assertions ==============================================



    async verifyprofilenameisdisplayed(profilename:string){

        await expect(this.profile_name).toHaveText(profilename);
    }





}