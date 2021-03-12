<template>
<v-container>
    <v-form @submit.prevent="addData">
        <v-text-field v-model="txt" label="Text" class="ma-2"></v-text-field>
        <v-item-group class="d-inline-flex">
            <v-checkbox v-model="checkbox" v-for="n in 3" :key="n" :label="`Checkbox ${n}`" :value="n" class="mr-5"></v-checkbox>
        </v-item-group>
        <v-radio-group v-model="radioGroup" row>
            <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
        </v-radio-group>
        <v-switch v-model="switcher" label="Switch On/Off" inset></v-switch>
        <v-rating v-model="rating" label="Rating"></v-rating>
        <v-slider v-model="slider" min="0" max="100" label="Slider"></v-slider>
        <v-btn color="success" class="mr-4" @click="addData">Submit</v-btn>
        <v-btn color="warning" class="mr-4" @click="reset">
            Reset Form
        </v-btn>
        
    </v-form>
</v-container>
</template>

<script>
export default {
    data: function () {
        return {
            txt: '',
            checkbox:[],
            radioGroup:null,
            switcher: false,
            rating:3,
            slider:20,
        }
    },
    methods: {
      addData(){
      },
      reset(){
      
      }
    }
}
</script>

<style>
</style>