import type { CryptoCurrencyDTO } from "../../domain/entity/crypto-currenct.dto.mts";
import { NoTradeTrendError } from "../errors/trades.error.mjs";

export const isTradeTrendUp = (trades: CryptoCurrencyDTO[]) => {
  if (trades.length === 0) {
    throw new NoTradeTrendError();
  }
  const calculateAvg =
    trades.reduce((acc, trade) => acc + trade.price, 0) / trades.length;
  const latestTrade = trades[trades.length - 1];

  if (latestTrade === undefined) {
    throw new NoTradeTrendError();
  }

  return latestTrade.price > calculateAvg;
};
