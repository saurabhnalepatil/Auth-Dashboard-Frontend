import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhResiverDataComponent } from './wh-resiver-data.component';

describe('WhResiverDataComponent', () => {
  let component: WhResiverDataComponent;
  let fixture: ComponentFixture<WhResiverDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhResiverDataComponent]
    });
    fixture = TestBed.createComponent(WhResiverDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
