import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer/Footer";

describe("Footer", () => {
  it("credits the author with a link to their GitHub", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Patrick Lang" })).toHaveAttribute(
      "href",
      "https://github.com/patricklang87"
    );
    expect(screen.getByText(/2021, 2026/)).toBeInTheDocument();
  });

  it("no longer credits technology logos", () => {
    render(<Footer />);

    expect(screen.queryByText(/Technology logos/)).not.toBeInTheDocument();
  });
});
