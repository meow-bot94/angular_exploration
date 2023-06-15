import {Component, Input, OnInit} from '@angular/core';

import {TableRow} from "./coloured-row/table-row";


@Component({
  selector: 'app-coloured-table',
  templateUrl: './coloured-table.component.html',
  styleUrls: ['./coloured-table.component.scss']
})
export class ColouredTableComponent implements OnInit{
  rows_list!: TableRow[];

  ngOnInit(): void {
      this.rows_list = [
        {
          id: 1,
          info: 'one wwwwwwwwwwwwwwwwwwwwwwwwwww f',
          created_dt: new Date(),
        },
        {
          id: 2,
          info: 'two wwwwwwwwwwwwwwwwwwwwwwwwwwwww f',
          created_dt: new Date(),
        },
        {
          id: 3,
          info: 'three wwwwwwwwwwwwwwwwwwwwwwwwwwww f',
          created_dt: new Date(),
        },
      ]
  }


}
