import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EditParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-participants',
  templateUrl: 'edit-participants.html',
})
export class EditParticipantsPage {
  
  postdata: any={};
  participantdata: any = [];
 

  P_ID : string;
  Dir_Name : string;
  P_Name : string;
  Tell : string;
  Username : string;
  Password : string;
  


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http : HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditParticipantsPage');
    this.participantdata = this.navParams.data;
    console.log(this.participantdata);
    console.log(this.participantdata[0]['P_ID']);
   
    this.P_ID = this.participantdata[0]['P_ID'];
    this.Dir_Name = this.participantdata[0]['Dir_Name'];
    this.P_Name = this.participantdata[0]['P_Name'];
    this.Tell = this.participantdata[0]['Tell'];
    this.Username = this.participantdata[0]['Username'];
    this.Password = this.participantdata[0]['Password'];

    if(this.P_ID != null){
      this.postdata.P_ID = this.P_ID;
    }if(this.Dir_Name != null){
      this.postdata.Dir_Name = this.Dir_Name;
    }if(this.P_Name != null){
      this.postdata.P_Name = this.P_Name;
    }if(this.Tell != null){
      this.postdata.Tell = this.Tell;
    }if(this.Username != null){
      this.postdata.Username = this.Username;
    }if(this.Password != null){
      this.postdata.Password = this.Password;
    }
  }

  Edit(){
    let url = 'http://localhost/Appservice/participants/edit.php';

    let postdataset = new FormData();
    postdataset.append('P_ID', this.P_ID.toString());
    postdataset.append('Dir_Name', this.postdata.Dir_Name);
    postdataset.append('P_Name', this.postdata.P_Name);
    postdataset.append('Tell', this.postdata.Tell);
    postdataset.append('Username', this.postdata.Username);
    postdataset.append('Password', this.postdata.Password);

    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
        if(call.status == 200){
          alert(call.msg);
            this.navCtrl.pop();
        }else{
          alert(call.msg)
        }
    });
  }
 

}
