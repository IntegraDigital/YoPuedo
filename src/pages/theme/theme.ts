import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';
import { HttpModule } from'@angular/http';
import { ThemeServiceProvider } from '../../providers/theme-service/theme-service';

@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {
  videoOptions: VideoOptions;  
  videoUrl: string;
  themes: any;
  id:number;
  constructor(
    private videoPlayer: VideoPlayer,
    public navCtrl: NavController,
    public navParams: NavParams,
    private themeservice: ThemeServiceProvider
  ) {
    this.id = this.navParams.data;
    this.obtenerThemes(this.id);
  }

  public playVideo(){
    this.videoOptions = {volume : 1.0};
    this.videoPlayer.play('http://{{ theme.dir}}').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });    
}
public stopPlayingVideo(){
    this.videoPlayer.close();
    console.log("Video se ha detenido")
}

  obtenerThemes(id:number){
    this.themeservice.getThemes(id).subscribe((data) => {
    this.themes =  data;
     //.filter(theme => theme.course.id == id);
       console.log(data);
       this.playVideo()
    },
    (error) => {
     console.log(error);
    });
  }    
  
}
