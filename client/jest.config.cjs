module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    // Vite turns these imports into URLs; in tests a placeholder string is enough.
    "\\.(glb|gltf|png|jpe?g|gif|svg|webp|pdf)$": "<rootDir>/test/fileMock.cjs",
    "\\.css$": "identity-obj-proxy",
  },
};
