import { render, screen } from "@testing-library/react";
import About from "../Components/About/About";

describe("About section", () => {
  it("introduces the current role at Snyk", () => {
    render(<About />);

    expect(screen.getByText(/Identity & Tenancy team at\s+Snyk/)).toBeInTheDocument();
  });

  it("no longer describes a job search", () => {
    render(<About />);

    expect(screen.queryByText(/laid off/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/searching for my\s+next/i)).not.toBeInTheDocument();
  });

  it("labels the MassMutual role as earlier experience", () => {
    render(<About />);

    expect(screen.getByRole("heading", { name: /Earlier professional experience/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Early career" })).toBeInTheDocument();
  });
});
