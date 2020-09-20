import { ParticipantsPage } from './../participants/participants';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LecturerPage } from '../lecturer/lecturer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logindata:any = {};

  constructor(public navCtrl: NavController ,public navParams: NavParams ,public event : Events,private storage: Storage,
    public http:HttpClient) {
       
      

    this.logindata.username = "";
    this.logindata.password = "";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  Login(){

    if(this.logindata.username != "" && this.logindata.password!= ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

      

      let url:string = "http://localhost/AppService/login.php";
      // let dataPost = JSON.stringify({
      //                   user:this.logindata.username,
      //                   pass:this.logindata.password,
      //                 });

      // this.http.post(url,dataPost)
      // .map(res=>res.json())
      // .subscribe(data=>{
      //     console.log(data);
      // });
      let dataPost = new FormData();
      dataPost.append('user', this.logindata.username);
      dataPost.append('pass', this.logindata.password);
            
      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{

        if(data != null){
        this.event.publish('username:Login');

        // let dParti = data;  //dtae
        // this.storage.set('Array',dParti);

        this.navCtrl.setRoot(ParticipantsPage,data);
        }
        console.log(data);

      });

                   
    }else{
      console.log("Enter Password");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }

  

  RegisLecturer(){
    this.navCtrl.push("RegisLecturerPage");
  }

  RegisParticipants(){
    this.navCtrl.push("RegisParticipantsPage");
  }
}