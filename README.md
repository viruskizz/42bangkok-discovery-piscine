# 42Bangkok discovery piscine

## Installation

Add path config for [WSL]
```shell
vim /etc/wsl.conf
``````conf
# add this code below
[interop]
appendWindowsPath = false
```

```shell
sudo apt-get install -y nodejs npm
```

```shell
npm install eslint --save-dev
./node_modules/.bin/eslint --init
npx install-peerdeps --dev eslint-config-airbnb
```
