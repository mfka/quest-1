import type { CryptoCurrencyDTO } from "../entity/crypto-currenct.dto.mjs";

export type CryptoCurrencyRepository = {
  save: (data: CryptoCurrencyDTO) => Promise<void>;
  findBySymbol: (
    symbol: string,
    filters?: {
      startDate?: Date;
      endDate?: Date;
    }
  ) => Promise<CryptoCurrencyDTO | null>;
};
