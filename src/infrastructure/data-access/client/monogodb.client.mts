import mongodb from "mongodb";
import { env } from "../../environemnet/env.provider.mjs";

export const mongoDbClient = new mongodb.MongoClient(env.MONGODB_URL);
