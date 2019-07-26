import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerListPageComponent } from './partner-list-page.component';

describe('PartnerListPageComponent', () => {
  let component: PartnerListPageComponent;
  let fixture: ComponentFixture<PartnerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
