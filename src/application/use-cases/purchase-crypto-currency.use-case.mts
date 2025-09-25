import type { TradeProvider } from "../providers/trade.provider.mts";
import type { LoggerService } from "../services/logger.service.mjs";
import { isTradeTrendUp } from "../services/trade-trend.service.mjs";

export const purchaseCryptoCurrencyUseCase =
  (tradeProvider: TradeProvider, logger: LoggerService) =>
  async (symbol: string, range: number = 100) => {
    const trades = await tradeProvider.provideTrades(symbol, range);
    const isUpTrend = isTradeTrendUp(trades);

    if (isUpTrend) {
      logger.info(`Purchase ${symbol}`);
    } else {
      logger.info(`Do not purchase ${symbol}`);
    }
  };
