import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowTimeStampComponent } from './now-time-stamp.component';

describe('NowTimeStampComponent', () => {
  let component: NowTimeStampComponent;
  let fixture: ComponentFixture<NowTimeStampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowTimeStampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowTimeStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
