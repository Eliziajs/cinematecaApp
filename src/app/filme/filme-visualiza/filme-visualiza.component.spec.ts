import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeVisualizaComponent } from './filme-visualiza.component';

describe('FilmeVisualizaComponent', () => {
  let component: FilmeVisualizaComponent;
  let fixture: ComponentFixture<FilmeVisualizaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmeVisualizaComponent]
    });
    fixture = TestBed.createComponent(FilmeVisualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
