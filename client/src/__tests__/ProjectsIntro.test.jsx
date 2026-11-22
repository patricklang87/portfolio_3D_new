import { render, screen } from "@testing-library/react";
import ProjectsIntro from "../Components/Projects/ProjectsIntro/ProjectsIntro";

describe("Projects intro", () => {
  it("presents the carousel as personal projects", () => {
    render(<ProjectsIntro />);

    expect(screen.getByRole("heading", { level: 2, name: "Personal projects" })).toBeInTheDocument();
  });

  it("tells visitors how to open a project", () => {
    render(<ProjectsIntro />);

    expect(screen.getByText(/click or tap one/i)).toBeInTheDocument();
  });
});
