import { Component, OnInit } from '@angular/core';
import {Instagram} from '../../../models/instagram';
import {InstagramService} from '../../../services/instagram/instagram.service';

@Component({
  selector: 'app-socialfeed',
  templateUrl: './socialfeed.component.html',
  styleUrls: ['./socialfeed.component.css']
})
export class SocialfeedComponent implements OnInit {

    feed: Instagram[];

    constructor(private instagramService: InstagramService) { }

    ngOnInit() {
        this.instagramService.getInstagramFeed().subscribe((feed) => {
            this.feed = feed;
        });
    }

}
