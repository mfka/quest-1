import { mongoDbClient } from "./infrastructure/data-access/client/monogodb.client.mjs";
import { logger } from "./infrastructure/logger/logger.mjs";

logger.info("App started");

// Initialize MongoDB connection
await mongoDbClient.connect();
logger.info("Connected to MongoDB");
await mongoDbClient.db().command({ ping: 1 });
logger.info("Pinged MongoDB successfully");

// TODO: Some Dependency Injection setup
export const diContainer = {};
