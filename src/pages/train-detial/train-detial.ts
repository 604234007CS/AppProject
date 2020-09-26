import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  Name1(T_ID){
    this.navCtrl.push("Name1Page",T_ID);
  }

  // Evaluation(){
  //   this.navCtrl.push("EvaluationPage");
  // }

  // Register(){
  //   this.navCtrl.push("RegisterPage");
  // }

  // Participants(){
  //   this.navCtrl.push("ParticipantsPage");
  // }
}