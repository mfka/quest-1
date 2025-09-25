import { expect, test, describe } from "vitest";
import { isTradeTrendUp } from "./trade-trend.service.mjs";
import type { CryptoCurrencyDTO } from "../../domain/entity/crypto-currenct.dto.mts";

describe("isTradeTrendUp", () => {
  test("shows false when the latest trade price is below average", () => {
    const tradesMock = [
      {
        id: 1,
        price: 105,
        symbol: "BTCUSDT",
      },
      {
        id: 2,
        price: 101,
        symbol: "BTCUSDT",
      },
      {
        id: 3,
        price: 102,
        symbol: "BTCUSDT",
      },
      {
        id: 4,
        price: 99,
        symbol: "BTCUSDT",
      },
      {
        id: 5,
        price: 78,
        symbol: "BTCUSDT",
      },
    ] satisfies CryptoCurrencyDTO[];

    const result = isTradeTrendUp(tradesMock);

    expect(result).toBe(false);
  });

  test("shows true when the latest trade price is above average", () => {
    const tradesMock = [
      {
        id: 1,
        price: 105,
        symbol: "BTCUSDT",
      },
      {
        id: 2,
        price: 101,
        symbol: "BTCUSDT",
      },
      {
        id: 3,
        price: 102,
        symbol: "BTCUSDT",
      },
      {
        id: 4,
        price: 99,
        symbol: "BTCUSDT",
      },
      {
        id: 5,
        price: 140,
        symbol: "BTCUSDT",
      },
    ] satisfies CryptoCurrencyDTO[];

    const result = isTradeTrendUp(tradesMock);

    expect(result).toBe(true);
  });

  test("throws NoTradeTrendError when trades array is empty", () => {
    const tradesMock: CryptoCurrencyDTO[] = [];

    expect(() => isTradeTrendUp(tradesMock)).toThrowError(
      "Cannot determine trade trend"
    );
  });
});
