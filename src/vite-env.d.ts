/// <reference types="vite/client" />
declare module "*.css";

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_GIPHY_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}