import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactPage from "./ContactPage";
import { API_ENDPOINTS } from "../config/api";

afterEach(() => {
  jest.restoreAllMocks();
  delete global.fetch;
});

function completeForm() {
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Test Visitor" },
  });
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "visitor@example.com" },
  });
  fireEvent.change(screen.getByLabelText("What’s it about?"), {
    target: { value: "Research question" },
  });
  fireEvent.change(screen.getByLabelText("Your message"), {
    target: { value: "I would like to discuss your perception work." },
  });
}

test("sends the expected contact payload, disables duplicates, and resets on success", async () => {
  let resolve;
  global.fetch = jest.fn(
    () =>
      new Promise((r) => {
        resolve = r;
      }),
  );
  render(<ContactPage />);
  completeForm();
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
  expect(global.fetch).toHaveBeenCalledWith(
    API_ENDPOINTS.CONTACT,
    expect.objectContaining({
      method: "POST",
      body: JSON.stringify({
        name: "Test Visitor",
        email: "visitor@example.com",
        subject: "Research question",
        message: "I would like to discuss your perception work.",
      }),
    }),
  );
  resolve({
    ok: true,
    json: async () => ({ message: "Email sent successfully" }),
  });
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent("Message sent."),
  );
  expect(screen.getByLabelText("Your name")).toHaveValue("");
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test("preserves the message and displays API validation errors", async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValue({
      ok: false,
      json: async () => ({
        message: "Too many requests. Please try again later.",
      }),
    });
  render(<ContactPage />);
  completeForm();
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  await waitFor(() =>
    expect(screen.getByRole("alert")).toHaveTextContent("Too many requests"),
  );
  expect(screen.getByLabelText("Your message")).toHaveValue(
    "I would like to discuss your perception work.",
  );
});
