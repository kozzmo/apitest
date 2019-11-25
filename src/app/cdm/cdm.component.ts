import { Component, OnInit } from '@angular/core';
import { CdmService } from './cdm.service';

@Component({
  selector: 'app-cdm',
  templateUrl: './cdm.component.html',
  styleUrls: ['./cdm.component.scss']
})
export class CdmComponent implements OnInit {

  cdmArray: any = [];  
  cdmRankingArray: any = [];

  constructor(private cdm: CdmService) { }

  ngOnInit() {

    this.cdm.getCdm().subscribe((cdmSubscribe: any[]) => {
      this.cdmArray = cdmSubscribe;
    });

    this.cdm.getCdmRanking().subscribe((cdmRanking: any[]) => {
      this.cdmRankingArray = cdmRanking;
    });

  }

}
