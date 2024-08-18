Sentry.init do |config|
  config.dsn = 'https://826a0f90537c0212dabcb2c4024f14e9@o4507793485856768.ingest.us.sentry.io/4507793525374976'
  config.breadcrumbs_logger = [:active_support_logger, :http_logger]

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for tracing.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |context|
    true
  end
  # Set profiles_sample_rate to profile 100%
  # of sampled transactions.
  # We recommend adjusting this value in production.
  config.profiles_sample_rate = 1.0

  Sentry.capture_message("test message")

end
