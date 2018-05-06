# Ellaism Core Website

This is the Ellaism Core website. Live page is at http://ellaism.org

## Building

It is recommended to [install RVM](https://rvm.io/rvm/install) and use Ruby 2.3.3

```
. ~/.rvm/scripts/rvm
rvm use 2.3.3
rvm gemset create ellaism.org
rvm gemset use ellaism.org
```

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

### Build JavaScript

`npm run-script build:js`
