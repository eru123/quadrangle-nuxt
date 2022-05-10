<script setup>

definePageMeta({
  layout: "visitor",
});

</script>
<template>
  <div class="w">
    <div class="c b">
        <div class="bc">
            <div class="t">
                The bridge between <br /> <span class="g">theoretical</span> and <span class="g">practical</span>
            </div>

            <div class="d">
                We are a collaborative learning platform for peer-to-peer learning <br> 
                and career development. Learn from your peers, mentors, and tutors.
            </div>

            <div class="a">
                <button class="e">Get Early Access</button>
                <button class="s">Support</button>
            </div>

            <img src="/public/img/Home%20-%20Mockup.png" class="bn">

            <div class="gc">
                <div class="gcc">
                    <img src="/public/img/Quadmates.png">
                    <div class="gct">Quadmates</div>
                    <div class="gcd">
                        Quadrangles term <br /> for peers
                    </div>
                </div>
                <div class="gcc">
                    <img src="/public/img/Quadmasters.png">
                    <div class="gct">Quadmasters</div>
                    <div class="gcd">
                        Quadrangles term <br /> for mentors and tutors
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.w {
    @apply w-full;
    .c {
        @apply w-full mx-auto flex flex-col justify-center items-start;
    }

    .b { // banner
        @apply bg-sky-900 font-extrabold text-3xl text-center text-white flex flex-col justify-start items-center;
        max-height: 80vh;
        .bc {
            .t {
                @apply mt-12 text-white pt-12 pb-4;

                .g {
                    @apply text-teal-400;
                }
            }

            .d {
                @apply font-thin text-sm mt-6 mb-4;
            }


            .a {
                @apply pt-2 pb-0;

                button {
                    @apply px-6 py-2 text-base mx-2 rounded-full font-thin transition-all;
                }

                .e {
                    @apply bg-teal-500 hover:bg-teal-600 ;
                }

                .s {
                    @apply bg-white hover:bg-teal-100 text-teal-500 hover:text-teal-900;
                }
            }

            .bn {
                @apply w-full my-0 py-0;
            }

            .gc {
                @apply w-fit flex flex-row px-12 mx-auto rounded-3xl items-center justify-center py-4 mb-12;
                background: linear-gradient(to bottom right, #04645c 0%, #03bb93 100%);
                .gcc {
                    @apply flex flex-col items-center justify-center text-white p-4;

                    img {
                        @apply mb-4;
                        width: 100px;
                    }
                    .gct {
                        @apply text-lg font-bold mb-2;
                    }
                    .gcd {
                        @apply text-xs font-thin ;
                    }
                }
            }
        }
    }
}
</style>
