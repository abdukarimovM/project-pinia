<script setup>
import { ref, onMounted } from "vue";
import { useImage } from "../stores/counter";

const store = useImage();

console.log(store);

onMounted(() => {
  store.getProducts();
});

const cut = (el) => {
  store.deleteElement(el);
};

</script>

<template>
  <section class="bg-gray-400 h-screen">
    <main class="flex w-full flex-wrap content-centerm gap-6">
    
    
    <div v-for="el in store.state.product" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  >
        
          <img class="rounded-t-lg" :src="el.images" alt="" />

        <div class="p-5">
            <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ el.title }}</h5>
            </a>
            <li class=" flex items-center justify-between">
              <a @click="cut(el)" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Update
              </a>
            </li>
        </div>
    </div>
  </main>
  </section>
</template>
  