import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiRoot: string = "http://challenger18.rankactive.info/getData.php";

  dataReq: any;
  
  constructor(private http: HttpClient){
    this.getData();
    this.apiRoot = "http://challenger18.rankactive.info/getData.php?api=1";
  }

  getData() {
    console.log("GET");
    this.http.get(this.apiRoot).subscribe(res => this.dataReq = res);
  }

}
