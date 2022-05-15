<template>
	<div class="w" id="roadmap">
        <div class="c">
			<div class="mt">OUR ROADMAP</div>
			<div class="t">Where are we heading?</div>
            <div class="is">
                <div class="i" v-for="i in 5" :key="i">
                    <div class="d"></div>
                    <div class="ti">Title</div>
                    <div class="st">Subtitle</div>
                </div>
            </div>
		</div>
    </div>
</template>
<style lang="scss" scoped>
.w {
	@apply w-full mt-8 mb-12;

    .c {
        @apply w-full mb-8 font-bold mx-auto text-center px-8;

        .is {
            @apply w-full mt-8 ;

            .i {
                @apply py-8 border-gray-400 relative;
                width: calc(50% + 1px);

                .ti {
                    @apply text-teal-400 text-lg;
                }

                .st {
                    @apply text-gray-500 font-light;
                }

                &:nth-child(odd) {
                    @apply 
                        mr-0 ml-auto pl-8
                        border-l-2 text-left;

                        .d {
                            @apply 
                                bg-teal-400 h-4 w-4 
                                rounded-full absolute
                                -left-[.5rem] mt-2;
                        }

                }

                &:nth-child(even) {
                    @apply
                        mr-auto ml-0 pr-8
                        border-r-2 text-right;

                        .d {
                            @apply 
                                bg-teal-400 h-4 w-4 
                                rounded-full absolute
                                -right-[.5rem] mt-2;
                        }
                }
            }
        }

        .mt {
            @apply text-teal-600 text-xs mb-2;
        }

        .t {
            @apply text-gray-900 text-3xl;
        }
    }
}

</style>