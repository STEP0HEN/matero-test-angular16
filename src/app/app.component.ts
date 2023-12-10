import { Component, ViewChild } from '@angular/core';
import { data } from './data';
import { MtxGrid, MtxGridColumn } from '@ng-matero/extensions/grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'matero-test';

  @ViewChild('grid') grid!: MtxGrid;

  columns: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      minWidth: 500,
      maxWidth: 700,
      resizable: true,
    },
    {
      header: 'Weight',
      field: 'weight',
      minWidth: 500,
      maxWidth: 700,
      resizable: true,
    },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  list = data;

  columnPinnable = false;
  columnSortable = true;
  columnHideable = true;
  columnHideableChecked: 'show' | 'hide' = 'show';

  closeMenu() {
    this.grid.columnMenu.menuTrigger.closeMenu();
  }

  log(e: any) {
    console.log(e);
  }
}

/* 
import { Component, ViewChild } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn, MtxGrid } from '@ng-matero/extensions/grid';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
*/
