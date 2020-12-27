import { Injectable } from '@angular/core';
import {
  Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource
} from '@capacitor/core';
import { FireBaseServiceService } from '../service/fire-base-service.service';
import * as uuid from 'uuid';

const { Camera, Filesystem, Storage } = Plugins;

export interface Photo {
  filepath: string;
  webviewPath: string;
}


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: CameraPhoto[] = [];
  public photosRef: string[] = [];

  constructor(private fireBaseServiceService : FireBaseServiceService) { }
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;  
  }
  private async readAsBLob(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);

    return await response.blob();
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift(
     capturedPhoto
    );

    
   }

async saveImages():Promise<string[]> {
  

  for (var capturedPhoto of this.photos){
    const myId = uuid.v4();
    const blob = await this.readAsBLob(capturedPhoto);
      let nameFile = myId+"."+capturedPhoto.format;
      let tarea =  this.fireBaseServiceService.tareaCloudStorage(nameFile, blob);
  
      //let referencia = await this.fireBaseServiceService.referenciaCloudStorage(nameFile);
  
      this.photosRef.push(nameFile);
     
  
       //Cambia el porcentaje
       tarea.percentageChanges().subscribe((porcentaje) => {
        this.porcentaje = Math.round(porcentaje);
        if (this.porcentaje == 100) {
          this.finalizado = true;
        }
      });
    }
      /*referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });
  */
 return this.photosRef;
  }

}


