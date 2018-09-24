import { Injectable } from '@angular/core';
import {Headline} from '../../models/headline';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  headlines: Headline[];

  constructor() {
    this.headlines = [
        {
            title: 'ELO AM REPLAY - 2. Table ronde: Famill a Soziales: Wat Politiker de Famillje virschloen',
            source: 'RTL Headlines',
        },
        {
            title: 'FOTOEN a VIDEO: 376 Appeller beim 112: Den Tram ass wéinst dem staarke Wand kuerzzäiteg net gefuer',
            source: 'RTL Headlines',
        },
        {
            title: 'FOTOEN a VIDEO - Lëtzebuerger Filmpräis: "Gutland" vum Govinda Van Maele beschte Film',
            source: 'RTL Headlines',
        },
        {
            title: 'FOTOEN a VIDEO: Cyclissem-WM: Bob Jungels mat Quick-Step Floors Weltmeeschter am Ekippenzäitfueren',
            source: 'RTL Headlines',
        },
    ];
  }

  getHeadlines() {
    return this.headlines;
  }
}
