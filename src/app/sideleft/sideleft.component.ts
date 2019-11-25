import { Component, OnInit } from '@angular/core';
import { TopscorersService } from '../services/topscorers.service';

@Component({
  selector: 'app-sideleft',
  templateUrl: './sideleft.component.html',
  styleUrls: ['./sideleft.component.scss']
})
export class SideleftComponent implements OnInit {

  topScorersArray: any = [];

  constructor(private topScorerService: TopscorersService) { }

  ngOnInit() {

    this.topScorerService.getTopscorers().subscribe((topScorersArray: any[]) => {
      this.topScorersArray = topScorersArray;
    });

  }
}
