import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-my-sodas',
  templateUrl: './my-sodas.page.html',
  styleUrls: ['./my-sodas.page.scss'],
})
export class MySodasPage {
  profilePicture: any;

  constructor() {
    this.profilePicture = JSON.parse(
      localStorage.getItem('profileImage') || ''
    );
  }
  async addProfilePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        webUseInput: true,
      });
      this.profilePicture = image.dataUrl;
      localStorage.setItem('profileImage', JSON.stringify(image.dataUrl));
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }
}
