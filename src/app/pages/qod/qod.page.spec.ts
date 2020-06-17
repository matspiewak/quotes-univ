import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QodPage } from './qod.page';

describe('QodPage', () => {
  let component: QodPage;
  let fixture: ComponentFixture<QodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
