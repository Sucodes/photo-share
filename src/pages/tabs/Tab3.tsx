import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";

interface Coords {
  lat: number;
  lng: number;
}

const Tab3: React.FC = () => {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [error, setError] = useState("");

  const getLocation = async () => {
    setError("");
    try {
      const position = await Geolocation.getCurrentPosition();
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    } catch (err) {
      console.log("Location error:", err);
      setError("Unable to get location. Check permissions or GPS.");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        style={{
          "--background": "#A7D8FF",
        }}
      >
        <div style={{ padding: "14px" }}>
          <IonText>
            <h3>Your Current Location</h3>
          </IonText>

          <IonButton
            expand="block"
            onClick={getLocation}
            style={{ marginTop: "16px" }}
          >
            Get My Location
          </IonButton>

          {error && (
            <IonText color="danger">
              <p style={{ marginTop: "16px" }}>{error}</p>
            </IonText>
          )}

          {coords && (
            <IonCard
              style={{
                marginTop: "20px",
                borderRadius: "14px",
              }}
            >
              <IonCardContent>
                <IonText>
                  <h3 style={{ marginTop: 0 }}>Location Details</h3>
                </IonText>

                <IonText color="medium">
                  <p>
                    Lat: {coords.lat.toFixed(5)}, Lng: {coords.lng.toFixed(5)}
                  </p>
                </IonText>

                <div style={{ marginTop: "12px" }}>
                  <iframe
                    title="map"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "10px" }}
                    loading="lazy"
                    src={`https://www.google.com/maps?q=${coords.lat},${coords.lng}&hl=en&z=15&output=embed`}
                  />
                </div>
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
