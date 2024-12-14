// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_COIN_GECKO_API_KEY: string;
    readonly VITE_BING_NEWS_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}