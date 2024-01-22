import { z } from "zod";

export const activitySchema = z.object({
  id: z.number(),
  sport_type: z.string(),
  trainer: z.boolean(),
  start_date_local: z.string(),
  distance: z.number(),
});

export type Activity = z.infer<typeof activitySchema>;

export const activitiesSchema = z.array(activitySchema);
