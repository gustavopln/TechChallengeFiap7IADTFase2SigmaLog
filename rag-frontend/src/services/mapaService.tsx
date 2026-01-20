const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export function getMapaRotasUrl(): string {
  return `${API_URL}/static/mapa_rotas_vrp.html`;
}
