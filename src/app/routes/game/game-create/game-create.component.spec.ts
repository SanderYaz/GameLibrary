import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCreateComponent } from './game-create.component';

describe('GameCreateComponent', () => {
  let component: GameCreateComponent;
  let fixture: ComponentFixture<GameCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
