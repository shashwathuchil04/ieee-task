import { Component } from '@angular/core';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // Lazy Load the components...
  tab1Root = 'HomePage';
  tab2Root = 'HistoryPage';

  constructor() {
  }
}
