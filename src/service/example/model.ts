import { z } from "zod";

const ExampleModel = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export type ZExampleModel = z.infer<typeof ExampleModel>;
