import { render, screen } from "@testing-library/react";
import ProjectsIntro from "../Components/Projects/ProjectsIntro/ProjectsIntro";

describe("Projects intro", () => {
  it("presents the carousel as the training portfolio", () => {
    render(<ProjectsIntro />);

    expect(screen.getByRole("heading", { level: 2, name: "Training portfolio" })).toBeInTheDocument();
  });

  it("dates the projects to 2020 and 2021, before professional work", () => {
    render(<ProjectsIntro />);

    expect(screen.getByText(/built in 2020 and 2021/i)).toBeInTheDocument();
  });

  it("tells visitors how to open a project", () => {
    render(<ProjectsIntro />);

    expect(screen.getByText(/click or tap one/i)).toBeInTheDocument();
  });
});
