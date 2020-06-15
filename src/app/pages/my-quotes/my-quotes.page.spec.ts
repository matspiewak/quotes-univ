import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyQuotesPage } from './my-quotes.page';

describe('MyQuotesPage', () => {
  let component: MyQuotesPage;
  let fixture: ComponentFixture<MyQuotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyQuotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
