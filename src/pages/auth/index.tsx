import React from "react";
import {
  IonPage,
  IonButton,
  IonText,
  IonImg,
  IonTitle,
  IonContent,
} from "@ionic/react";

const AuthPage = () => {
  return (
    <IonPage>
      <IonContent
        style={{
          "--background": "#A7D8FF",
        }}
      >
        <IonTitle style={{ textAlign: "center", marginTop: "40px" }}>
          <IonText
            style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#444" }}
          >
            <h2>Photo Share</h2>
          </IonText>
        </IonTitle>

        <IonImg
          src="assets/happy.png"
          style={{ width: "400px", height: "400px", margin: "0 auto" }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0 16px",
          }}
        >
          <IonButton
            style={{
              width: "45%",
              margin: "10px auto",
              height: "48px",
              fontSize: "1.1rem",
              borderRadius: "12px",
            }}
            color="warning"
            fill="solid"
            routerLink="/login"
            routerDirection="forward"
          >
            Log In
          </IonButton>

          <IonButton
            style={{
              width: "45%",
              margin: "10px auto",
              height: "48px",
              fontSize: "1.1rem",
              borderRadius: "12px",
            }}
            color="warning"
            fill="solid"
            routerLink="/signup"
            routerDirection="forward"
          >
            Sign Up
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;
