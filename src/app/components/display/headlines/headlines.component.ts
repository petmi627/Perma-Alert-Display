import { Component, OnInit } from '@angular/core';
import {HeadlineService} from '../../../services/headline/headline.service';
import {Headline} from '../../../models/headline';

declare var $:any;

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
      this.headlines = headlines;
      this.loaded_headlines = true;

        $(document).ready(function(e) {
            $('.news-ticker').webTicker({
                speed: 200,
                height: 60,
                duplicate: true,
                startEmpty: false,
                hoverpause: false,
                transition: 'ease'
            });
            $('.news-ticker').find('li').css('line-height', 0);
        });
    });
  }

}
