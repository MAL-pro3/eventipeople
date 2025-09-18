/// <reference types="vite/client" />

// Dichiarazioni per il widget di Matrimonio.com
declare global {
  interface Window {
    wpShowReviews: (idEmpresa: number, color: string) => void;
  }
}
