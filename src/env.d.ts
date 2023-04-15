/// <reference types="vite/client" />

declare module '*.vue|*.ts' {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}