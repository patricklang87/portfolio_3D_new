import { render, screen, within } from "@testing-library/react";
import ProfessionalHighlights from "../Components/ProfessionalHighlights/ProfessionalHighlights";
import { professionalHighlights } from "../Components/ProfessionalHighlights/highlightsData";

describe("Professional highlights table", () => {
  it("has a column for workplace, team, years and learnings", () => {
    render(<ProfessionalHighlights />);

    const columnHeadings = screen.getAllByRole("columnheader").map((heading) => heading.textContent);
    expect(columnHeadings).toEqual(["Workplace", "Team", "Years", "Learnings"]);
  });

  it("has one row per workplace, newest first", () => {
    render(<ProfessionalHighlights />);

    const workplaces = screen.getAllByRole("rowheader").map((rowHeader) => rowHeader.textContent);
    expect(workplaces).toEqual(["Snyk", "Chewy", "MassMutual", "UNC Chapel Hill"]);
  });

  it("shows the team, years and learnings for a workplace in its row", () => {
    render(<ProfessionalHighlights />);

    const chewyRow = screen.getByRole("rowheader", { name: "Chewy" }).closest("tr");
    expect(within(chewyRow).getByText("Developer Experience")).toBeInTheDocument();
    expect(within(chewyRow).getByText("2025 – 2026")).toBeInTheDocument();
    expect(within(chewyRow).getByText(/Teams.*feature/)).toBeInTheDocument();
  });

  it("labels every cell so the stacked phone layout can name each field", () => {
    render(<ProfessionalHighlights />);

    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(professionalHighlights.length * 3);
    cells.forEach((cell) => expect(cell).toHaveAttribute("data-label"));
  });

  it("marks placeholder rows so they can be spotted before publishing", () => {
    render(<ProfessionalHighlights />);

    const placeholderRows = professionalHighlights.filter((highlight) => highlight.isPlaceholder);
    const markedRows = document.querySelectorAll(".highlightPlaceholder");
    expect(markedRows).toHaveLength(placeholderRows.length);
  });
});
