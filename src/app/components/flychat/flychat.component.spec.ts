import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlychatComponent } from './flychat.component';

describe('FlychatComponent', () => {
  let component: FlychatComponent;
  let fixture: ComponentFixture<FlychatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlychatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlychatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
