## Abstract4PDF

1. Take "screenshots" for the elements of webpage.
2. Reformat by [Document Definitions][^pdfmake] and export to PDF.

## How to use

```html
<body>
    <h3 id="head">
        Abstract4PDF <small>v0.1.0</small>
    </h3>
</body>
```

Use the following code, it rendering element `#head` and create file `Untitled.pdf`.

```js
let docDefinition = {
    filename: "Untitled.pdf",
    content: [
       {
           // Title
           image: 'head',
           style: 'section'
       },
       {
           // Placeholder
           image: 'placeholder',
           style: 'section'
       }
   ]
};

let builder = new Abstract4PDF(docDefinition);
builder.build(['head']);
builder.download();
```

## Thanks

[^pdfmake]: [pdfmake](https://github.com/bpampuch/pdfmake)
[^html2canvas]: [html2canvas](https://github.com/niklasvh/html2canvas)