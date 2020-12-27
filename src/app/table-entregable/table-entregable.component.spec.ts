import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableEntregableComponent } from './table-entregable.component';

describe('TableEntregableComponent', () => {
  let component: TableEntregableComponent;
  let fixture: ComponentFixture<TableEntregableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEntregableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableEntregableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
