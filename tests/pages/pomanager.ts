import { type Page } from "@playwright/test";

import { Loginpage } from "./loginpage";

import { Homepage } from "./homepage";


export class POManager {


    //==========================================Locators======================================================

     private readonly page :Page ;
     private readonly loginpage: Loginpage ;
     private readonly homepage : Homepage ;





    //==========================================Variables======================================================



    //===========================================Constrauctors==================================================

    constructor(page:Page){


        this.page = page ;
        this.loginpage = new Loginpage(this.page);
        this.homepage = new Homepage(this.page);


    }

    //===========================================Methods========================================================
    
    getLoginPage(): Loginpage {

        return this.loginpage;
    }

    getHomePage(): Homepage {

        return this.homepage;
    }





}

