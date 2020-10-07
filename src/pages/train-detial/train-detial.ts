import { HttpClient } from '@angular/common/http';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as Enums from '../enums/enums';

@IonicPage()
@Component({
  selector: 'page-train-detial',
  templateUrl: 'train-detial.html',
})
export class TrainDetialPage {
  training: any=[];
  // data: Object=[];
  // cid:any=[];
  Tid;
  data:any=[];
  id;
  postdata: any = {};
  idp;
  constructor(public navCtrl: NavController, public navParams: NavParams,public datas: LoaddataProvider, 
              public http: HttpClient , public alertCtrl : AlertController) {
    // this.Tid = this.navParams.get('Tid');
    this.id = this.navParams.get('Tid');
    this.idp = this.navParams.get('Pid');
    console.log(this.idp);
    console.log(this.id);
    // this.id = this.navParams.get('Tid');
    // console.log(this.id);
    this.loaddata(this.id);
  }

  loaddata(id){
    this.datas.loaddatatraindetail(id).subscribe((data:any)=>{
        this.data = data;
        console.log(data);   
        // console.log(this.data[0]['T_ID']);
    }) 
  }
 
  regisTrain(){
    console.log(this.idp);     
    console.log(this.id);     

    let url = Enums.APIURL.URL + '/Appservice/regis/regis.php';
    let url1 = Enums.APIURL.URL + '/Appservice/checkregis.php?pid='+this.idp+'&&tid='+this.id;
    this.http.get(url1).subscribe((data:any)=>{
      console.log(data);
      console.log(data['P_ID']);


      if(data['P_ID'] == this.idp && data['T_ID'] == this.id){
        const alert = this.alertCtrl.create({
          title: 'เกิดข้อพิดผลาด',
          subTitle: 'คุณได้ลงทะเบียนนี้ไปแล้ว',
          buttons: ['OK']
          
        });
        alert.present();
      }
      // else if(data['P_ID'] != this.idp && data['T_ID'] != this.id){
      //   let setdata = JSON.stringify({
      //     P_ID: this.idp
      //   })
      // }

    })
    let postdataset = new FormData();

    postdataset.append('T_ID', this.id);
    postdataset.append('P_ID',this.idp);
   

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
    console.log('ionViewDidLoad TrainDetialPage');
    this.training = this.navParams.data;
    console.log(this.training);
  }

  // btregis(){
  //   let alert1 = this.alertCtrl.create({
  //     title: 'ยืนยันการลงทะเบียน',
  //     message:'คุณต้องการลงทะเบียน หรือไม่?',
  //     buttons: [{
  //         text: 'ยกเลิก',
  //         role: 'cancel',
  //         handler: () =>{
  //         }
  //       },
  //       {
  //         text: 'ใช่',
  //         handler: () => {
  //         this.regisTrain()
  //         }
  //       }
  //     ]
  //   });
  //   alert1.present();
  // }

 

  Name1(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name1Page",T_ID);
  }

 
}