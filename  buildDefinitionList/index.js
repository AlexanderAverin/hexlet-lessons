const buildDefinitionList = (arr) => {
    if (arr.length === 0) {
        return "";
    }
    const html = [["<dl><dt>"],["</dt><dd>"], ["</dd><dt>"], ["</dt><dd>"], ["</dd></dl>"]];
    let i = 0
    let arrI = 0;
        while (i < html.length - 1) {
            while (arrI < arr.length) {
                for (const item of arr[arrI]) {
                    html[i].push(item);
                    html[i] = html[i].join("");
                    i++;
                }
                arrI++;
        }
    }
    return html.join("");
};
const definitions1 = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];
console.log(buildDefinitionList(definitions1));