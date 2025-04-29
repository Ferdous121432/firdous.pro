import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://aeb17b6922004ba46fe797246e590030@o4508909507379200.ingest.de.sentry.io/4509119282479184",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});
