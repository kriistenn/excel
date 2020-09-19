export class Excel {
    constructor(selector, options) {
        // $el дом элемент для отрисовки нашего excel
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
}
