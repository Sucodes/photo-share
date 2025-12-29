import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonImg,
} from "@ionic/react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { Preferences } from "@capacitor/preferences";

interface PhotoType {
  id: string;
  dataUrl: string;
  createdAt: string;
  lat?: number;
  lng?: number;
}

const Tab2: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.DataUrl,
      });

      let lat: number | undefined = undefined;
      let lng: number | undefined = undefined;

      try {
        const position = await Geolocation.getCurrentPosition();
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      } catch (err) {
        console.log("Location error:", err);
      }

      if (image.dataUrl) {
        setCurrentPhoto(image.dataUrl);

        const existing = await Preferences.get({ key: "file" });
        const newPhoto: PhotoType = {
          id: Date.now().toString(),
          dataUrl: image.dataUrl,
          createdAt: new Date().toISOString(),
          lat,
          lng,
        };

        const updated = [newPhoto, existing];
        await Preferences.set({ key: "file", value: JSON.stringify(updated) });
        alert("Photo saved successfully");
      }
    } catch (err) {
      console.log("Camera error:", err);
      alert("Unable to open camera");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        style={{
          "--background": "#A7D8FF",
        }}
      >
        <div style={{ padding: "14px" }}>
          <IonText>
            <h2>Take a photo</h2>
            <p>Photo will be saved locally</p>
          </IonText>

          <IonButton
            expand="block"
            onClick={takePhoto}
            style={{ marginTop: "20px" }}
          >
            Open Camera
          </IonButton>

          {currentPhoto && (
            <IonImg
              src={currentPhoto}
              style={{ marginTop: "20px", borderRadius: "8px", height: '300px' }}
            />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
