import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenre } from './literary-genre';

describe('LiteraryGenre', () => {
  let component: LiteraryGenre;
  let fixture: ComponentFixture<LiteraryGenre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
