import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModalComponent } from './reactive-modal.component';

describe('ReactiveModalComponent', () => {
  let component: ReactiveModalComponent;
  let fixture: ComponentFixture<ReactiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
