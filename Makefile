# Must have `sentry-cli` installed globally
# See: https://docs.sentry.io/cli/installation/
# Following variable must be passed in
# SENTRY_AUTH_TOKEN
SENTRY_ORG=sentry-test
SENTRY_PROJECT=fullstory-demo
VERSION=`sentry-cli releases propose-version`
PREFIX=static/js

setup_release: create_release associate_commits upload_sourcemaps

create_release:
	sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(VERSION)

associate_commits:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(VERSION)

upload_sourcemaps:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(VERSION) \
		upload-sourcemaps --url-prefix "~/$(PREFIX)" --validate build/$(PREFIX)