import { chromium,FullConfig } from "@playwright/test";

import { POManager } from "../tests/pages/pomanager";


async function globalSetup(config:FullConfig) {

const baseURL = config.projects[0].use.baseURL; //path to reach to baseurl 

const storagestate = config.projects[0].use.storageState;



}


export default globalSetup;
