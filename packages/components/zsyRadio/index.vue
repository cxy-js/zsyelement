<template>
    <div class="zsy-radio-main">
        <div class="zsy-radio-item" v-for="item in list" :key="item.value"  @click="onClick(item)">
            <div class="zsy-outer-circle" :class="{
                'zsy-outer-active':modelValue===item.value
            }">
                <div class="zsy-inner-circle" :class="{
                'zsy-inner-active':modelValue===item.value
            }"></div>
            </div>
            <span class="zsy-radio-label" :class="{
                'zsy-radio-label-active':modelValue===item.value
            }">{{ item.label }}</span>
        </div>
    </div>
</template>
<script lang='ts' setup name="zsyRadio">
import { computed } from 'vue';
const emit = defineEmits(['change'])
const modelValue = defineModel<string | boolean | number>("modelValue",{
    default:false,
    required:true
})
type ListType = {
    label:string | number
    value:string | boolean | number
}
const list = defineModel<ListType[]>("list",{
    type:Array,
    required:true,
    default:[]
})
const size = defineModel("size",{
    type:Number,
    default:16
})
const inSize = computed(()=>`${size.value}px`)
const outSize = computed(()=>`${size.value/2}px`)
function onClick(item:ListType){
    modelValue.value = item.value
    emit("change",modelValue.value)
}
</script>
<style socped lang="less">
.zsy-radio-main{
    display: flex;
    padding:4px;
    .zsy-radio-item{
        display: flex;
        align-items: center;
        justify-content: center;
        margin:0 4px;
        cursor: pointer;
        .zsy-radio-label{
            color: #a1a1a1;
        }
        .zsy-radio-label-active{
            color:var(--zsy-primary)
        }
        .zsy-outer-circle {
            display: flex;
            align-items: center;
            justify-content: center;
            width:v-bind(inSize);
            height: v-bind(inSize);
            border: 1px solid #a1a1a1;
            border-radius: 50%;
            margin:0 4px;
            .zsy-inner-circle {
                height: v-bind(outSize);
                width: v-bind(outSize);
                background-color:#a1a1a1;
                border-radius: 50%;
            }
            .zsy-inner-active{
                background: var(--zsy-primary);
            }
        }
        .zsy-outer-active{
            border-color: var(--zsy-primary);
        }
        
    }
}
</style>