import { render, screen } from "@testing-library/react";
import About from "../Components/About/About";

describe("About section", () => {
  it("keeps the personal project, early career and resume link", () => {
    render(<About />);

    expect(screen.getByRole("heading", { name: /Personal project/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Early career" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View my resume" })).toBeInTheDocument();
  });

  it("no longer has the about me, earlier experience or this portfolio sections", () => {
    render(<About />);

    expect(screen.queryByRole("heading", { name: /A little about me/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Earlier professional experience/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "This portfolio" })).not.toBeInTheDocument();
    expect(screen.queryByAltText("Patrick Lang")).not.toBeInTheDocument();
  });

  it("no longer describes a job search", () => {
    render(<About />);

    expect(screen.queryByText(/laid off/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/searching for my\s+next/i)).not.toBeInTheDocument();
  });
});
