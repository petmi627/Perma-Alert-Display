import { Injectable } from '@angular/core';
import {Newsfeed} from '../../models/newsfeed';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: Newsfeed[];

  constructor() {
    this.news = [
        {
            title: '112 Instagram',
            image: 'https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/41863907_2232540646819738_991601210119159808_n.jpg?_nc_cat=107&oh=08dae6dd248101a84ab202ae9f1ace74&oe=5C1736DE',
            text: 'Um Freiden war den Inneminister Dan Kersch scho fir d’Drëtt dëse Summer um Terrain fir verschidde CISen ze besichen...',
        },
        {
            title: '112 Facebook',
            image: 'https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/41863907_2232540646819738_991601210119159808_n.jpg?_nc_cat=107&oh=08dae6dd248101a84ab202ae9f1ace74&oe=5C1736DE',
            text: 'Um Freiden war den Inneminister Dan Kersch scho fir d’Drëtt dëse Summer um Terrain fir verschidde CISen ze besichen...',
        }
    ];
  }

  getNews() {
    return this.news;
  }
}
