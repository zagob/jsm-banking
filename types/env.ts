import { z } from "zod";

const envSchema = z.object({
  NEXT_APPWRITE_KEY: z.string(),
  NEXT_PUBLIC_SITE_URL: z.string(),
  NEXT_PUBLIC_APPWRITE_ENDPOINT: z
    .string()
    .url()
    .default("https://cloud.appwrite.io/v1"),
  NEXT_PUBLIC_APPWRITE_PROJECT: z.string(),
  APPWRITE_DATABASE_ID: z.string(),
  APPWRITE_USER_COLLECTION_ID: z.string(),
  APPWRITE_BANK_COLLECTION_ID: z.string(),
  APPWRITE_TRANSACTION_COLLECTION_ID: z.string(),
  PLAID_CLIENT_ID: z.string(),
  PLAID_SECRET: z.string(),
  PLAID_ENV: z.string().default("sandbox"),
  PLAID_PRODUCTS: z.string().default("auth,transactions,identity"),
  PLAID_COUNTRY_CODES: z.string().default("US,CA"),
  DWOLLA_KEY: z.string(),
  DWOLLA_SECRET: z.string(),
  DWOLLA_BASE_URL: z.string().default("https://api-sandbox.dwolla.com"),
  DWOLLA_ENV: z.string().default("sandbox"),
});

export const env = envSchema.parse(process.env);
