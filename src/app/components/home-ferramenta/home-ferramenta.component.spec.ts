import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFerramentaComponent } from './home-ferramenta.component';

describe('HomeFerramentaComponent', () => {
  let component: HomeFerramentaComponent;
  let fixture: ComponentFixture<HomeFerramentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFerramentaComponent]
    });
    fixture = TestBed.createComponent(HomeFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
