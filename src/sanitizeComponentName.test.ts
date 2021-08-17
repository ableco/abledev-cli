import sanitizeComponentName from "./sanitizeComponentName";

describe("sanitizeComponentName", () => {
  it("forbids straneous values", () => {
    expect(() => sanitizeComponentName("hello/world")).toThrow();
    expect(() =>
      sanitizeComponentName("hello; drop database postgres;"),
    ).toThrow();
    expect(() => sanitizeComponentName("hello; rm -rf /;")).toThrow();
    expect(() => sanitizeComponentName("@helloworld")).toThrow();
  });

  it("Allows names that look like variable names", () => {
    expect(sanitizeComponentName("DueDate")).toEqual("DueDate");
    expect(sanitizeComponentName("due_date")).toEqual("due_date");
    expect(sanitizeComponentName("DashboardView")).toEqual("DashboardView");
    expect(sanitizeComponentName("Dashboard_View")).toEqual("Dashboard_View");
    expect(sanitizeComponentName("Dashboard$View")).toEqual("Dashboard$View");
  });

  it("Renames values that have dashes", () => {
    expect(sanitizeComponentName("due-date")).toEqual("dueDate");
    expect(sanitizeComponentName("super-due-date")).toEqual("superDueDate");
    expect(sanitizeComponentName("super-due-")).toEqual("superDue");
    expect(sanitizeComponentName("Due-date")).toEqual("DueDate");
    expect(sanitizeComponentName("dashboard-view")).toEqual("dashboardView");
    expect(sanitizeComponentName("Dashboard-View")).toEqual("DashboardView");
    expect(sanitizeComponentName("Dashboard-view")).toEqual("DashboardView");
  });
});
