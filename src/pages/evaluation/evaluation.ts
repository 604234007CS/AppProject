import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {
  postdata: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  Evaluation(){
    let url = 'http://localhost/Appservice/evaluate.php';
    // console.log(this.postdata.Clarity);
    
    let postdataset = new FormData();

    // postdataset.append('T_ID', this.postdata.T_ID);
    // postdataset.append('L_ID', this.postdata.L_ID);
    postdataset.append('Clarity', this.postdata.Clarity);
    postdataset.append('Ability', this.postdata.Ability);
    postdataset.append('ContentAssociation', this.postdata.ContentAssociation);
    postdataset.append('Completeness', this.postdata.Completeness);
    postdataset.append('BeforeTraining', this.postdata.BeforeTraining);
    postdataset.append('AfterTraining', this.postdata.AfterTraining);
    postdataset.append('Applied', this.postdata.Applied);
    postdataset.append('KnowledgeGained', this.postdata.KnowledgeGained);
    postdataset.append('Transferable', this.postdata.Transferable);
    postdataset.append('Suggestion', this.postdata.Suggestion);


    let callback:Observable<any>  = this.http.post(url,postdataset);
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
    console.log('ionViewDidLoad EvaluationPage');
  }



  
}
