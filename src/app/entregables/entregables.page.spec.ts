import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregablesPage } from './entregables.page';

describe('EntregablesPage', () => {
  let component: EntregablesPage;
  let fixture: ComponentFixture<EntregablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
