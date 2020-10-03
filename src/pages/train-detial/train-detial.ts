import { HttpClient } from '@angular/common/http';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-train-detial',
  templateUrl: 'train-detial.html',
})
export class TrainDetialPage {
  training: any=[];
  // data: Object=[];

  Tid;
  data:any=[];
  id;
  postdata: any = {};
  idp;
  constructor(public navCtrl: NavController, public navParams: NavParams,public datas: LoaddataProvider, public http: HttpClient ) {
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
    let url = 'http://localhost/Appservice/regis/regis.php';

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

 

  Name1(T_ID){
    console.log(T_ID);
    this.navCtrl.push("Name1Page",T_ID);
  }

 
}