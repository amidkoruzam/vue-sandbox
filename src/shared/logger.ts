import { datadogLogs } from "@datadog/browser-logs";
import { config } from "./config";

datadogLogs.init({
  clientToken: config.DATADOG_LOGGER_CLIENT_TOKEN,
  site: process.env.DATADOG_LOGGER_SITE,
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
  env: config.ENV,
});

export const logger = datadogLogs.logger;
