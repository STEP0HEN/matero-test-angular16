import { Component, ViewChild } from '@angular/core';
import { data } from './data';
import {
  MtxGrid,
  MtxGridColumn,
  MtxGridModule,
} from '@ng-matero/extensions/grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MtxGridModule],
})
export class AppComponent {
  title = 'matero-test';
  list = data;

  columnPinnable = false;
  columnSortable = true;
  columnHideable = true;
  columnHideableChecked: 'show' | 'hide' = 'show';

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

  closeMenu() {
    this.grid.columnMenu.menuTrigger.closeMenu();
  }

  log(e: any) {}
}
