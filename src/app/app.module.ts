import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseServiceProvider } from '../providers/course-service/course-service';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { ThemePage } from '../pages/theme/theme';
import { VideoPlayer } from '@ionic-native/video-player';
import { YoutubeProvider } from '../providers/youtube/youtube';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ThemePage
    //,   ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ],
    
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ThemePage
 //   ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CourseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseServiceProvider,
    ThemeServiceProvider,
    VideoPlayer,
    YoutubeProvider
  ]
}) 

export class AppModule {}
