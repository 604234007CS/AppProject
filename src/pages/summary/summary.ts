import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
declare var google;

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  sum_Clarity  : any = {};
  sum_Ability   : any = {};
  sum_ContentAssociation   : any = {};
  sum_Completeness   : any = {};
  sum_BeforeTraining  : any = {};
  sum_AfterTraining   : any = {};
  sum_Applied : any = {};
  sum_KnowledgeGained : any = {};
  sum_Transferable  : any = {};



  constructor(public navCtrl: NavController, public navParams: NavParams, public loaddata : LoaddataProvider,public http: HttpClient) {
    // this.showchart();
    this.showchart1();
    // this.showchart2();
    // this.showchart3();
    // this.showchart4();
    // this.showchart5();
    // this.showchart6();
    // this.showchart7();
    // this.showchart8();
    // this.showchart9();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
  }


  showchart1(){
    this.loaddata.sum_clairity().subscribe(data=>{
      this.sum_Clarity = data;
      console.log(data);
    var dataset = new google.visualization.DataTable();
        dataset.addColumn('string', 'Topping');
        dataset.addColumn('number', 'Slices');
        for(let x of this.sum_Clarity){
          dataset.addRows([
            [x['Clarity'], parseInt(x['num'])],
          ]);
        }
        // dataset.addRows([
        //   // [this.sum_live[0]['live'], parseInt(this.sum_live[0]['num'])],
        //   // [this.sum_live[1]['live'], parseInt(this.sum_live[1]['num'])],
        //   // [this.sum_live[2]['live'], parseInt(this.sum_live[2]['num'])]

         
        // ]);
        // Set chart options
        var options = {'title':'นักเรียนอาศัยอยู่กับ',
                       'width':400,
                       'height':300};
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(dataset, options);
      });
        
  }


  

  // showchart2(){

  // }

}
