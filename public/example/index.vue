<template>
    <zsy-tabs v-model:list="list" mode="card"></zsy-tabs>
    <zsy-tabs v-model:list="list" mode="card-border"></zsy-tabs>
    <zsy-tabs v-model:list="list" mode="card-line"></zsy-tabs>
    <zsyButton>创建</zsyButton>
    <zsyButton type="primary">创建</zsyButton>
    <zsyButton type="danger">创建</zsyButton>
    <zsyButton :disabled="true">创建</zsyButton>
    <div style="margin:10px"></div>

    <zsy-input v-model="a" placeholder="请输入"></zsy-input>
    <zsy-input v-model="a" placeholder="请输入" :showLimit="true" v-model:maxlength="maxlength"></zsy-input>

    <zsy-input v-model="a" placeholder="请输入" @input="input">
        <template #left>
            <img src="./logo_zsy.png" alt="" width="16px" height="16px">
        </template>
    </zsy-input>

    <zsy-input v-model="a" placeholder="请输入" @input="input">
        <template #right>
            <img src="./logo_zsy.png" alt="" width="16px" height="16px">
        </template>
    </zsy-input>
</template>
<script lang='ts' setup>
import {ref} from "vue"
const a = ref(0)
const maxlength = ref(10)
function input(_e:string){
    console.log(a.value)
}
const list = ref([
    {
        label:"label0",
        value:0
    },
    {
        label:"label1",
        value:1
    },
])
</script>