import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-participants-datadetail',
  templateUrl: 'participants-datadetail.html',
})
export class ParticipantsDatadetailPage {
  training: any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsDatadetailPage');
    this.training = this.navParams.data;
    console.log(this.training);
  }

  Evaluation(){
    this.navCtrl.push("EvaluationPage");
  }

  Name1(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name1Page",T_ID);
  }

  
  godelete(){
    this.navCtrl.push("DeleteTrainPage");
  }

}
