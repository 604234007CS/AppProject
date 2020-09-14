import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LecturerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer',
  templateUrl: 'lecturer.html',
})
export class LecturerPage {

  logindata :any =[];
  trianlecturer: any;
  train: any;

  acountuser;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerPage');
    this.logindata = this.navParams.data;
    console.log(this.logindata);
  }



  goedit1(data){
    this.navCtrl.push("EditLecturerPage",{
      acountuser:data
    });
   }

   LecturerData(id){
     this.navCtrl.push("LecturerDataPage",id);
    // console.log(id);
    
   }


}
