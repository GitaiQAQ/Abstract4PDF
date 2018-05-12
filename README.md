## Abstract4PDF

1. Take "screenshots" for the elements of webpage.
2. Reformat by [Document Definitions][^pdfmake] and export to PDF.

## How to use

```html
<!--[if lt IE 9]>

<script src="https://cdn.bootcss.com/babel-polyfill/7.0.0-beta.46/polyfill.min.js"></script>
<script src="./flashcanvas/flashcanvas.js"></script>

<script type="text/javascript" src="./canvg/rgbcolor.js"></script> 
<script src="https://cdn.bootcss.com/stackblur-canvas/1.4.1/stackblur.min.js"></script>
<script src="https://cdn.bootcss.com/canvg/1.5/canvg.min.js"></script>

<![endif]-->

<script src="./pdfmake.min.js"></script>
<!--
vfs_fonts.js with CJK fonts is very huge. So use canvas.
script src="./vfs_fonts.js"></script
-->
<script src="./html2canvas.js"></script>
<script src="./abstract4pdf.js"></script>
```

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