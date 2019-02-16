import { Component, OnInit } from '@angular/core';
import {Instagram} from '../../../models/instagram';
import {InstagramService} from '../../../services/instagram/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

    feed: Instagram[];

    constructor(private instagramService: InstagramService) { }

    ngOnInit() {
        this.instagramService.getInstagramFeed().subscribe((feed) => {
            this.feed = feed;
        });
    }

}
