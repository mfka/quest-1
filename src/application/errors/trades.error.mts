export class NoTradeTrendError extends Error {
  constructor() {
    super("Cannot determine trade trend");
  }
}
