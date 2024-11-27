<template>
    
</template>
<script lang='ts' setup name="zsySelect">
import { computed } from 'vue';

const disabled = defineModel("disabled",{
    type:Boolean,
    default:false
})  
const type = defineModel("type",{
    type:String,
    default:"normal"
})
const zsyBtnClass = computed(()=>{
    return ``
})
</script>
<style scoped lang="less">

</style>