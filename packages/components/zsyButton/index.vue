<template>
    <button class="zsy-btn" :disabled="disabled" :class="zsyBtnClass">
        <slot></slot>
    </button>
</template>
<script lang='ts' setup name="zsyButton">
import { computed } from 'vue';
const types = {
    'normal':"normal",
    'primary':"primary",
    'danger':"danger"
}
const disabled = defineModel("disabled",{
    type:Boolean,
    default:false
})  
const type = defineModel("type",{
    type:String,
    default:"normal"
})
const zsyBtnClass = computed(()=>{
    return `zsy-btn-`+types[type.value]
})
</script>
<style scoped lang="less">
.zsy-btn{
    padding:6px 12px;
    border-radius:var(--zsy-radius);;
    cursor: pointer;
    outline: none;
    border:1px solid var(--zsy-border);
    background:#fff;
    margin:0 2px;
}
button:disabled.zsy-btn{
    cursor: not-allowed;
    opacity: 0.5
}
.zsy-btn-primary{
    background: var(--zsy-primary);
    color:#fff;
    border-color:var(--zsy-primary);
}
.zsy-btn-danger{
    background: var(--zsy-danger);
    color:#fff;
    border-color:var(--zsy-danger);
}
</style>