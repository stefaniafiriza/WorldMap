import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService{

  constructor() { }

  makeCapitalPopup(data: any): string {
    let popup = `` +
    `<div><b>Țară:</b> ${ data.country }</div>` +
    `<div><b>Capitală:</b> ${ data.city }</div>`;

    var reg = new RegExp('Q:');
    if (reg.test(data.info)) {
      popup = popup +  `<div>${ data.info }</div>`;
    } else {
      popup = popup +  `<div><b>Știai că:</b> ${ data.info }</div>`;
    }   
   
    return popup;
  }
}
