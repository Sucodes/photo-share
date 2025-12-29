import {
  IonPage,
  IonContent,
  IonButton,
  IonText,
  IonToast,
  IonTitle,
} from "@ionic/react";
import { useState } from "react";
import FormInput from "../../components/formInput";
import { useHistory } from "react-router-dom";
import { Preferences } from '@capacitor/preferences';

const SignUpPage: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (name: string, email: string, password: string) => {
    console.log(name, email, password);
    if (name === '' || email === '' || password === '') {
      setError("Error. Please try again.");
      return;
    } else {
      setSuccess("Account created successfully!");
      await Preferences.set({
        key: "user",
        value: JSON.stringify({ name, email, password }),
      });
      await Preferences.set({
        key: "isLoggedIn",
        value: "true",
      });
      history.replace("/login");
    }
  };

  return (
    <IonPage>
      <IonContent
        style={{
          "--background": "#A7D8FF",
        }}
      >
        <IonTitle style={{ textAlign: "center", marginTop: "40px" }}>
          <IonText style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#444" }}>
            <h3>Create your Account</h3>
          </IonText>
        </IonTitle>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <FormInput
            label="Full Name"
            type="text"
            value={name}
            onChange={setName}
          />
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />

          <IonButton
            color="warning"
            fill="solid"
            onClick={() => handleLogin(name, email, password)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              paddingTop: "0px 8px",
            }}
          >
            Sign Up
          </IonButton>
        </div>

        <IonToast
          isOpen={!!error}
          message={error}
          duration={2500}
          color="danger"
          onDidDismiss={() => setError("")}
        />
        <IonToast
          isOpen={!!success}
          message={success}
          duration={2500}
          color="success"
          onDidDismiss={() => setSuccess("")}
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
