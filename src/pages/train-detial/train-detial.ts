import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainDetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train-detial',
  templateUrl: 'train-detial.html',
})
export class TrainDetialPage {
  training: any=[];
  // data: Object=[];

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainDetialPage');
    this.training = this.navParams.data;
    console.log(this.training);
    
  }

  RegisTrain(){

  }
  
  Name(){
    this.navCtrl.push("NamePage");
  }

  Evaluation(){
    this.navCtrl.push("EvaluationPage");
  }

  Register(){
    this.navCtrl.push("RegisterPage");
  }

  // Participants(){
  //   this.navCtrl.push("ParticipantsPage");
  // }
}
