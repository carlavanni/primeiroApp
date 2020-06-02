import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThevampireDiariesPage } from './thevampire-diaries.page';

describe('ThevampireDiariesPage', () => {
  let component: ThevampireDiariesPage;
  let fixture: ComponentFixture<ThevampireDiariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThevampireDiariesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThevampireDiariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
