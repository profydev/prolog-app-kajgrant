import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  it("shows a loading indicator", () => {
    // check that the loading indicator is shown
    cy.get("[data-cy='loading-indicator']").should("be.visible");

    // wait for request to resolve
    cy.wait("@getProjects");

    // check that the loading indicator does not exist after loading
    cy.get("[data-cy='project-list']").should("be.visible");
    cy.get("[data-cy='loading-indicator']").should("not.exist");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusLabels: { [key: string]: string } = {
        stable: "stable",
        info: "stable",
        warning: "warning",
        critical: "critical",
        error: "critical",
      };

      // get all project cards
      cy.get("main")
        .find('[data-cy="project"]')
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            capitalize(statusLabels[mockProjects[index].status]),
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
