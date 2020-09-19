import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        // $el дом элемент для отрисовки нашего excel
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')

        this.components.forEach(Component => {
            // корневой элемент для каждого компанента
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
        })
        return $root
    }

    // складываем в шаблон
    render() {
        this.$el.append(this.getRoot())
    }
}
