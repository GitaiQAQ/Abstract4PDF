import { createPdf, TDocumentDefinitions } from "pdfmake/build/pdfmake";

interface DocumentDefinitions extends TDocumentDefinitions {
    filename: string,
    images?: object,
    onprogressupdate?: Function,
    styles?: object
}

const USEFULL_STYLE = [
    "background",
    "background-clip",
    "background-color",
    "background-image",
    "url",
    "linear-gradient",
    "radial-gradient",
    "background-origin",
    "background-position",
    "background-size",
    "border",
    "border-color",
    "border-radius",
    "border-style",
    "border-width",
    "bottom",
    "box-sizing",
    "content",
    "color",
    "display",
    "flex",
    "float",
    "font",
    "font-family",
    "font-size",
    "font-style",
    "font-variant",
    "font-weight",
    "height",
    "left",
    "letter-spacing",
    "line-break",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "opacity",
    "overflow",
    "overflow-wrap",
    "padding",
    "position",
    "right",
    "text-align",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-shadow",
    "text-transform",
    "top",
    "transform",
    "visibility",
    "white-space",
    "width",
    "word-break",
    "word-spacing",
    "word-wrap",
    "z-index",
    "fill",
    "fill-opacity",
    "text-anchor",
    "stroke",
    "stroke-opacity",
    "stroke-dasharray",
    "shape-rendering",
    "stroke-width",
    "shape-rendering"
];


const NOT_NONE = function (value: string) {
    if (value == "none") return false;
    return true;
}

const HACK_FOR_STYLE: {
    [key: string]: Function
} = {
    "transform": NOT_NONE,
    "filter": NOT_NONE
}

class Abstract4PDF {
    private mDocDefinition: DocumentDefinitions;
    // A4: [595.28, 841.89],
    // https://github.com/bpampuch/pdfmake/blob/master/src/standardPageSizes.js
    public static pageSize = {
        width: 595.28,
        height: 841.89
    };

    // https://github.com/bpampuch/pdfmake/blob/af6179764145aa6dd871fa065596344599593432/src/printer.js#L98
    public static pageMargins:number = 40;

    public static contentSize = {
        width: Abstract4PDF.pageSize.width - Abstract4PDF.pageMargins * 2,
        height: Abstract4PDF.pageSize.height - Abstract4PDF.pageMargins * 2
    };
    
    constructor(docDefinition: DocumentDefinitions) {
        this.mDocDefinition = docDefinition;
    }
    
    /**
     * Get DPI from `window.devicePixelRatio`
     * @returns 
     */
    private DPI():number {
        if (window.devicePixelRatio && window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
        return 1;
    }

    /**
     * Get computed style string of selector
     * @param selector
     */
    private getComputedStyleString(selector: Element) {
        const box = window.getComputedStyle(selector);
        let style = "";
        Array.prototype.forEach.call(box, function (name:string) {
            const value = box.getPropertyValue(name);
            // Filter style for reduce XML doc size
            if (USEFULL_STYLE.indexOf(name) != -1 && (!HACK_FOR_STYLE[name] || (HACK_FOR_STYLE[name] && HACK_FOR_STYLE[name](value))))
                style += name + ":" + value + ";";
        });
        return style;
    }

    /**
     * Append computed style to Element attribute
     * @param selector Root element(s) of target DOM trees
     * @param recursive Recursive?
     */
    appendComputedStyle(selector: NodeList | Node, recursive:boolean = false) {
        let _this = this;

        if (selector instanceof Element) {
            if (selector instanceof Element) {
                selector.setAttribute('style', this.getComputedStyleString(selector));
                if (recursive && selector.childNodes) {
                    _this.appendComputedStyle(selector.childNodes, recursive);
                }
            }
        }

        if (selector instanceof NodeList) {
            Array.prototype.map.call(selector, function (elm: Node) {
                _this.appendComputedStyle(elm, recursive);
            })
        }
    }

    /**
     * Take `screenshots` of selector
     * @param selector Element of ID
     * @param lable return kv pair object named by lable
     * @param scale 
     * @param logging show debug log
     */
    private async elm2img(
        selector: string | HTMLElement, 
        lable: string = null,
        scale: number = 1,
        logging: boolean = false
    ): Promise<string | object> {
        if (typeof selector == 'string') {
            selector = document.getElementById(selector);
        }

        if (logging) console.debug('elm2img:', selector.tagName, selector.id, selector.className);

        this.appendComputedStyle(selector, true);

        // Computed scale by DPI, custom scale arg and element attribute
        scale *= this.DPI() * (parseFloat(selector.dataset.pdf_scale) || 1)

        return await html2canvas(selector, {
            scale: scale,
            logging: logging,
            useCORS: true
        }).then(function (_canvas) {
            let ctx = _canvas.getContext('2d');
            
            ctx.imageSmoothingEnabled = false;
            
            if (lable) {
                let pair: {
                    [key: string]: string
                } = {};
                pair[lable] = _canvas.toDataURL()
                ctx.fillText(lable, 10, 10);
                return pair;
            }
            return _canvas.toDataURL();
        });
    }

    /**
     * Add element for Document
     * @param ids ids of element needed take `screenshots`
     */
    public async build(ids: string[]) {
        this.mDocDefinition = Object.assign({
            filename: "Untitled.pdf",
            pageSize: "A4",
            content: this.mDocDefinition.content || [
                {
                    image: 'placeholder',
                    style: 'section'
                }
            ],
            images: Object.assign(this.mDocDefinition.images, {
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVQ4Ee1VPUsDQRB9s3dBRCRNQvCjkDQW/hJ/gb9AOwWDoIXFgYXYXGP+hYW1/gIr7WzsE8VGxZBcwt04dznCJWw2twtWutXMmzdvlrd7t4SZVbvi1ZihZuCFqT9A/B7Qd5FI44RpPcQpE1oC1IsEq5jRBeGyc0zXaV8mvhbyOREurIRMZMZhp0VthYB9mXBi4jrUztIev1bNbKg6CMxvIWwg5GWVDOHNZ7lX6l/wrG+Fzbh/ca1bf9QWBhKtHznobgtjKF92ZBL3TUWpRbK7LhiVCY8kY3xK/iTiexNcEywSXxKBrfHvrdBN2JRsp4BoQ3dbtHLT4K+JqxWw8vr4YDaf+vR+SmXRWw99lT9N96VaypIYtwgoyWyJRtiX3T+X7TXxROcxGeAo5chlyNcBVxrb2JVpTUHsz4IQi/DL6wPucENxqvoDx69PXP8OKn4AAAAASUVORK5CYII="
            }),
            styles: Object.assign(this.mDocDefinition.styles, {
                section: {
                    margin: [0, 20, 0, 0]
                }
            })   
        }, this.mDocDefinition);

        let imgs = await Promise.all(ids.map(id => 
            (this.mDocDefinition.onprogressupdate && this.mDocDefinition.onprogressupdate("resource", id),
            this.elm2img(id, id, 2, true))));

        let doc = Object.assign(this.mDocDefinition, {
            images: Object.assign(this.mDocDefinition.images, Object.assign.apply(null, imgs))
        });

        this.mDocDefinition = doc;
        return this;
    }

    /**
     * Short method of pdfmake
     */
    private _createPdf() {
        if (!this.mDocDefinition.filename.endsWith(".pdf")) {
            this.mDocDefinition.filename += ".pdf";
        }
        return createPdf(this.mDocDefinition);
    }

    /**
     * Download file
     */
    public download(cb: Function) {
        this._createPdf().download(this.mDocDefinition.filename, cb);
    }

    /**
     * Open in new windows
     */
    public open() {
        this._createPdf().open();
    }
}

/**
 * Export to global env
 */
const _global = (window /* browser */) as any
_global.Abstract4PDF = Abstract4PDF