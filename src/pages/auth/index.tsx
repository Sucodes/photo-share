import React from "react";
import {
  IonPage,
  IonButton,
  IonText,
  IonImg,
  IonTitle,
  IonContent,
} from "@ionic/react";
import styles from "./auth.module.css";

const AuthPage = () => {
  return (
    <IonPage>
      <IonContent
        style={{
          "--background": "#A7D8FF",
        }}
      >
        <IonTitle style={{ textAlign: "center", marginTop: "40px" }}>
          <IonText className={styles.authHeading}>
            <h2>Photo Share</h2>
          </IonText>
        </IonTitle>

        <IonImg src="assets/happy.png" className={styles.authLogo} />

        <div className={styles.authButtons}>
          <IonButton
            className={styles.authBtn}
            color="warning"
            fill="solid"
            routerLink="/login"
            routerDirection="forward"
          >
            Log In
          </IonButton>

          <IonButton
            className={styles.authBtn}
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
