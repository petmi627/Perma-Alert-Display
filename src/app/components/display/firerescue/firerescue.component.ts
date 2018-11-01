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
        this.dutyListService.getDutyList('incsa').subscribe(duties => {
            this.dutyList = duties;

            this.dutyList.forEach((duty, index) => {
                this.memberEven = [];
                this.memberOdd = [];

                duty.members.forEach((member, i) => {
                    if (member.lastName && member.lastName.toString().length > 14) {
                        member.firstName = null;
                    } else if (member.lastName && member.lastName.toString().length > 12) {
                        member.firstName = member.firstName[0] + '.';
                    } else if (member.lastName && member.lastName.toString().length + member.firstName.toString().length > 12
                    ) {
                        member.firstName = member.firstName[0] + '.';
                    }

                    if (i % 2 === 0) {
                        this.memberEven.push(member);
                    } else {
                        this.memberOdd.push(member);
                    }
                });

                duty.members_odd = this.memberOdd;
                duty.members_even = this.memberEven;

                this.duties.push(duty);
            });
        });
    }
}
