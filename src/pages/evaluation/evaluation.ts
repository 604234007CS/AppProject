import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainPage } from '../train/train';

/**
 * Generated class for the EvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluationPage');
  }


  Train(){
    this.navCtrl.push(TrainPage);
  }
}
