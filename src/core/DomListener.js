// тут мы будем добавлять изолированные события для какого либо элемента 
export class DomListener {
    /* $root это тот корневой элемент на которого
        мы будем вешать различные слушатели */
    constructor($root) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
    }
}
