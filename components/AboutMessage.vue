<template>
	<div class="w">
        <div class="c">
            <div class="i">
                <img src="/img/Team_Message.png">
            </div>
            <div class="m">
                <div class="t">A Message From our Team</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
            </div>
        </div>
    </div> 
</template>
<style lang="scss" scoped>
.w {
    @apply w-full px-8 my-12;

    .c {
        @apply w-full max-w-screen-md mx-auto px-8 flex flex-col lg:flex-row items-center justify-center;

        & > div {
            @apply flex-1;
        }

        .i {
            @apply order-2 lg:order-1;
            img {
                @apply w-full max-w-screen-sm px-12 mx-auto mt-12 lg:mt-0;
            }
        }

        .m {
            @apply order-1 lg:order-2;

            .t {
                @apply font-bold text-2xl mb-8;
            }

            p {
                @apply pb-4 text-justify text-sm;
            }
        }
    }
}


</style>