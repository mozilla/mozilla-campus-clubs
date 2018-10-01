# [Mozilla Campus Clubs](https://campus.mozilla.community/)

## Hack the site

Thank you for contributing! Just follow these simple steps

Clone the repo

```sh
$ git clone https://github.com/mozilla/mozilla-campus-clubs
```

To install the dependencies. First you need change your directory to mozilla-campus-clubs

```sh
$ cd mozilla-campus-clubs
$ bundle install
```

Build the site using the following developer config

```sh
$ bundle exec jekyll build --config ./_config-dev.yml
```

This builds the website under the `_site` folder. The simplest way to browse it is to use python's http server. For that. you can follow the following steps

```sh
cd _site
python3 -m http.server
```

You will be able to access the site at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

If you want to contribute, Just Clone this repo, create an issue first and then a pull request to submit changes.
