import z from "zod";
import type { TradeDAO } from "../../application/daos/trade.dao.mts";

export const TradeSchema = z.object({
  id: z.number(),
  price: z.coerce.number(),
}) satisfies z.ZodType<TradeDAO>;
