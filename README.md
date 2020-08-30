# color-name
[![pipeline status](https://gitlab.com/simonbreiter/color-name/badges/master/pipeline.svg)](https://gitlab.com/simonbreiter/color-name/commits/master)
[![coverage report](https://gitlab.com/simonbreiter/color-name/badges/master/coverage.svg)](https://gitlab.com/simonbreiter/color-name/commits/master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Repository of [colorname.io](https://colorname.io)

## Getting started

Local development without docker:
```bash
npm run dev
```

Local development with docker:
```bash
npm run docker:dev
```

## Installation with Helm

```bash
kubectl create namespace color-name
````

ARM:
```bash
 helm install color-name chart --namespace color-name --set image.tag=fe2140d7-arm64
 ```

