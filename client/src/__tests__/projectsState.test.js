import { projects } from "../Components/Projects/projectsState";

describe("projects data", () => {
  it("has a unique title for every project", () => {
    const titles = projects.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(projects.map((project) => [project.title, project]))("%s has the fields the project views need", (_, project) => {
    expect(project.modelPath).toBeTruthy();
    expect(project.description).toEqual(expect.any(String));
    expect(project.technologies.length).toBeGreaterThan(0);
    expect(Array.isArray(project.screenshots)).toBe(true);
    expect(project.code_url).toMatch(/^https:\/\/github\.com\/patricklang87\/[\w.-]+$/);
    expect(() => new URL(project.deployment_url)).not.toThrow();
  });
});
