// declare module '*.png'{}
// declare module '*.svg';
// declare module '*.jpeg';
// declare module '*.jpg';

/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  export const src: string;
  //   export default src;
}

declare module '*.bmp' {
  export const src: string;
}

declare module '*.gif' {
  export const src: string;
}

declare module '*.jpg' {
  export const src: string;
}

declare module '*.jpeg' {
  export const src: string;
}

declare module '*.png' {
  export const src: string;
}

declare module '*.webp' {
  export const src: string;
}

declare module '*.svg' {
  import * as React from 'react';

  //   export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  export const src: string;
}

declare module '*.module.css' {
  export const classes: { readonly [key: string]: string };
}

declare module '*.module.scss' {
  export const classes: { readonly [key: string]: string };
}

declare module '*.module.sass' {
  export const classes: { readonly [key: string]: string };
}
