import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginaPrincipal from "./cinesList";
import CinesRouter from "./cinesRouters";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            cartelera: [
              {
                codigo: "WXZ202520",
                titulo: "Seven",
                imagen: "seven.jpg",
                descripcion: "Un thriller psicológico que te",
              },
            ],
            salas: [
              {
                id: "1",
                nombre: "Sala 1",
                filas: 5,
                columnas: 6,
                asientosOcupados: ["1-1", "2-3", "3-4"],
                asientosMinusvalidos: ["1-1", "1-2", "1-3", "5-1", "5-6"],
                pelicula: "WXZ202520",
                horarios: ["16:00", "19:00", "22:00"],
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
  render(<CinesRouter />);

  expect(await screen.findByText("Sala1")).toBeInTheDocument();
});

test("Desplegable del Navbar funciona", async () => {
  render(<CinesRouter />);

  const salasNavBar = await screen.findByText("Salas");
  await userEvent.click(salasNavBar);

  expect(screen.getByText("Sala 1")).toBeInTheDocument();
  const salas1Link = await screen.findByText("Salas 1");

  await userEvent.click(salas1Link);
});

test("Boton home del Navbar funciona", async () => {
  render(<CinesRouter />);

  const botonHome = await screen.findByText("Home");
  await userEvent.click(salasNavBar);
});

test("Boton home del Navbar funciona", async () => {
  render(<CinesRouter />);

  const botonHome = await screen.findByText("Home");
  await userEvent.click(salasNavBar);
});
