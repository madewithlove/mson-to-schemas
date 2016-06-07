# mson-to-schemas

[![Build Status](https://travis-ci.org/madewithlove/mson-to-schemas.svg?branch=master)](https://travis-ci.org/madewithlove/mson-to-schemas)

This is a package made to accept the path to an APIB files containing data structures, and convert those to a folder of JSON schemas.

## Installation

```shell
$ npm install mson-to-schemas
```

## Usage

```shell
$ mson-to-schemas path/to/file.apib output-folder [--only some-structure,some-other-structure]
```

## Testing

```shell
$ npm test
$ npm run lint
```
