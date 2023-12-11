import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiMaeComponent } from './pai-mae.component';

describe('PaiMaeComponent', () => {
  let component: PaiMaeComponent;
  let fixture: ComponentFixture<PaiMaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiMaeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaiMaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
