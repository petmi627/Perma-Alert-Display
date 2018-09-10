import { Injectable } from '@angular/core';
import {Duty} from '../../models/duty';

@Injectable({
  providedIn: 'root'
})
export class DutylistService {
  duty_amb1: Duty[];
  duty_amb2: Duty[];
  duty_incsa: Duty[];

  constructor() {
    this.duty_amb1 = [
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
          vehicle: 'AMB2-Diekirch',
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

      this.duty_amb2 = [
          {
              id: 1,
              start: new Date(2018, 8, 27, 16, 0),
              end: new Date(2018, 8, 27, 18, 0),
              vehicle: 'AMB2-Diekirch',
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
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
              ]
          },
          {
              id: 2,
              start: new Date(2018, 8, 27, 18, 0),
              end: new Date(2018, 8, 27, 21, 0),
              vehicle: 'AMB2-Diekirch',
              location: 'Diekirch',
              members: [
                  {
                      id: 42,
                      firstName: 'John',
                      lastName: 'Doe',
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
              ]
          },
          {
              id: 2,
              start: new Date(2018, 8, 27, 21, 0),
              end: new Date(2018, 8, 27, 22, 0),
              vehicle: 'AMB2-Diekirch',
              location: 'Diekirch',
              members: [
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: 42,
                      firstName: 'John',
                      lastName: 'Doe',
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
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
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
              ]
          }
      ];


      this.duty_incsa = [
          {
              id: 1,
              start: new Date(2018, 8, 27, 16, 0),
              end: new Date(2018, 8, 27, 18, 0),
              vehicle: 'INCSA-Diekirch',
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
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
              ]
          },
          {
              id: 2,
              start: new Date(2018, 8, 27, 18, 0),
              end: new Date(2018, 8, 28, 0, 0),
              vehicle: 'INCSA-Diekirch',
              location: 'Diekirch',
              members: [
                  {
                      id: 42,
                      firstName: 'John',
                      lastName: 'Doe',
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
              ]
          },
          {
              id: 2,
              start: new Date(2018, 8, 28, 0, 0),
              end: new Date(2018, 8, 28, 6, 0),
              vehicle: 'INCSA-Diekirch',
              location: 'Diekirch',
              members: [
                  {
                      id: 42,
                      firstName: 'John',
                      lastName: 'Doe',
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
                  {
                      id: null,
                      firstName: null,
                      lastName: null,
                  },
              ]
          },
      ];
  }

  getDutyList(vehicle) {
    if (vehicle === 'amb1') {
        return this.duty_amb1;
    }

    if (vehicle === 'amb2') {
        return this.duty_amb2;
    }

    if (vehicle === 'incsa') {
        return this.duty_incsa;
    }

    return null;
  }
}
