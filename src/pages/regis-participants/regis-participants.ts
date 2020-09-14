import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-regis-participants',
  templateUrl: 'regis-participants.html',
})
export class RegisParticipantsPage {


  postdata: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  Register1(){
    let url = 'http://127.0.0.1/AppService/participants/insert_regis.php';

    let postdataset = new FormData();
    postdataset.append('DirName', this.postdata.DirName);
    postdataset.append('Name', this.postdata.Name);
    postdataset.append('Tell', this.postdata.Tell);
    postdataset.append('Username', this.postdata.Username);
    postdataset.append('Password', this.postdata.Password);

    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
        alert(call.msg);
        this.navCtrl.pop();
    }else{
      alert(call.msg);
    } 
   });
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisParticipantsPage');
  }

  // gologin(){
  //   this.navCtrl.push("LoginPage")
  // }

}
