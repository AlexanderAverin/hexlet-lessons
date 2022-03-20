const getDomainInfo = (domain) => {
  if (domain.startsWith("https://") === true) {
    const scheme = "https";
    const name = domain.replace("https://", "");
    const info = {scheme, name};
    return info;
  } else if (domain.startsWith("https://") === false) {
    const scheme = "http";
    const name = domain.replace("http://", "");
    const info = {scheme, name};
    return info;
  } else if (domain.startsWith("h") === false) {
    const scheme = "http";
    const name = domain;
    const info = {scheme, name};
    return info;
  }
};
console.log(getDomainInfo("yandex.ru"));