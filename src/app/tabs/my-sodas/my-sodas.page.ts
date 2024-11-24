import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-my-sodas',
  templateUrl: './my-sodas.page.html',
  styleUrls: ['./my-sodas.page.scss'],
})
export class MySodasPage {
  profilePicture: string | undefined; 

  constructor() {}

  async addProfilePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl, 
        source: CameraSource.Prompt, 
      });

      this.profilePicture = image.dataUrl;
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }
}

