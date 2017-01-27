[![Build Status](https://travis-ci.org/telemark/micro-status-distribusjon-svarut.svg?branch=master)](https://travis-ci.org/telemark/micro-status-distribusjon-svarut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-status-distribusjon-svarut
Stats for the SvarUT bot

## API

### **/raw**

Returns json of unformatted data.

#### GET

```bash
$ curl https://svarut.distribusjon.status.t-fk.win/raw
```

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://svarut.distribusjon.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://svarut.distribusjon.status.t-fk.win/html
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-status-distribusjon-svarut.png "Robohash image of micro-status-distribusjon-svarut")
