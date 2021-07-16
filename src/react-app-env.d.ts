/// <reference types="react-scripts" />

/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_EVENTS_ENDPOINT: string;
      REACT_APP_ORG_ID: boolean;
      REACT_APP_FULLSTORY_ORG_ID: string;
      REACT_APP_FULLSTORY_HOST: string;
    }
  }
