import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { LecturerDatadetialPage } from '../lecturer-datadetial/lecturer-datadetial';
/**
 * Generated class for the LecturerDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer-data',
  templateUrl: 'lecturer-data.html',
})
export class LecturerDataPage {
  id;
  lec : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerDataPage');
  }

  ionViewWillEnter() {
    console.log(this.id);

    let url: string = "http://localhost/Appservice/lecturer/lecturer_data.php";
    let dataPost = new FormData();
    dataPost.append('id', this.id);
    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
        // console.log(data);
        this.lec = data;
        console.log(this.lec);
  
  });

}

getdetail(){
  this.navCtrl.push(LecturerDatadetialPage);
}
}


