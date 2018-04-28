# Ellaism Core Website

This is the Ellaism Core website. Live page is at http://ellaism.org

## Building

### Dependencies

`gem install bundle`

Install all dependencies with

`bundle install`

#### MacOS

```brew install libxml2
bundle config build.nokogiri --use-system-libraries --with-xml2-include=$(brew --prefix libxml2)/include/libxml2
bundle install
```

### Generate Site

Use Jekyll to build the site.

https://jekyllrb.com/docs/usage/

`jekyll serve`

http://localhost:4000/

