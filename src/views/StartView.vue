<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <section class="start-page flex items-center justify-start  h-screen w-full bg-cover bg-center bg-startPage	" >
       <div class="start-page__container mx-4 sm:mx-8 md:mx-12 lg:ml-20">
             <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-12 font-semibold">ACCESS THE BEST RECIPES IN THE WORLD.</h1>
        <div class="flex flex-col xs:flex-row">
        <RouterLink
                                class="text-center bg-white text-black uppercase rounded-3xl text-xl py-2 px-4 hover:bg-secondary hover:text-white shadow-md	transition-all duration-200		"
                                to="/auth/login"
                            >
                                Login
                            </RouterLink>
       
        <RouterLink class="text-center bg-primary text-white uppercase rounded-3xl text-xl py-2 px-4 mt-4 xs:mt-0 xs:ml-4 hover:bg-secondary shadow-md transition-all duration-200	"
            to="/auth/login"
        >
            Register
        </RouterLink>
       </div>
       </div>
    </section>    
</template>



<style scoped lang="scss">

.start-page {
    &__container {
        max-width: 100%;
        @screen lg {
            max-width: 50%;
        }

        & > div {
        
            & > a {
                min-width: 150px;
            }
        }
    }

}

</style>