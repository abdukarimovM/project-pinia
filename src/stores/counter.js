import { defineStore } from "pinia"
import { reactive, ref } from "vue";

export const useImage = defineStore('image', () => {

    const state = reactive({
        product: [],
        load: true
    })


    const getProducts = async () => {
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const res = await response.json();
            if (response.status === 200) {
                console.log(res);
                state.product = res;
                state.load = false;
            }

        } catch (err) {
            console.log(err)
        }
    }

    const deleteElement = (el) => {
        const index = state.product.indexOf(el);
        const x = state.product.splice(index, 1);
      }


    return { state, getProducts, deleteElement }

})