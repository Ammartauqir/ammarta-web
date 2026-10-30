import { format, parseISO } from "date-fns";

export function buildWorkoutChartData(activities) {
  return [...activities]
    .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
    .map((activity) => ({
      id: activity.id,
      name: activity.name,
      type: activity.type,
      date: format(parseISO(activity.start_date), "MMM dd"),
      start_date: activity.start_date,
      distanceKm: Number((activity.distance / 1000).toFixed(2)),
      durationMin: activity.moving_time / 60,
      speedKmh: Number((activity.average_speed * 3.6).toFixed(2)),
      distance: activity.distance,
      moving_time: activity.moving_time,
      average_speed: activity.average_speed,
    }));
}
