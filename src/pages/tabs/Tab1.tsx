import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonImg,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import { Preferences } from "@capacitor/preferences";
import { Share } from "@capacitor/share";
import { Filesystem, Directory } from "@capacitor/filesystem";

interface PhotoType {
  id: string;
  dataUrl: string;
  createdAt: string;
  lat?: number;
  lng?: number;
}

const Tab1: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPhotos = async () => {
    const res = await Preferences.get({ key: "file" });
    const parsed: PhotoType[] = res.value ? JSON.parse(res.value) : [];
    setPhotos(parsed);
    setLoading(false);
  };

  const deletePhoto = async (id: string) => {
    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
    await Preferences.set({ key: "file", value: JSON.stringify(updated) });
  };

  const sharePhoto = async (photo: PhotoType) => {
    try {
      if (!photo.dataUrl) return;

      const base64 = photo.dataUrl.split(",")[1];
      const fileName = `photoshare_${photo.id}.jpeg`;

      const saved = await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: Directory.Cache,
      });

      const uriResult = await Filesystem.getUri({
        directory: Directory.Cache,
        path: fileName,
      });

      await Share.share({
        title: "PhotoShare",
        text:
          photo.lat != null && photo.lng != null
            ? `Photo taken at ${photo.lat.toFixed(5)}, ${photo.lng.toFixed(5)}`
            : "Shared from PhotoShare",
        url: uriResult.uri,
        dialogTitle: "Share photo with",
      });
    } catch (err) {
      console.log("Share failed:", err);
      alert("Share failed. Check console for details.");
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const handleRefresh = async (event: CustomEvent) => {
    await loadPhotos();
    event.detail.complete();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Photos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        style={{
          "--background": "#A7D8FF",
        }}
      >
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <div style={{ padding: "14px" }}>
          <IonText>
            <h2>Saved photos</h2>
          </IonText>

          {loading && <IonText>Loading...</IonText>}

          {!loading && photos.length === 0 && (
            <IonCard>
              <IonCardContent>
                <IonText>
                  <h3>No photos yet</h3>
                  <p>Go to the Camera tab to take your first photo.</p>
                </IonText>
              </IonCardContent>
            </IonCard>
          )}

          {photos.map((photo) => (
            <IonCard key={photo.id} style={{ borderRadius: "8px" }}>
              <IonImg
                src={photo.dataUrl}
                style={{ borderRadius: "8px", height: "300px", width: "100%" }}
              />

              <IonCardContent>
                <IonItem lines="none">
                  <IonLabel>
                    <IonText>
                      <h3 style={{ margin: 0 }}>Captured</h3>
                    </IonText>

                    <IonText>
                      <p style={{ margin: "6px 0" }}>
                        {new Date(photo.createdAt).toLocaleString()}
                      </p>
                    </IonText>

                    {photo.lat != null && photo.lng != null && (
                      <IonText>
                        <p style={{ margin: 0 }}>
                          Location, {photo.lat.toFixed(2)},{" "}
                          {photo.lng.toFixed(2)}
                        </p>
                      </IonText>
                    )}
                  </IonLabel>

                  <IonButton
                    color="primary"
                    fill="outline"
                    onClick={() => sharePhoto(photo)}
                  >
                    Share
                  </IonButton>

                  <IonButton
                    color="danger"
                    fill="outline"
                    onClick={() => deletePhoto(photo.id)}
                  >
                    Delete
                  </IonButton>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
