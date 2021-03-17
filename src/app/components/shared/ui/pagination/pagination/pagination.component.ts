import { EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
