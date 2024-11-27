import type { App, Component, DefineComponent} from "vue"
import "./components/index.less"
import zsyTabs from './components/zsyTabs/index.vue'
import zsyButton from './components/zsyButton/index.vue'
import zsyInput from './components/zsyInput/index.vue'
import zsyRadio from './components/zsyRadio/index.vue'
interface coms {
    name: string;
    component: Component | DefineComponent;
}
const comps: coms[] = [
  { name: "zsyTabs", component: zsyTabs },
  { name: "zsyButton", component: zsyButton },
  { name: "zsyInput", component: zsyInput },
  { name: "zsyRadio", component: zsyRadio },
];
// 全局注册
const install = function (app: App) {
  comps.forEach((com: coms) => {
    app.component(com.name, com.component);
  });
}
// 按需导出
export {
  zsyTabs,
  zsyButton,
  zsyInput
};
const zsyelement = {
  install
}
export default zsyelement; 