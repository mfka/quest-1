import type { CryptoCurrencyDTO } from "../../domain/entity/crypto-currenct.dto.mts";

export type TradeProvider = {
  provideTrades: (
    symbol: string,
    range?: number
  ) => Promise<CryptoCurrencyDTO[]>;
};
