import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFuncionalidadesComponent } from './home-funcionalidades.component';

describe('HomeFuncionalidadesComponent', () => {
  let component: HomeFuncionalidadesComponent;
  let fixture: ComponentFixture<HomeFuncionalidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFuncionalidadesComponent]
    });
    fixture = TestBed.createComponent(HomeFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
