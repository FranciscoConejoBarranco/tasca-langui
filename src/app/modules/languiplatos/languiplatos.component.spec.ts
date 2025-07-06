import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguiplatosComponent } from './languiplatos.component';

describe('LanguiplatosComponent', () => {
  let component: LanguiplatosComponent;
  let fixture: ComponentFixture<LanguiplatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguiplatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguiplatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
