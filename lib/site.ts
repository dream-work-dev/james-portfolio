const LOCAL_URL = "http://localhost:3000";

export function getSiteUrl(): URL {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!configuredUrl) {
    return new URL(LOCAL_URL);
  }

  return new URL(
    configuredUrl.startsWith("http")
      ? configuredUrl
      : `https://${configuredUrl}`,
  );
}
