import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      // describe/it/expect are globals, like in Jest, so new tests need no
      // runner imports and keep working when the client moves to Jest.
      globals: true,
      setupFiles: ["./src/setupTests.js"],
    },
  })
);
