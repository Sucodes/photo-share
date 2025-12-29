import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tabs from "./pages/tabs";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import { setupIonicReact } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import AuthPage from './pages/auth';
import LoginPage from './pages/auth/login';
import SignUpPage from './pages/auth/signup';

setupIonicReact({
  rippleEffect: false,
  mode: "md",
});

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={AuthPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route path="/tabs" component={Tabs} />
          <Redirect to="/" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
