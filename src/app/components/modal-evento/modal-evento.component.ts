import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.component.html',
  styleUrls: ['./modal-evento.component.scss'],
})
export class ModalEventoComponent {
  evento: EventInput;

  constructor(
    public dialogRef: MatDialogRef<ModalEventoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventInput
  ) {
    this.evento = { ...data };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
