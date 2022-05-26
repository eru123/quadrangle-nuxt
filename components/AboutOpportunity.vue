<template>
	<div class="w">
        <div class="c">
			<div class="c">
                <div class="t">OUR KEY FEATURES</div>
                <div class="st">PROBLEM WORTH SOLVING</div>
                <div class="tx">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>     
            </div>
            <div class="i">
                <img src="/img/About_us-illustration.png">
            </div>
		</div>
    </div>
</template>
<style lang="scss" scoped>
.w {
	@apply w-full mt-8 mb-12;

    & > .c {
        @apply 
            w-full max-w-screen-lg mx-auto px-8 flex flex-col lg:flex-row;

        & > .c {
            @apply flex-1 order-2 lg:order-1 mx-4;
            .t {
                @apply text-teal-600 text-xs mb-2 font-bold text-center lg:text-left;
            }

            .st {
                @apply text-gray-900 text-3xl font-bold text-center lg:text-left uppercase;
            }

            .tx {
                @apply text-sm text-justify;

                p {
                    @apply indent-4 mb-4 mt-2;
                }
            }
        }

        & > .i {
            @apply flex-1 order-1 lg:order-2 mx-4;
            img {
                @apply w-full max-w-screen-md mx-auto;
            }
        }
    }
}

</style>