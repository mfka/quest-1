import { mongoDbClient } from "./infrastructure/data-access/client/monogodb.client.mjs";
import { binanceProvider } from "./infrastructure/data-provider/binance.provider.mjs";
import { logger } from "./infrastructure/logger/logger.mjs";

logger.info("App started");

// TODO: Some Dependency Injection setup
export const diContainer = {};

binanceProvider
  .provideBySymbol("BTCUSDT", { form: new Date(), to: new Date() })
  .then((data) => {
    logger.info({ data }, "Data from Binance");
  });
