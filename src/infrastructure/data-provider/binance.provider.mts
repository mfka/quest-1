import { MainClient } from "binance";
import { TradeSchema } from "../schemas/trade.schema.mts";

const client = new MainClient({});

export const binanceProvider = {
  provideBySymbol: async (symbol: string) => {
    const trades = await client.getHistoricalTrades({ symbol, limit: 5000 });

    return trades.map((trade) => ({
      ...TradeSchema.parse({
        id: trade.id,
        price: trade.price,
      }),
      symbol,
    }));
  },
};
