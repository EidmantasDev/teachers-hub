## Installation

Create and fill .env file according to .env-example

```bash
$ docker run --name mongo -p 27017:27017 -d mongo
$ yarn install
```

##Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

[MIT licensed](LICENSE).
