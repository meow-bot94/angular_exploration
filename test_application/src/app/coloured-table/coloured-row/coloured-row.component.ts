import {Component, Input, OnInit} from '@angular/core';
import {TableRow} from "./table-row";


@Component({
  selector: 'app-coloured-row',
  templateUrl: './coloured-row.component.html',
  styleUrls: ['./coloured-row.component.scss']
})
export class ColouredRowComponent implements OnInit {
  @Input() table_row!: TableRow;

  even!: boolean;

  ngOnInit(): void {
    this.even = this.table_row.id % 2 == 0;
  }
}
