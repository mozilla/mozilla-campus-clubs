# [Mozilla Campus Clubs](https://campus.mozilla.community/)

Official website of Mozilla Campus Clubs.

## Hack the site

Thank you for contributing! Just follow these simple steps to setup the project.

#### Step 1
Make sure you have [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Jekyll]() installed in your System.

#### Step 2
Clone the repo

```sh
$ git clone https://github.com/mozilla/mozilla-campus-clubs
```

#### Step 3

To install the dependencies. First you need change your directory to mozilla-campus-clubs

```sh
$ cd mozilla-campus-clubs  
$ bundle install
```

#### Step 4

Build the site using the following developer config

```sh
$ bundle exec jekyll build --config ./_config-dev.yml
```

This builds the website under the `_site` folder. The simplest way to browse it is to use python's http server. For that. you can follow the following steps

```sh
$ cd _site
$ python3 -m http.server
```

You will be able to access the site at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Setting up for development
If you want to contribute, Just Fork and Clone the forked repo, create an issue in this repo first and then a pull request to submit changes.
