import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWithFormComponent } from './banner-with-form.component';

describe('BannerWithFormComponent', () => {
  let component: BannerWithFormComponent;
  let fixture: ComponentFixture<BannerWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerWithFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
