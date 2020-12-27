import { Component, OnInit,ElementRef, ViewChild, QueryList } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MaterialModule } from '../material.module';
import { MatPaginator } from "@angular/material/paginator";
import { FireBaseServiceService } from '../service/fire-base-service.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-entregable',
  templateUrl: './table-entregable.component.html',
  styleUrls: ['./table-entregable.component.scss'],
})
export class TableEntregableComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;


  constructor(private fireBaseServiceService : FireBaseServiceService
    ) {
      this.dataSource = new MatTableDataSource<TicketElement>();
      
      this.fireBaseServiceService.getTiketsFilterLine().subscribe(
        
        resp => {
          console.log(resp)
          this.dataSourceTmp = resp;
          this.dataSource = new MatTableDataSource<TicketElement>(this.dataSourceTmp);

});
     /* this.fireBaseServiceService.getTiket().subscribe(
        
        resp => {this.dataSourceTmp = resp.map((e : any)=>{
        return e.payload.doc.data();
          }
  
          );
                 this.dataSource = new MatTableDataSource<TicketElement>(this.dataSourceTmp);
  
    });*/
                  this.total=1;
                }
  title="REPORTE DE FALLAS DE OPERACIÓN E INCIDENCIAS RELEVANTES";
  total;
  dataSource;
  dataSourceTmp;
  displayedColumns: string[] = ['id','fecha_captura',
  'hora_captura','supervisor',
  'motivo_directo','motivo_especifico',
  'tipo_falla'];
    
  ngOnInit() {
  }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAS';
doc.setFontSize(16)
doc.text(20, 30, this.title)

//doc.addImage(imgData, 'JPEG', 15, 40, 180, 160) 
 
    autoTable(doc,{ html: '#basic-table',startY:200,  margin: { top: 60 } })
    doc.save('report.pdf');
  }
}

/* Static data */
export interface TicketElement {
  hora_captura: string;
  fecha_captura: Date;
  supervisor: string;
  motivo_directo: string;
  motivo_especifico: string;
  tipo_falla: string;
  
  }