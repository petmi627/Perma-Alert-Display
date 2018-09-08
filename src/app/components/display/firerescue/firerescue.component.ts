import { Component, OnInit } from '@angular/core';
import {Duty} from '../../../models/duty';
import {DutylistService} from '../../../services/dutylist/dutylist.service';

@Component({
  selector: 'app-firerescue',
  templateUrl: './firerescue.component.html',
  styleUrls: ['./firerescue.component.css']
})
export class FirerescueComponent implements OnInit {
    dutyList: Duty[];
    duties: Duty[] = [];
    memberEven: Duty[];
    memberOdd: Duty[];

    constructor(private dutyListService: DutylistService) { }

    ngOnInit() {
        this.dutyList = this.dutyListService.getDutyList('incsa');

        this.dutyList.forEach((duty, index) => {
            this.memberEven = [];
            this.memberOdd = [];

            duty.members.forEach((member, i) => {
                if (i % 2 === 0) {
                    this.memberEven.push(member);
                }

                this.memberOdd.push(member);
            });

            duty.members_odd = this.memberOdd;
            duty.members_even = this.memberOdd;

            this.duties.push(duty);
        });
    }
}
