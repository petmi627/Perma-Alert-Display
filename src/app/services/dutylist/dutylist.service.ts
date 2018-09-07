import { Injectable } from '@angular/core';
import {Duty} from '../../models/duty';

@Injectable({
  providedIn: 'root'
})
export class DutylistService {
  duty: Duty[];

  constructor() {
    this.duty = [
      {
        id: 1,
        start: new Date(2018, 8, 27, 16, 0),
        end: new Date(2018, 8, 27, 18, 0),
        vehicle: 'AMB1-Diekirch',
        location: 'Diekirch',
        members: [
            {
                id: 42,
                firstName: 'John',
                lastName: 'Doe',
            },
            {
                id: 1337,
                firstName: 'Max',
                lastName: 'Mustermann',
            },
            {
                id: 69000,
                firstName: 'Karen',
                lastName: 'Williams',
            }
        ]
      },
      {
        id: 2,
        start: new Date(2018, 8, 27, 18, 0),
        end: new Date(2018, 8, 27, 21, 0),
        vehicle: 'AMB1-Diekirch',
        location: 'Diekirch',
        members: [
          {
             id: 42,
             firstName: 'John',
             lastName: 'Doe',
          },
          {
            id: 1337,
            firstName: 'Max',
            lastName: 'Mustermann',
          },
          {
            id: 69000,
            firstName: 'Karen',
            lastName: 'Williams',
          }
        ]
      },
      {
          id: 2,
          start: new Date(2018, 8, 27, 21, 0),
          end: new Date(2018, 8, 27, 22, 0),
          vehicle: 'AMB1-Diekirch',
          location: 'Diekirch',
          members: [
              {
                  id: 42,
                  firstName: 'John',
                  lastName: 'Doe',
              },
              {
                  id: 1337,
                  firstName: 'Max',
                  lastName: 'Mustermann',
              },
              {
                  id: 69000,
                  firstName: 'Karen',
                  lastName: 'Williams',
              }
          ]
      },
      {
          id: 2,
          start: new Date(2018, 8, 27, 22, 0),
          end: new Date(2018, 8, 28, 0, 0),
          vehicle: 'AMB1-Diekirch',
          location: 'Diekirch',
          members: [
              {
                  id: 42,
                  firstName: 'John',
                  lastName: 'Doe',
              },
              {
                  id: 1337,
                  firstName: 'Max',
                  lastName: 'Mustermann',
              },
              {
                  id: 69000,
                  firstName: 'Karen',
                  lastName: 'Williams',
              }
          ]
      }
    ];
  }

  getDutyList() {
    return this.duty;
  }
}
