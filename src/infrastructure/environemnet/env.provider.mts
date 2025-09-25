import "dotenv/config";
import z from "zod";

const EnvSchema = z.object({
  MONGODB_URL: z.url(),
});

export const env = EnvSchema.parse(process.env);
