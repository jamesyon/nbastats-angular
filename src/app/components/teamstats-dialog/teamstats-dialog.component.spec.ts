import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstatsDialogComponent } from './teamstats-dialog.component';

describe('TeamstatsDialogComponent', () => {
  let component: TeamstatsDialogComponent;
  let fixture: ComponentFixture<TeamstatsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamstatsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamstatsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
