import React from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonInputPasswordToggle,
} from "@ionic/react";

interface FormInputProps {
  label: string;
  type: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
}

const FormInput = ({ label, type, value, onChange }: FormInputProps) => {
  return (
    <IonItem
      style={{
        marginBottom: "20px",
        padding: "0px 8px",
        width: "100%",
      }}
    >
      <IonLabel position="stacked">{label}</IonLabel>
      <IonInput
        type={type}
        value={value}
        onIonInput={(e) => onChange(e.detail.value!)}
      >
        {type === "password" ? (
          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
        ) : null}
      </IonInput>
    </IonItem>
  );
};

export default FormInput;
