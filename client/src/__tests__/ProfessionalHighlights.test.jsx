import { render, screen, within } from "@testing-library/react";
import ProfessionalHighlights from "../Components/ProfessionalHighlights/ProfessionalHighlights";
import { professionalHighlights } from "../Components/ProfessionalHighlights/highlightsData";

describe("Professional highlights table", () => {
  it("has a column for workplace, team, years and contributions", () => {
    render(<ProfessionalHighlights />);

    const columnHeadings = screen.getAllByRole("columnheader").map((heading) => heading.textContent);
    expect(columnHeadings).toEqual(["Workplace", "Team", "Years", "Contributions"]);
  });

  it("has one row per workplace, newest first", () => {
    render(<ProfessionalHighlights />);

    const workplaces = screen.getAllByRole("rowheader").map((rowHeader) => rowHeader.textContent);
    expect(workplaces).toEqual(["Snyk", "Chewy", "MassMutual", "UNC Chapel Hill"]);
  });

  it("shows the team, years and contributions for a workplace in its row", () => {
    render(<ProfessionalHighlights />);

    const chewyRow = screen.getByRole("rowheader", { name: /^Chewy/ }).closest("tr");
    expect(within(chewyRow).getByText("Developer Experience")).toBeInTheDocument();
    expect(within(chewyRow).getByText("2025 – 2026")).toBeInTheDocument();
    expect(within(chewyRow).getByText(/Led front end development of the "Teams" feature/)).toBeInTheDocument();
    const chewyBullets = within(chewyRow).getAllByRole("listitem").map((bullet) => bullet.textContent);
    expect(chewyBullets[2]).toMatch(/^Soaked up the mindset that internal customers deserve the customer treatment/);
  });

  it("lists each workplace's contributions as bullet points", () => {
    render(<ProfessionalHighlights />);

    professionalHighlights.forEach((highlight) => {
      const row = screen.getByRole("rowheader", { name: new RegExp(`^${highlight.workplace}`) }).closest("tr");
      const bullets = within(row).getAllByRole("listitem");
      expect(bullets.map((bullet) => bullet.textContent)).toEqual(highlight.contributions);
    });
  });

  it("labels every cell so the stacked phone layout can name each field", () => {
    render(<ProfessionalHighlights />);

    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(professionalHighlights.length * 3);
    cells.forEach((cell) => expect(cell).toHaveAttribute("data-label"));
  });

  it("shows the UNC Chapel Hill years and team", () => {
    render(<ProfessionalHighlights />);

    const uncRow = screen.getByRole("rowheader", { name: /^UNC Chapel Hill/ }).closest("tr");
    expect(within(uncRow).getByText("2013 – 2021")).toBeInTheDocument();
    expect(within(uncRow).getByText("Department of Germanic and Slavic Languages and Literatures")).toBeInTheDocument();
  });

  it("links Snyk, Chewy and MassMutual to their GitHub activity, but not UNC", () => {
    render(<ProfessionalHighlights />);

    const githubHref = (workplace) =>
      within(screen.getByRole("rowheader", { name: new RegExp(`^${workplace}`) }).closest("tr")).queryByRole("link", {
        name: `GitHub activity at ${workplace}`,
      });

    expect(githubHref("Snyk")).toHaveAttribute("href", "https://github.com/plang-snyk");
    expect(githubHref("Chewy")).toHaveAttribute("href", expect.stringContaining("github.com/plang-chwy?tab=overview&from=2025-01-01"));
    expect(githubHref("MassMutual")).toHaveAttribute("href", expect.stringContaining("github.com/pslang11?tab=overview&from=2023-01-01"));
    expect(githubHref("UNC Chapel Hill")).not.toBeInTheDocument();
  });
});
