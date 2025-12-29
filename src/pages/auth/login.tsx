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
import { Preferences } from "@capacitor/preferences";

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const stored = await Preferences.get({ key: "user" });
    if (!stored.value) {
      setError("No account found. Please sign up.");
      return;
    }

    const user = JSON.parse(stored.value || "{}");

    if (user.email !== email || user.password !== password) {
      setError("Incorrect email or password.");
      return;
    }

    await Preferences.set({ key: "isLoggedIn", value: "true" });
    history.replace("/tabs/feed");
  };

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
            <h3>Welcome back</h3>
          </IonText>
        </IonTitle>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              paddingTop: "0px 8px",
            }}
          >
            <IonButton
              color="warning"
              fill="solid"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Log in
            </IonButton>

            <IonText style={{ marginTop: "12px", textAlign: "center" }}>
              No account?{" "}
              <span
                onClick={() => history.push("/signup")}
                style={{ color: "purple" }}
              >
                Sign Up
              </span>
            </IonText>
          </div>
        </div>

        <IonToast
          isOpen={!!error}
          message={error}
          duration={2500}
          color="danger"
          onDidDismiss={() => setError("")}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
