export const ENV = {
  DV: "development",
  PR: "production",
} as const;

export type EnvType = "production" | "development";

export const ENV_TYPE: EnvType = (process?.env?.NEXT_PUBLIC_ENV ??
  ENV.DV) as EnvType;

export const HOST = {
  [ENV.DV]: "http://localhost:3000",
  [ENV.PR]: "https://huns-log.vercel.app",
} as const;
