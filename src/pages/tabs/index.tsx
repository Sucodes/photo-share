import React from "react";
import { Preferences } from "@capacitor/preferences";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, useHistory } from "react-router-dom";
import { images, camera, map, logOut } from "ionicons/icons";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const Tabs = () => {
  const history = useHistory();

  const handleLogoutClick = async () => {
    await Preferences.clear();
    history.push("/");
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/feed" component={Tab1} exact />
        <Route path="/tabs/camera" component={Tab2} exact />
        <Route path="/tabs/map" component={Tab3} exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="feed" href="/tabs/feed">
          <IonIcon icon={images} />
          <IonLabel>My Photos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="camera" href="/tabs/camera">
          <IonIcon icon={camera} />
          <IonLabel>Camera</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map" href="/tabs/map">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="logout" onClick={handleLogoutClick}>
          <IonIcon icon={logOut} />
          <IonLabel>Logout</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
