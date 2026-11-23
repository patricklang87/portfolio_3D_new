import { render, screen } from "@testing-library/react";
import Hero from "../Components/Hero/Hero";

// The 3D laptop needs WebGL and ESM-only three.js modules, so it is stubbed here.
jest.mock("../Three/HeroLaptop/HeroLaptop", () => () => null);

describe("Hero", () => {
  it("leads with a front-end focused tagline", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Front-end developer who ships across the stack." })
    ).toBeInTheDocument();
  });

  it("introduces Patrick Lang and his experience below the tagline", () => {
    render(<Hero />);

    const introduction = document.querySelector(".heroIntro");

    expect(introduction.textContent).toMatch(
      /^Hi, I'm Patrick Lang\. I'm a software developer with four years of professional experience\./
    );
  });
});
