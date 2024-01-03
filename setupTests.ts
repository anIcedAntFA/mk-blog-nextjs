import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Disables a package that checks that code is only executed on the server side.
// Also, this mock can be defined in the Vitest setup file.
vi.mock("server only", () => {
  return {};
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
