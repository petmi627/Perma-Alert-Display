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

  loaded_headlines = false;

  constructor(private headlineService: HeadlineService) { }

  ngOnInit() {
    this.headlineService.getHeadlines().subscribe(headlines => {
      console.log(headlines);
      this.headlines = headlines;
      this.loaded_headlines = true;
    });
  }

}
