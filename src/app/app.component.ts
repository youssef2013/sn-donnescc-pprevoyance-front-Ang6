import { Component, OnInit } from '@angular/core';

import { ProspectionPrevoyanceCC } from './pprevoyance';
import { PPCC } from './mock-payecc';


@Component({
  selector: 'pprevoyance-app',
  templateUrl: './app/app.component.html',
})
export class AppComponent {

  private pprevoyances: ProspectionPrevoyanceCC[];

  ngOnInit(){
    this.pprevoyances = PPCC;
  }

  selectPPCC(ppcc: ProspectionPrevoyanceCC){
    //let link = ['/pokemon', pokemon.id];
    //this.router.navigate(link);
    alert("pffff" + ppcc.titre);
}
}
