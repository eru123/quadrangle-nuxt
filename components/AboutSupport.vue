<template>
	<div class="w" id="support">
            <div class="c">
                <h1 class="title">Join the Waitlist</h1>
                <h2 class="subtitle">Join the waiting list to be notified when our platform goes LIVE!</h2>
                <div class="a">
                    <NuxtLink to="/contact" class="early-access">Get early access</NuxtLink>
                <NuxtLink to="/contact" class="early-access y">Get early access</NuxtLink>
                </div>
            </div>
        </div> 
</template>
<style lang="scss" scoped>
.w {
    @apply w-full px-8 mb-12;

    .c {
        @apply w-full max-w-screen-md mx-auto bg-sky-900 text-white rounded-3xl py-12 px-8 flex flex-col items-center justify-center;
        .title {
            @apply text-3xl my-0 font-bold;
        }
        .subtitle {
            @apply text-sm mt-0 mb-8 font-light;
        }

        .a {
            @apply flex flex-row items-center justify-center;
        }

        a.early-access {
            @apply bg-teal-500 text-white hover:bg-teal-600 text-sm px-8 py-4 rounded-xl transition font-normal font-bold mx-2;

            &.y {
                @apply bg-yellow-500 hover:bg-yellow-600;
            }
        }
    }
}


</style>