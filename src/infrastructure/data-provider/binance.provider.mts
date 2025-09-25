import { MainClient } from "binance";
import { TradeSchema } from "../schemas/trade.schema.mjs";
import type { TradeProvider } from "../../application/providers/trade.provider.mts";

const client = new MainClient({});

export const binanceProvider: TradeProvider = {
  provideTrades: async (symbol: string, limit = 100) => {
    const trades = await client.getHistoricalTrades({
      symbol,
      limit,
    });

    return trades.map((trade) => ({
      ...TradeSchema.parse({
        id: trade.id,
        price: trade.price,
      }),
      symbol,
    }));
  },
};
