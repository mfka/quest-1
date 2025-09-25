import { purchaseCryptoCurrencyUseCase } from "./application/use-cases/purchase-crypto-currency.use-case.mjs";
import { binanceProvider } from "./infrastructure/data-provider/binance.provider.mjs";
import { logger } from "./infrastructure/logger/logger.mjs";

logger.info("App started");

// TODO: Some Dependency Injection setup
export const diContainer = {};

// TODO: implement interface to use this function http/grpc/cli
await purchaseCryptoCurrencyUseCase(binanceProvider, logger)("BTCUSDT", 300);
await purchaseCryptoCurrencyUseCase(binanceProvider, logger)("BTCUSDT", 4000);
await purchaseCryptoCurrencyUseCase(binanceProvider, logger)("BTCUSDT", 2000);
