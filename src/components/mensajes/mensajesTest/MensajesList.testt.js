import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MensajesList from "./MensajesList2";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            usuario_propietario: "Ryan",
            chats: [
              {
                contacto: "Kelly",
                mensajes: [
                  {
                    emisor: "Ryan",
                    contenido: "Hola Kelly, ¿viste el correo que te envié?",
                    timestamp: "2023-10-05T09:00:00Z",
                    estado: "entregado",
                  },
                  {
                    emisor: "Kelly",
                    contenido: "Sí, lo acabo de ver. ¿Necesitas algo más?",
                    timestamp: "2023-10-05T09:05:00Z",
                    estado: "leido",
                  },
                  {
                    emisor: "Ryan",
                    contenido: "Solo quería asegurarme de que lo revisaras. Gracias.",
                    timestamp: "2023-10-05T09:10:00Z",
                    estado: "entregado",
                  },
                ],
              },
            ],
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks(); // Limpia el mock después de cada prueba
});
test("Test básico para comprobar que Jest está funcionando", () => {
  expect(true).toBe(true);
});

test("Renderiza las categorías correctamente", async () => {
  render(<MensajesList />);

  // ✅ Espera automáticamente a que el estado se actualice tras el fetch
  expect(await screen.findByText("Kelly")).toBeInTheDocument();
  expect(await screen.findByText("Seleccionar")).toBeInTheDocument();
});
