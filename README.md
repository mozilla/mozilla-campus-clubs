# Mozilla Campus Clubs

## Hack the site

Thank you for contributing! Just follow these simple steps

Clone the repo

``$ git clone https://github.com/mozilla/mozilla-campus-clubs``

Install the dependencies

``$ bundle install``

Build the site using the developer config

``$ bundle exec jekyll build --config ./_config-dev.yml``

This builds the website under the `_site` folder. The simplest way to browse it is to use python's http server.

```
cd _site
python3 -m http.server
```

You will be able to access the site at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

Clone this repo, create a issue first and then a pull request to submit changes.
