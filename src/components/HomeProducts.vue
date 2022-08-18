<script>
const VITE_API_FOOD = import.meta.env.VITE_API_FOOD;
const VITE_API_RECIPES = import.meta.env.VITE_API_RECIPES;
const VITE_API_RECIPES_COMPLEX = import.meta.env.VITE_API_RECIPES_COMPLEX;
const VITE_API_KEY_FOOD = import.meta.env.VITE_API_KEY_FOOD;

export default{
    data() {
        return {
            loading: true,
            foodList: null,
            error: null,
        }
    },

    methods: {
        async fetchData(){
            const req = await fetch(`${VITE_API_FOOD}/${VITE_API_RECIPES}/${VITE_API_RECIPES_COMPLEX}?apiKey=${VITE_API_KEY_FOOD}`);
            const res = await req.json();
            console.log(res)

            if(res.results){
                this.foodList = res.results;
                this.loading = false;
            } else {
                this.error = "Algo anda mal";
                this.loading = false;
            }

        },
        
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<template>
  <main>
<div id="default-modal" aria-hidden="true" class="fixed left-0 right-0 z-50 items-center justify-center hidden overflow-x-hidden overflow-y-auto top-4 h-modal md:h-full md:inset-0">
      <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                      Terms of Service
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                  </p>
              </div>
              <!-- Modal footer -->
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                  <button data-modal-toggle="default-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
              </div>
          </div>
      </div>
  </div>
    <section class="food__section" v-if="foodList">
        <div class="food__item" v-for="food in foodList" :key="food.id" @click="$router.push(`/recipe/${food.id}`)">
            <img :src="food.image" :alt="food.title" />
            <h2>{{food.title}}</h2>
        </div>
    </section>

  </main>
</template>

<style scoped>
    .food__section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .food__item {
        display: flex;
        flex-direction: column;

    }
.food__item > img {
    height: auto;
    width: 100%;
}
</style>