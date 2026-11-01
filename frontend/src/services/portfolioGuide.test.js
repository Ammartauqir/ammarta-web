import { answerPortfolioQuestion } from "./portfolioGuide";
import { projects } from "../data/portfolio";

test("research answers link to documented thesis and research background", () => {
  const answer = answerPortfolioQuestion("What is his research background?");
  expect(answer.text).toMatch(/Continental ADAS/);
  expect(answer.text).toMatch(/TU Dortmund/);
  expect(answer.sources).toContainEqual(
    expect.objectContaining({ to: "/projects/lidar-segmentation" }),
  );
});

test.each(projects)(
  "answers contribution questions within $name without borrowing another project",
  (project) => {
    const answer = answerPortfolioQuestion(
      "What was his contribution?",
      project.id,
    );
    expect(answer.text).toBe(project.contribution);
    expect(answer.sources[0].to).toBe(`/projects/${project.id}#contribution`);
  },
);

test("a named project overrides a previously selected project", () => {
  const answer = answerPortfolioQuestion(
    "Explain thermal vision",
    "lidar-segmentation",
  );
  expect(answer.sources[0].to).toBe("/projects/thermal-vision");
});

test("reports unavailable experimental evidence instead of inventing numbers", () => {
  const answer = answerPortfolioQuestion(
    "Show evidence and accuracy results",
    "thermal-vision",
  );
  expect(answer.text).toMatch(/synthetic illustration/);
  expect(answer.text).toMatch(
    /Measured results and public code are not supplied/,
  );
  expect(answer.sources[0].to).toBe("/projects/thermal-vision#evidence");
});

test("unsupported requests do not produce invented personal information", () => {
  expect(answerPortfolioQuestion("What is his salary?").text).toMatch(
    /not available/,
  );
  expect(answerPortfolioQuestion("What is the capital of Peru?").text).toMatch(
    /don’t have a supported answer/,
  );
});

test("contact questions use the published contact details and no availability promise", () => {
  const answer = answerPortfolioQuestion("How do I contact him?");
  expect(answer.text).toContain("ammar.tauqir2@gmail.com");
  expect(answer.text).toContain("confirmed directly");
});
