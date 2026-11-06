.PHONY: dev build clean

dev:
	bundle exec jekyll serve --livereload

build:
	bundle exec jekyll build

clean:
	rm -rf _site .jekyll-cache
