import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-participants-datadetail',
  templateUrl: 'participants-datadetail.html',
})
export class ParticipantsDatadetailPage {
  training: any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,
              public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsDatadetailPage');
    this.training = this.navParams.data;
    console.log(this.training);
  }

  deletedata(regis_id){
    let url = "http://localhost/Appservice/deleteregis.php";

    let postdata = new FormData();
    postdata.append('regis_id',regis_id.toString());

    this.http.post(url,postdata)
    .subscribe(data =>{
      if(data != null){
        this.navCtrl.pop();
      }
    },error=>{
    
    });
  }


  Evaluation(){
    this.navCtrl.push("EvaluationPage");
  }

  Name1(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name1Page",T_ID);
  }

  openfile(){
    this.navCtrl.push("OpenfilePage")
  }


  
  btdelete(regis_id){
    let alert1 = this.alertCtrl.create({
      title: 'ยืนยันการลบ',
      message:'คุณต้องการลบรายการนี้ หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () =>{
          }
        },
        {
          text: 'ใช่',
          handler: () => {
          this.deletedata(regis_id)
          }
        }
      ]
    });
    alert1.present();
  }

  cer(){
    this.navCtrl.push("CerPage")
  }
}
