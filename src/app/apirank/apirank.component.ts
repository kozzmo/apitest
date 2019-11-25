import { Component, OnInit } from '@angular/core';
import { ApirankService } from './apirank.service';

@Component({
  selector: 'app-apirank',
  templateUrl: './apirank.component.html',
  styleUrls: ['./apirank.component.scss']
})
export class ApirankComponent implements OnInit {

  apirankArray: any = [];

  constructor(private apirank: ApirankService) { }

  ngOnInit() {

    this.apirank.getApirank().subscribe((apirankSubscribe: any[]) => {
      this.apirankArray = apirankSubscribe;
    });
    
  }

}
