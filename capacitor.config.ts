import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.photoShare.app",
  appName: "photo-share",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#A7D8FF",
      androidScaleType: "CENTER_CROP",
      showSpinner: false
    },
  },
};

export default config;
