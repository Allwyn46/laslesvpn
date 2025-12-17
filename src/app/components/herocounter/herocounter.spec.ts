import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herocounter } from './herocounter';

describe('Herocounter', () => {
  let component: Herocounter;
  let fixture: ComponentFixture<Herocounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herocounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Herocounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
