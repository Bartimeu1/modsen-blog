declare module '*.jpg';
declare module '*.png';
declare module '*.webp';

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare namespace Cypress {
  interface Chainable {
    login(name: string): void;
  }
}

interface Window {
  Cypress?: unknown;
}