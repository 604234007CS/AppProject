import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParticipantsDatadetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


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

}
