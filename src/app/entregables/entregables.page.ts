
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FireBaseServiceService } from '../service/fire-base-service.service';
import jsPDF from 'jspdf';
import { TableEntregableComponent } from '../table-entregable/table-entregable.component';

/* Static data */
export interface TicketElement {
area: string;
fecha_captura: Date;
linea: string;
estacion: string;
motivo_especifico: string;

}

/* Static data */
export interface TicketElement {
area: string;
fecha_captura: Date;
linea: string;
estacion: string;
motivo_especifico: string;

}

@Component({
  selector: 'app-entregables',
  templateUrl: './entregables.page.html',
  styleUrls: ['./entregables.page.scss'],
})
export class EntregablesPage  implements  AfterViewInit {
  displayedColumns: string[] = ['area', 'fecha_captura','linea', 'estacion','motivo_especifico'];
  displayedColumns2: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<TicketElement>;
  dataSourceTmp;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData:ElementRef;

  constructor(private fireBaseServiceService : FireBaseServiceService
    ) {
     this.fireBaseServiceService.getTiket().subscribe(
      resp => {this.dataSourceTmp = resp.map((e : any)=>{
      return e.payload.doc.data();
        }

        );
               this.dataSource = new MatTableDataSource<TicketElement>(this.dataSourceTmp);

               this.dataSource.paginator = this.paginator;
               this.dataSource.sort = this.sort;
  });
  }



   async  ngAfterViewInit() {

  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


