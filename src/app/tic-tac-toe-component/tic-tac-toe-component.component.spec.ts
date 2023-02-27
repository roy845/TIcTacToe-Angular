import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeComponentComponent } from './tic-tac-toe-component.component';

describe('TicTacToeComponentComponent', () => {
  let component: TicTacToeComponentComponent;
  let fixture: ComponentFixture<TicTacToeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicTacToeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
