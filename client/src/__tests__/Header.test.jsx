import { render, screen } from "@testing-library/react";
import Header from "../Components/Header/Header";

describe("Header navigation", () => {
  it("links to the experience and projects sections only", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "EXPERIENCE" })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: "PROJECTS" })).toHaveAttribute("href", "#projects");
    expect(screen.queryByRole("link", { name: "ABOUT" })).not.toBeInTheDocument();
  });
});
