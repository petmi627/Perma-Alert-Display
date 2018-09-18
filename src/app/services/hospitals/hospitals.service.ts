import { Injectable } from '@angular/core';
import {Hospitals} from '../../models/hospitals';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  hospitals: Hospitals[];

  constructor() {
    this.hospitals = [
        {
          region: 'Norden',
          name: 'CHdN',
          fullName: 'Centre Hospitalier du Nord',
          location: 'Ettelbéck',
        },
        {
            region: 'Zentrum',
            name: 'CHL',
            fullName: 'Centre Hospitalier Luxembourg',
            location: 'Létzebuerg',
        },
        {
            region: 'Süden',
            name: 'CHEM',
            fullName: 'Centre Hospitalier Emile Mayerisch',
            location: 'Esch',
        }
    ];
  }

  getHospitals() {
    return this.hospitals;
  }
}
