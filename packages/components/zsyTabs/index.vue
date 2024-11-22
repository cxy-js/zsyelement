<template>
    <div class="zsy-tabs" :style="{
        background:bg
    }">
        <div class="zsy-tabs-content" 
            :class="{
                'zsy-tabs-content-card2':mode=='card2',
            }">
            <div class="zsy-tab" 
                
                :class="{
                    'active':current===item.value,
                    'card2':mode=='card2',
                    'current-bottom-border-card2':current===item.value&&mode=='card2'
                }"
                v-for="(item, index) in list" 
                :ref="(e) => getRefs(e, index)" 
                :key="item.value"
                @click="onItem(item, index)">
                {{ item.label }}
            </div>
            <div  
                class="zsy-mask"
                :class="{
                    'zsy-mask-card':mode=='card',
                    'zsy-mask-card2':mode=='card2',
                    'zsy-mask-line':mode=='card-line',
                    'zsy-mask-border':mode=='card-border'
                }"
                :style="{ left: left + 'px', width: width + 'px' }">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" name="zsyTabs">
import {ref,onMounted , nextTick} from "vue"
import { tabsType } from './type';
const emits = defineEmits(['changeTab'])
const useIndex = defineModel("useIndex", { default: 0, type: Number }) //第几个el
const mode = defineModel("mode", { default: 'card', type: String }) // 切换展示方式
const current = defineModel<any>("current", {default:0}) //选中第几个 与 useIndex 配套使用
const bg = defineModel("bg", { default: '#f8f8f8', type: String }) // 背景色
const activeColor = defineModel("activeColor", { default: 'var(--zsy-primary)', type: String }) //选中颜色
const activeBg = defineModel("activeBg", { default: '#ffffff', type: String }) //选中背景色
const list = defineModel<tabsType[]>("list", {required:true, default:[], type: Array })

const itemRefs = ref<HTMLElement[]>([])
const left = ref(0)
const width = ref(0)
function onItem(item:tabsType, index:number) {
    useIndex.value = index
    current.value = item.value
    setWL()
    emits('changeTab', item)
}
function getRefs(e:HTMLElement, index:number) {
    itemRefs.value[index] = e
}
function setWL() {
    const offsetWidth = itemRefs.value[useIndex.value].offsetWidth
    const offsetLeft = itemRefs.value[useIndex.value].offsetLeft
    switch(mode.value){
        case "card":
        case "card2":
        case "card-border":
            width.value = offsetWidth
            left.value = offsetLeft
        break;
        case "card-line":
            width.value = offsetWidth/2
            left.value = offsetLeft+offsetWidth/4
        break;
    }
}
onMounted(() => {
    nextTick(() => {
        if (itemRefs.value) {
            setWL()
        }
    })
})
</script>
<style scoped lang="less">
.zsy-tabs{
    font-size: 14px;
    margin:5px;
    padding:5px;
    background: v-bind(bg);
    border-radius:var(--zsy-radius);
    .zsy-tabs-content{
        display: flex;
        align-items: center;
        position:relative;
        z-index:1;
        .zsy-tab{
            position:relative;
            z-index:1;
            cursor:pointer;
            padding:8px 14px;
            z-index:2
        }
        .active{
            color:v-bind(activeColor)
        }
        .card2{
            border-bottom:1px solid transparent;
        }
        .current-bottom-border-card2{
            border-bottom:1px solid v-bind(bg);
        }
    }
    .zsy-tabs-content-card2{
        &::after{
            content:"";
            position:absolute;
            left:0;
            right:0;
            bottom: 0;
            width:100%;
            height: 1px;
            background:v-bind(activeColor);
        }
    }
}
.zsy-mask{
    position:absolute;
}
.zsy-mask-card {
    top: 0;
    bottom: 0;
    z-index: 0;
    border-radius: var(--zsy-radius);
    background: v-bind(activeBg);
    transition: left ease-in-out 0.3s
}
.zsy-mask-line{
    bottom: 0;
    z-index: 0;
    height:2px;
    background: v-bind(activeColor);
    border-radius: var(--zsy-radius);
    transition: left ease-in-out 0.3s
}
.zsy-mask-border{
    top: 0;
    bottom: 0;
    z-index: 0;
    border-radius: var(--zsy-radius);
    border: 1px solid v-bind(activeColor);
    transition: left ease-in-out 0.3s
}
.zsy-mask-card2{
    top: 0;
    bottom: 0;
    z-index: 0;
    border-top-left-radius: var(--zsy-radius);
    border-top-right-radius: var(--zsy-radius);
    border-top: 1px solid v-bind(activeColor);
    border-left: 1px solid v-bind(activeColor);
    border-right: 1px solid v-bind(activeColor);
}
</style>