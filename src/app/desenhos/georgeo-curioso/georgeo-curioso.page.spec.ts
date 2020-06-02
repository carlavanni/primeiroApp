import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeorgeoCuriosoPage } from './georgeo-curioso.page';

describe('GeorgeoCuriosoPage', () => {
  let component: GeorgeoCuriosoPage;
  let fixture: ComponentFixture<GeorgeoCuriosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeorgeoCuriosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeorgeoCuriosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
