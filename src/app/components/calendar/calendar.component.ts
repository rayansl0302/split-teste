import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import { ModalEventoComponent } from '../modal-evento/modal-evento.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: ptBrLocale,
    events: this.getEventos(),
  };

  eventos: EventInput[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  getEventos(): EventInput[] {
    return this.eventos;
  }

  openEventModal(): void {
    const dialogRef = this.dialog.open(ModalEventoComponent, {
      width: '300px',
      data: {
        title: '',
        date: '',
      },
    });

    dialogRef.afterClosed().subscribe((result: EventInput | undefined) => {
      if (result) {
        this.eventos.push(result);
        this.calendarOptions.events = this.getEventos();
      }
    });
  }
}
