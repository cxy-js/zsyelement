
<template>
    <div class="zsy-input-main">
        <span class="input-left-slot">
            <slot name="left"></slot>  
        </span>
        <input 
            v-bind="$attrs" 
            :value="modelValue" 
            :maxlength="maxlength"
            @change="change" 
            @input="input" 
            @focus="focus" 
            @blur="blur" 
            class="zsy-input">
        </input>
        <slot name="right"></slot>  
        <span v-if="showLimit" class="zsy-clear zsy-input-limit">{{len}}/{{ maxlength }}</span>  
        <span v-if="showClear&&modelValue" class="zsy-clear" @click="clearModel">×</span>  
    </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue';

const emit = defineEmits(['change','input','focus','blur'])
const modelValue = defineModel("modelValue")
const maxlength = defineModel<string | number>("maxlength",{type:String || Number})
const showLimit = defineModel("showLimit",{type:Boolean,default:false})
const showClear = defineModel("showClear",{required:false,default:true,type:Boolean})
const len = computed(()=>String(modelValue.value).length)
function change(e){
    modelValue.value = e.target.value
    emit('change',modelValue.value)
}
function input(e){
    modelValue.value = e.target.value
    emit('input',modelValue.value)
}
function focus(){
    emit('focus')
}
function blur(){
    emit('blur')
}
function clearModel(){
    modelValue.value = ''
}
</script>
<style scoped lang="less">
.zsy-input-main{
    display: flex;
    align-items: center;
    position:relative;
    padding:0 10px;
    height: var(--zsy-input-height);
    line-height: var(--zsy-input-height);
    border:1px solid var(--zsy-border);
    border-radius:var(--zsy-radius);
    &:focus-within{
        border-color:var(--zsy-primary);
        transition: border .5s;
    }
    .zsy-input{
        background: none;
        box-sizing: border-box;
        border:none;
        flex-grow: 1;
        font-size: inherit;
        height: 100%;
        line-height: 100%;
        outline: none;
        padding: 0;
        &::placeholder {
            font-size: 12px;
        }
    }
    .input-left-slot{
        padding-right:10px;
        display: inline-block;
        height: 100%;
        pointer-events: none;
        text-align: center;
    }
    .zsy-clear{
        color: #c5bbbb;
        cursor:pointer;
        margin:0 4px
    }
    .zsy-input-limit{
        font-size:12px
    }
}

</style>