import { Component, OnInit } from '@angular/core';
import { ApirankdtService } from './apirankdt.service';

@Component({
  selector: 'app-apirankdt',
  templateUrl: './apirankdt.component.html',
  styleUrls: ['./apirankdt.component.scss']
})
export class ApirankdtComponent implements OnInit {

  apirankdtArray: any = [];

  constructor(private apirankdt: ApirankdtService) { }

  ngOnInit() {

    this.apirankdt.getApirankdt().subscribe((apirankdtSubscribe: any[]) => {
      this.apirankdtArray = apirankdtSubscribe;
    });

  }

}
