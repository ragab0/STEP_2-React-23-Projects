import { lazy } from "react";


import Pop_01_img from "../imgs/pop/01.png";
import Pop_02_img from "../imgs/pop/02.png";
import Pop_03_img from "../imgs/pop/03.png";
import Pop_04_img from "../imgs/pop/04.png";
import Pop_05_img from "../imgs/pop/05.png";


import App_01_img from "../imgs/01.png";
import App_02_img from "../imgs/02.png";
import App_03_img from "../imgs/03.png";
import App_04_img from "../imgs/04.png";
import App_05_img from "../imgs/05.png";
import App_06_img from "../imgs/06.png";
import App_07_img from "../imgs/07.png";
import App_08_img from "../imgs/08.png";
import App_09_img from "../imgs/09.png";
import App_10_img from "../imgs/10.png";
import App_11_img from "../imgs/11.png";
import App_12_img from "../imgs/12.png";
import App_13_img from "../imgs/13.png";
import App_14_img from "../imgs/14.png";
import App_15_img from "../imgs/15.png";
import App_16_img from "../imgs/16.png";
import App_17_img from "../imgs/17.png";
import App_18_img from "../imgs/18.png";
import App_19_img from "../imgs/19.png";
import App_20_img from "../imgs/20.png";
import App_21_img from "../imgs/21.png";
import App_22_img from "../imgs/22.png";
import App_23_img from "../imgs/23.png";



let Pop_01 = lazy(() => import("../../0Pop-zroll-apps/01-First-Scrim/app"));
let Pop_02 = lazy(() => import("../../0Pop-zroll-apps/02-Sec-Scrim/app"));
let Pop_03 = lazy(() => import("../../0Pop-zroll-apps/03-Third-Scrim/app"));
let Pop_04 = lazy(() => import("../../0Pop-zroll-apps/04-Fourth-Scrim/app"));
let Pop_05 = lazy(() => import("../../0Pop-zroll-apps/05-md-editor/app"));


let App_01 = lazy(() => import('../../01-birthday-reminder/setup/src/App'));
let App_02 = lazy(() => import("../../02-tours/setup/src/App"));
let App_03 = lazy(() => import('../../03-reviews/setup/src/App'));
let App_04 = lazy(() => import('../../04-accordion/setup/src/App'));
let App_05 = lazy(() => import('../../05-menu/setup/src/App'));
let App_06 = lazy(() => import('../../06-tabs/setup/src/App'));
let App_07 = lazy(() => import('../../07-slider/setup/src/App'));
let App_08 = lazy(() => import('../../08-lorem-ipsum/setup/src/App'));
let App_09 = lazy(() => import('../../09-color-generator/setup/src/App'));
let App_10 = lazy(() => import('../../10-grocery-bud/setup/src/App'));
let App_11 = lazy(() => import('../../11-navbar/setup/src/App'));
let App_12 = lazy(() => import('../../12-sidebar-modal/setup/src/App'));
let App_13 = lazy(() => import('../../13-stripe-submenus/setup/src/App'));
let App_14 = lazy(() => import('../../14-cart/setup/src/index'));
let App_15 = lazy(() => import('../../15-cocktails/setup/src/index'));
let App_16 =  lazy(() => import('../../16-markdown-preview/setup/src/App'));
let App_17 =  lazy(() => import('../../17-random-person/setup/src/App'));
let App_18 =  lazy(() => import('../../18-pagination/setup/src/App'));
let App_19 =  lazy(() => import('../../19-stock-photos/setup/src/App'));
let App_20 =  lazy(() => import('../../20-dark-mode/setup/src/App'));
let App_21 =  lazy(() => import('../../21-movie-db/setup/src/index'));
let App_22 =  lazy(() => import('../../22-hacker-news/setup/src/App'));
let App_23 =  lazy(() => import('../../23-quiz/setup/src/index')); /** My app */
// let App_23 =  lazy(() => import('../../23-quiz/final/src/index')); /** Finall app */


export const appsAPI = [
  [
    {
      link: "0Pop-zroll-apps/01-First-Scrim",
      Comp: Pop_01,
      srcImg: Pop_01_img,
      name: "pop-01"
    },
    {
      link: "0Pop-zroll-apps/02-Sec-Scrim",
      Comp: Pop_02,
      srcImg: Pop_02_img,
      name: "pop-02"
    },
    {
      link: "0Pop-zroll-apps/03-Third-Scrim",
      Comp: Pop_03,
      srcImg: Pop_03_img,
      name: "pop-03"
    },
    {
      link: "0Pop-zroll-apps/04-Fourth-Scrim",
      Comp: Pop_04,
      srcImg: Pop_04_img,
      name: "pop-04"
    },
    {
      link: "0Pop-zroll-apps/05-Fifth-Scrim",
      Comp: Pop_05,
      srcImg: Pop_05_img,
      name: "pop-05"
    },
  ],
  [
    {
      name: "birthday",
      description: "",
      Comp: App_01,
      srcImg: App_01_img,
      link: "01-birthday-reminder",
    },{
      name: "tours",
      description: "",
      Comp: App_02,
      srcImg: App_02_img,
      link: "02-tours",
    },{
      name: "reviews",
      description: "",
      Comp: App_03,
      srcImg: App_03_img,
      link: "03-reviews",
    },{
      name: "accordion",
      description: "",
      Comp: App_04,
      srcImg: App_04_img,
      link: "04-accordion",
    },{
      name: "menu",
      description: "",
      Comp: App_05,
      srcImg: App_05_img,
      link: "05-menu",
    },{
      name: "tabs",
      description: "",
      Comp: App_06,
      srcImg: App_06_img,
      link: "06-tabs",
    },{
      name: "slider",
      description: "",
      Comp: App_07,
      srcImg: App_07_img,
      link: "07-slider",
    },{
      name: "lorem-ipsum",
      description: "",
      Comp: App_08,
      srcImg: App_08_img,
      link: "08-lorem-ipsum",
    }
    // ,{
    //   name: "color-generator",
    //   description: "",
    //   Comp: App_09,
    //   srcImg: App_09_img,
    //   link: "09-color-generator",
    // }
    ,{
      name: "grocery-bud",
      description: "",
      Comp: App_10,
      srcImg: App_10_img,
      link: "10-grocery-bud",  
    },{
      name: "navbar",
      description: "",
      Comp: App_11,
      srcImg: App_11_img,
      link: "11-navbar",  
    },{
      name: "sidebar-modal",
      description: "",
      Comp: App_12,
      srcImg: App_12_img,
      link: "12-sidebar-modal",  
    },{
      name: "stripe-submenus",
      description: "",
      Comp: App_13,
      srcImg: App_13_img,
      link: "13-stripe-submenus",  
    },{
      name: "cart",
      description: "",
      Comp: App_14,
      srcImg: App_14_img,
      link: "14-cart",  
    },{
      name: "cocktails",
      description: "",
      Comp: App_15,
      srcImg: App_15_img,
      link: "15-cocktails",
    }
  ]
  , 
  [
    {
      name: "markdown-preview",
      description: "",
      Comp: App_16,
      srcImg: App_16_img,
      link: "16-markdown-preview",
    },{
      name: "random-person",
      description: "",
      Comp: App_17,
      srcImg: App_17_img,
      link: "17-random-person",
    },{
      name: "pagination",
      description: "",
      Comp: App_18,
      srcImg: App_18_img,
      link: "18-pagination",
    },{
      name: "stock-photos",
      description: "",
      Comp: App_19,
      srcImg: App_19_img,
      link: "19-stock-photos",
    },{
      name: "dark-mode",
      description: "",
      Comp: App_20,
      srcImg: App_20_img,
      link: "20-dark-mode",
    },{
      name: "movie-db",
      description: "",
      Comp: App_21,
      srcImg: App_21_img,
      link: "21-movie-db",
    },{
      name: "hacker-news",
      description: "",
      Comp: App_22,
      srcImg: App_22_img,
      link: "22-hacker-news",
    },{
      name: "quiz-app",
      description: "",
      Comp: App_23,
      srcImg: App_23_img,
      link: "23-quiz",
    }
  ],
]



/**
 * 07 project (DONE);
 * // // THE BEST APP, THE GOOD WORK;
 * 
 * 10 project (DONE);
 * // // THOE GOOD work
 * 
 * 13 project (DONE);
 * // // THE BAAD, THE UGLy, THE GOOD WORK :D;
 * // // Done THE POSition..;
 * 
 * 
 * 15 project (DONE); 
 * // // THE GOOD WORK, THE GOOD APP;
 * 
 * 17 project (DONE);
 * // // CRAZY logic!;
 * 
 * 18 project (DONE);
 * // // THE GOOD stackoverflow, so THE GOOD LOGIC;
 * 
 * 19 project (DONEEEEE)
 * // // THE GOOD APP, THE BEST WORK;
 * 
 * 21 project (DOOOOONE)
 * // // THE BEST WORK, THE my WORK;
 * 
 * 22
 * // // THE BEST WORK, THE my WORK;
 * 
 * 
 */


/**
 * 09 Internet wasn't ..;
 * 23 It was enough ..;
 * 
 */
