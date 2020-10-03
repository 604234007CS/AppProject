import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-name2',
  templateUrl: 'name2.html',
})
export class Name2Page {
  id;
  register : any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage2');
    // console.log(this.id);
    let url: string = "http://localhost/Appservice/show_register.php";
    let dataPost = new FormData();
    dataPost.append('id', this.id);
    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
        console.log(data);
        // this.register = data;
        // console.log(this.register);
  
    });
  }


  // ionViewWillEnter(){
 
  
  // }
}