import { ExpressResultPage } from './../pages/express-result/express-result';
import { ExpressSearchPage } from './../pages/express-search/express-search';
import { PaypalPage } from './../pages/paypal/paypal';
import { BookAServicePage } from './../pages/book-a-service/book-a-service';
import { ProfilePage } from './../pages/profile/profile';
import { PasswordUpdatePage } from './../pages/password-update/password-update';
import { ProfileUpdatePage } from './../pages/profile-update/profile-update';
import { MessagePage } from './../pages/message/message';
import { InquiryPage } from './../pages/inquiry/inquiry';
import { PaidBookingsPage } from './../pages/paid-bookings/paid-bookings';
import { ReviewsPage } from './../pages/reviews/reviews';
import { BookingsPage } from './../pages/bookings/bookings';
import { MessagesPage } from './../pages/messages/messages';
import { ReviewPage } from './../pages/review/review';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ListSinglePage } from './../pages/list-single/list-single';
import { AutocompleteLocationPage } from './../pages/autocomplete-location/autocomplete-location';
import { SingleServiceListPage } from './../pages/single-service-list/single-service-list';
import { FormsModule } from '@angular/forms';
import { SplashPage } from './../pages/splash/splash';
import { ForgotPage } from './../pages/forgot/forgot';
import { ListingPage } from './../pages/listing/listing';
import { RegisterPage } from './../pages/register/register';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { WebserviceProvider } from '../providers/webservice/webservice';
import { UserdataProvider } from '../providers/userdata/userdata';
import { IonicStorageModule } from '@ionic/storage';
import { UsernameValidator } from '../validators/username';
import { MainPage } from '../pages/main/main';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { AutocompleteServicesPage } from '../pages/autocomplete-services/autocomplete-services';
import {PayPal} from "@ionic-native/paypal";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Diagnostic } from '@ionic-native/diagnostic';
import {FileTransfer} from "@ionic-native/file-transfer";
import {AutocompleteLocationPageModule} from "../pages/autocomplete-location/autocomplete-location.module";
import {AutocompleteServicesPageModule} from "../pages/autocomplete-services/autocomplete-services.module";
import {BookAServicePageModule} from "../pages/book-a-service/book-a-service.module";
import {BookingsPageModule} from "../pages/bookings/bookings.module";
import {ExpressResultPageModule} from "../pages/express-result/express-result.module";
import {ExpressSearchPageModule} from "../pages/express-search/express-search.module";
import {ForgotPageModule} from "../pages/forgot/forgot.module";
import {InquiryPageModule} from "../pages/inquiry/inquiry.module";
import {ListSinglePageModule} from "../pages/list-single/list-single.module";
import {ListingPageModule} from "../pages/listing/listing.module";
import {LoginPageModule} from "../pages/login/login.module";
import {MainPageModule} from "../pages/main/main.module";
import {MessagePageModule} from "../pages/message/message.module";
import {MessagesPageModule} from "../pages/messages/messages.module";
import {PaidBookingsPageModule} from "../pages/paid-bookings/paid-bookings.module";
import {PasswordUpdatePageModule} from "../pages/password-update/password-update.module";
import {PaypalPageModule} from "../pages/paypal/paypal.module";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {ProfileUpdatePageModule} from "../pages/profile-update/profile-update.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {ReviewPageModule} from "../pages/review/review.module";
import {ReviewsPageModule} from "../pages/reviews/reviews.module";
import {SingleServiceListPageModule} from "../pages/single-service-list/single-service-list.module";
import {SplashPageModule} from "../pages/splash/splash.module";
import {ImgLoader, IonicImageLoader} from "ionic-image-loader";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
      AutocompleteLocationPageModule,
      AutocompleteServicesPageModule,
      BookAServicePageModule,
      BookingsPageModule,
      ExpressResultPageModule,
      ExpressSearchPageModule,
      ForgotPageModule,
      InquiryPageModule,
      ListSinglePageModule,
      ListingPageModule,
      LoginPageModule,
      MainPageModule,
      MessagePageModule,
      MessagesPageModule,
      PaidBookingsPageModule,
      PasswordUpdatePageModule,
      PaypalPageModule,
      ProfilePageModule,
      ProfileUpdatePageModule,
      RegisterPageModule,
      ReviewPageModule,
      ReviewsPageModule,
      SingleServiceListPageModule,
      SplashPageModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: 'ios-transition',
      menuType: 'overlay',
      prodMode: true,
      tabSubPages: false
    }, {
      links: [
        {component: ListingPage, name: 'ListingPage', segment: 'list-page'},
        {component: LoginPage, name: 'LoginPage', segment: 'login'},
        {component: RegisterPage, name: 'RegisterPage', segment: 'register'},
        {component: ReviewPage, name: 'ReviewPage', segment: 'review'},
        {component: MessagesPage, name: 'MessagesPage', segment: 'messages'},
        {component: BookingsPage, name: 'BookingsPage', segment: 'bookings'},
        {component: PaidBookingsPage, name: 'PaidBookingsPage', segment: 'paidbookings'},
        {component: ReviewsPage, name: 'ReviewsPage', segment: 'reviews'},
        {component: InquiryPage, name: 'InquiryPage', segment: 'inquiry'},
        {component: MessagePage, name: 'MessagePage', segment: 'message'},
        {component: ProfileUpdatePage, name: 'ProfileUpdatePage', segment: 'profileUpdate'},
        {component: PasswordUpdatePage, name: 'PasswordUpdatePage', segment: 'passwordUpdate'},
        {component: ProfilePage, name: 'ProfilePage', segment: 'profile'},
        {component: BookAServicePage, name: 'BookAServicePage', segment: 'bookservice'},
        {component: ExpressSearchPage, name: 'ExpressSearchPage', segment: 'expresssearch'},
        {component: ExpressResultPage, name: 'ExpressResultPage', segment: 'expressresult'}
      ]
    }),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
      IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ListingPage,
    ForgotPage,
    SplashPage,
    MainPage,
    SingleServiceListPage,
    AutocompleteLocationPage,
    AutocompleteServicesPage,
    ListSinglePage,
    ReviewPage,
    MessagesPage,
    BookingsPage,
    ReviewsPage,
    PaidBookingsPage,
    InquiryPage,
    MessagePage,
    ProfileUpdatePage,
    PasswordUpdatePage,
    ProfilePage,
    BookAServicePage,
    PaypalPage,
    ExpressSearchPage,
    ExpressResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    File,
    Transfer,
    Camera,
    FilePath,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceProvider,
    UserdataProvider,
    UsernameValidator,
    PayPal,
    SocialSharing,
    Diagnostic,
      FileTransfer,
      ImgLoader,
      IonicImageLoader
  ]
})

export class AppModule {
  showSubmenu: boolean = false;
  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }
}
