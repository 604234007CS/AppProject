import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Generated class for the ParticipantsDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants-data',
  templateUrl: 'participants-data.html',
})
export class ParticipantsDataPage {
  id;
  lec : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsDataPage');
  }
  

  ionViewWillEnter(){
    console.log(this.id);

    let url: string = "http://localhost/Appservice/participants/participants_data.php";
    let dataPost =  new FormData();
    dataPost.append('id', this.id);
    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
      // console.log(data) 
      this.lec = data;
        console.log(this.lec);
    });
  }

  getdetail(item){
    this.navCtrl.push("ParticipantsDatadetailPage",item);
  }


}
