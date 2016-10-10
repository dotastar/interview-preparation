const xmlparser = (xml) => {
    const matches = xml.match(/\<([a-zA-Z0-9\-]+)\>([\w\W]*)\<\/\1\>\s*/g);
    if (!matches) return xml;
    return matches.map(e => {
        const [elementName, inner] = e.trim().match(/^\<([a-zA-Z0-9\-]+)\>([\w\W]*)\<\/\1\>$/).slice(1, 3);
        
        return {
            elementName,
            children: xmlparser(inner.trim()),
        };
    });
}

console.log(JSON.stringify(xmlparser(`<note>
<to>Tove</to>
<from>Jani</from>
<heading>
    <h1>good</h1>
    <h2>better</h2>
</heading>
<body>Don't forget me this weekend!</body>
</note>`)));