import { Component, OnInit } from '@angular/core';
import {HeadlineService} from '../../../services/headline/headline.service';
import {Headline} from '../../../models/headline';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  headlines: Headline[];

  constructor(private headlineService: HeadlineService) { }

  ngOnInit() {
    this.headlines = this.headlineService.getHeadlines();
  }

}
