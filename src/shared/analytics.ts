declare global {
  interface Window {
    ga: (...args: any[]) => void;
  }
}

export const track = (event: string, properties: any) => {
  window.ga(event, properties);
};
