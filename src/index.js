import {Excel} from '@/components/excel/Excel'
import './scss/index.scss'

const excel = new Excel('#tag', {
    // массив компонентов header, toolbar и так далее
    components: []
})

console.log(excel)
