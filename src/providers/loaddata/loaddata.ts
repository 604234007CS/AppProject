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

}
