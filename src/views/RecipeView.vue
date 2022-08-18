<script>
const VITE_API_FOOD = import.meta.env.VITE_API_FOOD;
const VITE_API_RECIPES = import.meta.env.VITE_API_RECIPES;
const VITE_API_KEY_FOOD = import.meta.env.VITE_API_KEY_FOOD;
export default{

    data() {
        return {
            recipe: undefined,
            error: undefined,
            loading: true
        }
    },
    methods: {
        async fetchData(){
            const req = await fetch(`${VITE_API_FOOD}/${VITE_API_RECIPES}/${this.$route.params.id}/information?apiKey=${VITE_API_KEY_FOOD}`);
            const res = await req.json();
            this.recipe = res;
        }
    },
    mounted() {

        this.recipe = this.fetchData();
    }
}
</script>

<template>
    <span v-if="loading">Cargando</span>
    <span v-if="error">Error</span>
    <section class="recipe__section" v-if="recipe">
        <div class="recipe__left">
            <img :src="recipe.image" :alt="recipe.title" />
        </div>
        <div class="recipe__right" >
            <h1>{{recipe.title}}</h1>
            <h2>{{recipe.summary}}</h2>
            <p></p>

        </div>

    </section>
    <div v-else>
        no se sabe
    </div>

</template>

<style scoped>
    .recipe__section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        max-width: 1000px;
        margin: 0 auto;
    }
    .recipe__left > img {
        height: auto;
        width: 100%
    }
    .recipe_right > h1 {
        font-size: 3rem;

    }
    .recipe_right > h2 {
        font-size: 2rem;
    }

    .recipe_right > p {}

</style>