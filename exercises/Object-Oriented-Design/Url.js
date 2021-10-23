const getObj = (params) => params.split('&').reduce((arr, item) => {
  const [key, value] = item.split('=');
  return { ...arr, [key]: value };
}, {});

class Url {
  constructor(stringUrl) {
    this.parsedUrl = new URL(stringUrl);
  }

  getScheme() {
    const { protocol } = this.parsedUrl;
    return protocol.slice(0, protocol.length - 1);
  }

  getHostName() {
    return this.parsedUrl.hostname;
  }

  getQueryParams() {
    const paramsFromUrl = this.parsedUrl.searchParams.toString();
    return getObj(paramsFromUrl);
    // (Object.fromEntries(parsedUrl.searchParams);
  }

  getQueryParam(key, defaultValue = null) {
    return this.parsedUrl.searchParams.get(key) ?? defaultValue;
  }

  equals(url) {
    return this.parsedUrl.toString() === url.parsedUrl.toString();
  }
}

const url = new Url('http://yandex.ru:80?key=value&key2=value2');

// console.log(url.getQueryParams());
