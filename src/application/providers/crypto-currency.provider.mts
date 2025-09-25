import type { CryptoCurrencyDTO } from "../dtos/crypto-currency.dto.mjs";

export type CryptoCurrencyProvider = {
  provide: (
    symbol: string,
    range: { form: Date; to: Date }
  ) => Promise<CryptoCurrencyDTO>;
};
