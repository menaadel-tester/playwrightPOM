import { type Page } from "@playwright/test";

import { Loginpage } from "./loginpage";

import { Homepage } from "./homepage";

import { PersonalDetailsPage } from "./personaldetailspage";


export class POManager {


    //==========================================Locators======================================================

     private readonly page :Page ;
     private readonly loginpage: Loginpage ;
     private readonly homepage : Homepage ;

     private readonly personaldetailspage : PersonalDetailsPage;





    //==========================================Variables======================================================



    //===========================================Constrauctors==================================================

    constructor(page:Page){


        this.page = page ;
        this.loginpage = new Loginpage(this.page);
        this.homepage = new Homepage(this.page);
        this.personaldetailspage = new PersonalDetailsPage(this.page);


    }

    //===========================================Methods========================================================
    
    getLoginPage(): Loginpage {

        return this.loginpage;
    }

    getHomePage(): Homepage {

        return this.homepage;
    }

    getPersonalDetailsPage():PersonalDetailsPage{

        return this.personaldetailspage ;
    
    }





}

