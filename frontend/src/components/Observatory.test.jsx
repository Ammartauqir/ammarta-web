import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Observatory from "./Observatory";

test("changing the slider changes the actual reveal and keeps the synthetic-data disclosure", () => {
  render(
    <MemoryRouter>
      <Observatory />
    </MemoryRouter>,
  );
  const slider = screen.getByRole("slider", { name: "Thermal reveal" });
  expect(slider).toHaveValue("48");
  fireEvent.change(slider, { target: { value: "80" } });
  expect(
    screen.getByRole("img", { name: /Thermal view covers 80 percent/ }),
  ).toHaveStyle("--reveal: 80%");
  expect(screen.getByText(/Synthetic illustration/)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /The project behind/ }),
  ).toHaveAttribute("href", "/projects/thermal-vision");
});
