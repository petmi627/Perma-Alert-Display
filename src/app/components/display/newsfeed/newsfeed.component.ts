import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/newsfeed/news.service';
import {Newsfeed} from '../../../models/newsfeed';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  newsfeed: Newsfeed[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsfeed = this.newsService.getNews();
  }

}
