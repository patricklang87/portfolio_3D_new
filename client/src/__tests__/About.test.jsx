import { render, screen } from "@testing-library/react";
import About from "../Components/About/About";

describe("About section", () => {
  it("shows only the Tanks fer Nuthin' personal project", () => {
    render(<About />);

    const headings = screen.getAllByRole("heading").map((heading) => heading.textContent);
    expect(headings).toHaveLength(1);
    expect(headings[0]).toMatch(/Personal project:\s+Tanks fer Nuthin'/);
  });

  it("links to the project's deployment and repositories", () => {
    render(<About />);

    expect(screen.getByRole("link", { name: "Frontend Deployment" })).toHaveAttribute(
      "href",
      "https://patricklang87.github.io/tanks_2/"
    );
    expect(screen.getByRole("link", { name: "Frontend Repo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Backend repo" })).toBeInTheDocument();
  });

  it("describes the project's status and the software factory experiment", () => {
    render(<About />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(/\(ongoing\)/);
    expect(screen.getByText(/software factory/i)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("no longer has the early career, skills or resume content", () => {
    render(<About />);

    expect(screen.queryByRole("heading", { name: "Early career" })).not.toBeInTheDocument();
    expect(screen.queryByText(/Technologies I use regularly/)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "View my resume" })).not.toBeInTheDocument();
  });
});
