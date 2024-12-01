import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTalentsComponent } from './find-talents.component';

describe('FindTalentsComponent', () => {
  let component: FindTalentsComponent;
  let fixture: ComponentFixture<FindTalentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindTalentsComponent]
    });
    fixture = TestBed.createComponent(FindTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
