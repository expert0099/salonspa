import { ExpressSearchPage } from './../pages/express-search/express-search';
import { ProfilePage } from './../pages/profile/profile';
import { PasswordUpdatePage } from './../pages/password-update/password-update';
import { ProfileUpdatePage } from './../pages/profile-update/profile-update';
import { ReviewsPage } from './../pages/reviews/reviews';
import { PaidBookingsPage } from './../pages/paid-bookings/paid-bookings';
import { BookingsPage } from './../pages/bookings/bookings';
import { MessagesPage } from './../pages/messages/messages';
import { MainPage } from './../pages/main/main';
import { SplashPage } from './../pages/splash/splash';
import { HomePage } from './../pages/home/home';
import { ListingPage } from './../pages/listing/listing';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { UserdataProvider } from '../providers/userdata/userdata';
import { RegisterPage } from '../pages/register/register';
import { WebserviceProvider } from '../providers/webservice/webservice';
import { timer } from 'rxjs/observable/timer';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any
  userid: any;
  organization_name: any;
  userDetails: any;
  userIDs: any;
  username: any;
   userTypes: any; 
   public myItem : any;
  messagesPage: MessagesPage;
  bookingpage: BookingsPage;
  paidBookings: PaidBookingsPage;
  reviews: ReviewsPage;
  expressSearch: ExpressSearchPage;
  showSplash = true; // <-- show animation


  userID: any;
  @ViewChild(Nav) nav: Nav;

  accountPages: PageInterface[] = [
    {title: 'Messages', name: 'MessagesPage', component: MessagesPage, icon:'log-out'},
    {title: 'Bookings', name: 'BookingsPage', component: BookingsPage, icon:'log-out'}
  ];

  loggedInPages: PageInterface[] = [
    {title: 'Logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true}
  ];

  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', name: 'RegisterPage', component: RegisterPage, icon: 'person-add' }
  ]

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public userdata: UserdataProvider,
    public events: Events,
    public menuCtrl: MenuController,
    public webservices: WebserviceProvider,
    public modalCtrl: ModalController
  ) {

      platform.ready().then(() => {
        this.statusBar.styleDefault();
        //this.splashScreen.hide();
        console.log('this');
        let splash = this.modalCtrl.create(SplashPage);
        splash.present();

        //console.log('platform eady ' + this.username);
        this.userIDs = this.userdata.userid;
        //console.log('iddd ' + this.userIDs);
        this.userdata.getUserID().then((result) => {
          this.userid = result;
        });
        /*let cus_splash = this.modalCtrl.create(SplashPage);
          cus_splash.present();*/

        
          this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        console.log('hsLogged' + hasLoggedIn);
        if (hasLoggedIn) {
          this.rootPage = MainPage;
        } else {
          this.rootPage = MainPage;
        }
        //this.platformReady();
      });
        
    });

      
      
      this.events.subscribe('user:login', () => {
        let userIDD = this.userdata.getUserID();
        console.log(userIDD);
        console.log('yess');
      });

      let username = this.storage.get('username');
      let userAllData = this.userdata.getUserAllData();

      this.userdata.getUsername()
      .then(result => {
        this.username = result;
        console.log(this.username);
      });

      

     
        
      

      this.userdata.hasLoggedIn().then((hasLoggedIn) => {
        this.enableMenu(hasLoggedIn === true);
        console.log('yes this is user data');
        if(this.userdata.userAllData){
          this.userTypes = this.userdata.userAllData.user_row.user_type;
          this.loginusertype(this.userTypes);
        }else{
          this.userTypes = '';
        }
        
      });

      this.enableMenu(true);
      this.listenToLoginEvents();

      this.userid = this.userdata.userid;
      console.log('useridddd ' + this.userID);
  }

  enableMenu(loggedIn: boolean) {
     this.myItem = localStorage.getItem('usertype');
    console.log(this.myItem);
    if(this.myItem){
    this.loginusertype(this.myItem);
    }
    this.menuCtrl.enable(loggedIn, 'loggedInMenu');
    this.menuCtrl.enable(!loggedIn, 'loggedOutMenu');
  }

  loginusertype(typeofusers: string){
    
    typeofusers = typeofusers.replace(/^"(.*)"$/, '$1');
    console.log(typeofusers);
    this.userTypes = typeofusers ;
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  openModal(page: any){
    this.menuCtrl.close();
    console.log("page: " + page);
    let modal = this.modalCtrl.create(page, {userID : this.userid});
    modal.present();
  }

  onLoad(page: any){
    this.menuCtrl.close();
    console.log(page);
    this.nav.setRoot(page).catch((err)=>{
      console.log('Errrrr ' + err);
    })
  }

  openPage(page: PageInterface){
    console.log('Page Name: '+ page.name);
    let params = {};
    this.menuCtrl.close();

    if(page.index) {
      params = { tabIndex: page.index };
    }
    this.nav.setRoot(page.name, params).catch((err) => {
      console.log("ERROR " + err);
    });

    if(page.logsOut){
      // Give the menu time to close before changing to logged out
      this.nav.setRoot(page.name, params).catch((err) => {
        console.log(err);
      })
      this.userdata.logout();
    }
  }

  
}

