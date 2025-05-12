import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "../../test/api/pet",
  testMatch: "**/*.spec.ts",
   fullyParallel: false,
  reporter: [["list"], ["allure-playwright"]],
  use: {
    baseURL: "http://localhost:8080/api/v3",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
    },
  },
});