import {TrainDetialPage} from '../train-detial/train-detial';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage {
  data: Object;
 

  
  constructor(public navCtrl: NavController, public navParams: NavParams,  public datas: LoaddataProvider) {
  this.loaddata();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainPage');
    
  }

 
  loaddata(){
    this.datas.getTrain().subscribe(datas=>{
      this.data=datas;
      console.log(datas);
    });
  }
 



  getdetail(item){
    this.navCtrl.push(TrainDetialPage,item);
  }

  getItems(ev:any) {
    let val = ev.target.value;

    if (val != 0) {
      this.datas.searchtrain(val).subscribe(datas => {
        this.data = datas;
      });
    }else {
      this.loaddata();
    }
  }
}