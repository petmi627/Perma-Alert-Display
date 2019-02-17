import { Component, OnInit } from '@angular/core';
import {Instagram} from '../../../models/instagram';
import {InstagramService} from '../../../services/instagram/instagram.service';
import {TwitterService} from '../../../services/twitter/twitter.service';
import {Twitter} from '../../../models/twitter';

declare var $:any;

@Component({
  selector: 'app-socialfeed',
  templateUrl: './socialfeed.component.html',
  styleUrls: ['./socialfeed.component.css']
})
export class SocialfeedComponent implements OnInit {

    instagramFeed: Instagram[];
    hideInstagramFeed: boolean = true;

    twitterFeed: Twitter[];
    hideTwitterFeed: boolean = true;

    constructor(private instagramService: InstagramService,
                private twitterService: TwitterService) { }

    ngOnInit() {
        this.getInstagramFeed();
        let this_class = this;

        $(document).ready(function(e) {
            $('#instagram_carousel').carousel({
                interval: 7500
            });
            $('#twitter_carousel').carousel({
                interval: 20000
            });

            $('#instagram_carousel').on('slide.bs.carousel', function (e) {
              console.log(e.to);
              if (e.to === 25) {
                  $(this).carousel('pause');
                  this_class.getTwitterFeed();
              }
            });

            $('#twitter_carousel').on('slide.bs.carousel', function (e) {
                console.log(e.to);
                if (e.to === 15) {
                    $(this).carousel('pause');
                    this_class.getInstagramFeed();
                }
            });
        });
    }

    getInstagramFeed() {
        this.instagramService.getInstagramFeed().subscribe((feed) => {
            this.instagramFeed = feed;
            this.hideInstagramFeed = false;
            this.hideTwitterFeed = true;
            $('#instagram_carousel').carousel('cycle');
            $('#twitter_carousel').carousel('pause');
        });
    }

    getTwitterFeed() {
        this.twitterService.getTwitterStatuses().subscribe((statuses) => {
            this.twitterFeed = statuses;
            this.hideTwitterFeed = false;
            this.hideInstagramFeed = true;
            $('#instagram_carousel').carousel('pause');
            $('#twitter_carousel').carousel('cycle');
        });
    }

}
