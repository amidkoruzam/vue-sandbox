const configMap = {
  DATADOG_LOGGER_CLIENT_TOKEN: process.env.DATADOG_LOGGER_CLIENT_TOKEN,
  DATADOG_LOGGER_SITE: process.env.DATADOG_LOGGER_SITE,
};

let key: keyof typeof configMap;

for (key in configMap) {
  if (!configMap[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
}

export const config = configMap as Record<keyof typeof configMap, string>;
