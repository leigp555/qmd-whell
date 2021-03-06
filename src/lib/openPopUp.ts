import {createApp, h} from "vue";
import OpenPopUp from "./popUp.vue"

export const openPopUp = (options) => {
    let {title, style} = options
    const demo = document.createElement("div")
    document.body.appendChild(demo)
    const app = createApp(
        h(OpenPopUp, {title: title, style: style})
    )
    app.mount(demo)
    setTimeout(() => {
        app.unmount()
        demo.remove()
    },  2000)
}