export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_KEY: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
