import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }

  getTrain(){
    const url = "http://localhost/AppService/train/loaddata.php";
    return this.http.get(url);
  }

  searchtrain(query){
    let url = "http://localhost/todoslim/public/search/"+query;   
    return this.http.get(url);
  }

  showRe(){
    const url = "http://localhost/Appservice/show_register.php";
    return this.http.get(url);
  }


  // สรุปการประเมิน
  sum_clairity(){
    const url = "http://localhost/Appservice/summary/sum_Clarity.php";
    return this.http.get(url);
  }


sum_ability(){
  const url = "http://localhost/Appservice/summary/sum_ability.php";
  return this.http.get(url);
  }

  sum_contentAssociation(){
    const url = "http://localhost/Appservice/summary/sum_ContentAssociation.php";
    return this.http.get(url);

  }

  sum_completeness(){
    const url ="http://localhost/Appservice/summary/sum_Completeness.php";
    return this.http.get(url);
  }

  sum_BeforeTraining(){
    const url ="http://localhost/Appservice/summary/sum_BeforeTraining.php";
    return this.http.get(url);
  }

  sum_AfterTraining(){
    const url ="http://localhost/Appservice/summary/sum_AfterTraining.php";
    return this.http.get(url);
  }

  sum_Applied(){
    const url =" http://localhost/Appservice/summary/sum_Applied.php";
    return this.http.get(url);
  }

  sum_KnowledgeGained(){
    const url ="http://localhost/Appservice/summary/sum_KnowledgeGained.php";
    return this.http.get(url);
  }

  sum_Transferable(){
    const url ="http://localhost/Appservice/summary/sum_Transferable.php";
    return this.http.get(url);
  }

 
 

}
