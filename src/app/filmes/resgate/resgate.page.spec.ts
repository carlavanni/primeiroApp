import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgatePage } from './resgate.page';

describe('ResgatePage', () => {
  let component: ResgatePage;
  let fixture: ComponentFixture<ResgatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
