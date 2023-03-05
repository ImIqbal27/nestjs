// @ts-nocheck
export class Constants {
  static PORT = process.env.PORT || 8000;
  static APP_NAME = process.env.APP_NAME || "IronMan";
  static EXPIRES_IN = process.env.EXPIRES_IN || "3000s";
  static DATABASE =
    process.env.DATABASE ||
    "mongodb+srv://iamhasan9501:cgizJ0uMb8PZ7NRB@cluster0.lkqzpdk.mongodb.net/?retryWrites=true&w=majority/nestjsmongodb1";
  static SECRET = process.env.SECRET || "secretKey";
}
