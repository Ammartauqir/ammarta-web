import { buildWorkoutChartData } from "./workoutChart";

describe("buildWorkoutChartData", () => {
  it("converts meters to kilometers and sorts chronologically", () => {
    const rows = buildWorkoutChartData([
      {
        id: 2,
        name: "Later run",
        type: "Run",
        distance: 5000,
        moving_time: 1800,
        average_speed: 2.777,
        start_date: "2024-02-02T10:00:00Z",
      },
      {
        id: 1,
        name: "Earlier run",
        type: "Run",
        distance: 10000,
        moving_time: 3600,
        average_speed: 2.777,
        start_date: "2024-02-01T10:00:00Z",
      },
    ]);

    expect(rows).toHaveLength(2);
    expect(rows[0].id).toBe(1);
    expect(rows[0].distanceKm).toBe(10);
    expect(rows[1].distanceKm).toBe(5);
    expect(rows[1].distanceKm).not.toBe(5000);
  });
});
