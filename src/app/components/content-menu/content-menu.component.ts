import { Component, OnInit } from '@angular/core';
import { Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss'],
})
export class ContentMenuComponent implements OnInit {
  dataHoraAtual: Date;

  constructor() {
    this.dataHoraAtual = new Date();
  }

  ngOnInit(): void {}
}
