<script setup>

definePageMeta({
  layout: "visitor",
});

const features = [
    {img:"/img/Career_mentoring.png",title: "Career Mentoring",subtitle:"Learn the tricks and trade of their desired industry."},
    {img:"/img/career_counselling.png",title: "Career Counselling",subtitle:"Get advice/guidance from industry professionals on which career path would best fit your skills or interests."},
    {img:"/img/Subject_tutoring.png",title: "Subject Tutoring",subtitle:"Focus on learning a particular subject from subject specialists."}
]

const itWorks = [
    {img:"/img/How_it_works-Search.png",title: "Search for a Quadmaster",subtitle:"Browse through our list of qualified industry professionals"},
    {img:"/img/How_it_works-Book.png",title: "Book & Pay",subtitle:"Book and pay your session"},
    {img:"/img/How_it_works-Start.png",title: "Start your session!",subtitle:"Start learning from our Quadmasters after completing the payment"}
]

const domainsCover = [
    {img: "/img/Icon-Business.png", title: "Business"},
    {img: "/img/Icon-Engineering.png", title: "Engineering"},
    {img: "/img/Icon-Computer_Science.png", title: "Computer Science"},
    {img: "/img/Icon-Arts.png", title: "Arts & Design"},
    {img: "/img/Icon-Health.png", title: "Health & Medicine"},
    {img: "/img/Icon-Tourism.png", title: "Tourism"},
    {img: "/img/Icon-Agriculture.png", title: "Agriculture"},
    {img: "/img/Icon-Law.png", title: "Public Service"},
    {img: "/img/Icon-Science.png", title: "Science"},
    {img: "/img/Icon-Teacher.png", title: "Teacher Education"},
]

const wordOfMouth = [
    {img:"/img/Profile1.png",name:"Matthew Austria",position:"Business Administration Student",description:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"},
    {img:"/img/Profile2.png",name:"Adelynne Ocampo",position:"Computer Science Professor",description:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"},
    {img:"/img/Profile3.png",name:"Ingrid Sibayan",position:"School Executive",description:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"},
]

</script>
<template>
  <div class="w">
    <div class="c b">
        <div class="j">
            <div class="t">
                The bridge between <br /> <span class="g">theoretical</span> and <span class="g">practical</span>
            </div>

            <div class="d">
                We are a collaborative learning platform for peer-to-peer learning
                and career development. Learn from your peers, mentors, and tutors.
            </div>

            <div class="a">
                <button class="e">Get Early Access</button>
                <button class="s">Support</button>
            </div>
        </div>
        <div class="bn">
            <div class="bg"></div>
            <img src="/img/Home_Mockup.png">
        </div>
        <div class="gcw">
            <div class="gc">
                <div class="gcc">
                    <img src="/img/Quadmates.png">
                    <div class="gct">Quadmates</div>
                    <div class="gcd">
                        Quadrangle's term <br /> for peers
                    </div>
                </div>
                <div class="gcc">
                    <img src="/img/Quadmasters.png">
                    <div class="gct">Quadmasters</div>
                    <div class="gcd">
                        Quadrangle's term <br /> for mentors and tutors
                    </div>
                </div>
            </div>
        </div>
        <div class="key-features">
            <div class="title-container">
                <div class="mini-title">OUR KEY FEATURES</div>
                <div class="title">Designed for Quadmasters <br /> and Quadmates</div>
            </div>
            <div class="features-container">
                <div v-for="{img, title, subtitle} in features" class="feature" :key="title">
                    <div class="img-container">
                        <img :src="img" alt="">
                    </div>
                    <div class="content">
                        <div class="title">{{title}}</div>
                        <div class="subtitle">{{subtitle}}</div>
                    </div>
                    <div class="actions">
                        <NuxtLink to="/about" >Learn More</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="how-it-works">
            <div class="title">HOW IT WORKS?</div>
            <div class="items">
                <div class="item" v-for="{img, title, subtitle} in itWorks">
                    <img :src="img">
                    <div class="title">{{title}}</div>
                    <div class="subtitle">{{subtitle}}</div>
                </div>
            </div>
        </div>
        <div class="domains-we-cover">
            <div class="title">Domains we cover</div>
            <div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore</div>
            <div class="items">
                <div class="item" v-for="{img, title} in domainsCover">
                    <img :src="img">
                    <div class="title">{{title}}</div>
                </div>
            </div>
        </div>

        <div class="word-of-mouth" v-if="false">
            <div class="title">WHAT other people are saying</div>
            <div class="items">
                <div class="item" v-for="{img,name,position,description} in wordOfMouth">
                    <img :src="img">
                    <div class="name">{{name}}</div>
                    <div class="position"> {{position}} </div>
                    <div class="description"> {{description}} </div>
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
        @apply  font-extrabold text-3xl text-center text-white flex flex-col justify-start items-center mb-96;
        // max-height: 80vh;
        
        .j {
            @apply bg-sky-900 w-full;
            .t {
                @apply mt-6 text-white pt-12 pb-4;

                .g {
                    @apply text-teal-400;
                }
            }

            .d {
                @apply font-thin text-sm mt-6 mb-4 max-w-prose text-center mx-auto px-6;
            }


            .a {
                @apply pt-2 mb-4;

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
        }

        .bn {
            @apply w-full;

            .bg {
                @apply bg-sky-900 h-40 sm:h-72 md:h-80 xl:h-96 mb-0 p-0;
                width: 100%;
            }

            img {
                @apply w-full max-w-screen-lg mx-auto -mt-40 sm:-mt-72 md:-mt-80 xl:-mt-96 mb-0;
            }
        }
        
        .gcw {
            @apply px-12 w-full;
            .gc {
                @apply w-full max-w-screen-md flex flex-col sm:flex-row px-12 mx-auto rounded-3xl items-center justify-around py-4 mb-12 ;
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

        .key-features {
            @apply w-full;
            .title-container {
                @apply mb-8;
                .mini-title {
                    @apply text-teal-600 text-xs;
                }

                .title {
                    @apply text-gray-900 text-3xl;
                }
            }

            .features-container {
                @apply w-full max-w-screen-md mx-auto flex flex-col md:flex-row justify-center mb-12;

                .feature {
                    @apply bg-teal-50 flex flex-col justify-center px-4 py-6 rounded-lg shadow-xl mb-4 md:mb-0 flex-1 max-w-xs mx-auto md:mx-2;

                    .img-container {
                        @apply w-full flex flex-row items-center justify-center;
                        
                        img {
                            @apply h-14 w-auto mb-4;
                        }
                    }

                    .content {
                        .title {
                            @apply text-sm mb-2 text-sky-900 font-bold;
                        }

                        .subtitle {
                            @apply text-xs text-gray-700 font-light;
                        }
                    }

                    .actions {
                        @apply mt-3;

                        button, a {
                            @apply text-sm py-2 px-3 bg-teal-500 hover:bg-teal-700 transition rounded-lg font-normal;
                        }
                    }

                    &:hover {
                        @apply bg-sky-900;
                        .title {
                            @apply text-white;
                        }

                        .subtitle {
                            @apply text-white;
                        }
                    }
                }
            }
        }

        .how-it-works {
            @apply w-full bg-teal-50 px-2 py-4 mb-12;

            .title {
                @apply pt-8 pb-12 md:py-8 text-teal-500 text-xl;
            }

            .items {
                @apply flex md:flex-row flex-col items-center md:items-start justify-center mb-8;

                .item {
                    @apply flex-1 max-w-xs mb-12 md:mb-0;

                    img {
                        @apply h-28 mx-auto;
                    }

                    .title {
                        @apply text-gray-700 text-base pb-2;
                    }

                    .subtitle {
                        @apply text-gray-600 text-xs font-light;
                    }
                }
            }
        }

        .domains-we-cover {
            @apply w-full mb-12;
            & > .title {
                @apply text-sm font-bold text-teal-500;
            }

            .subtitle {
                @apply w-full max-w-md mx-auto text-xs font-light text-gray-500 mb-12;
            }

            .items {
                @apply w-full max-w-screen-md mx-auto items-center md:items-start justify-center mb-8 grid grid-cols-5;

                .item {
                    @apply mb-6;

                    img {
                        @apply h-14 mx-auto mb-2;
                    }

                    .title {
                        @apply text-gray-700 text-xs pb-2 text-center font-bold;
                    }
                }
            }
        }

        .word-of-mouth {
            @apply w-full py-12;

            @apply bg-gray-200;

            .title {
                @apply text-gray-800 uppercase pb-12 text-2xl;
            }

            .items {
                @apply w-full max-w-screen-md mx-auto flex flex-col md:flex-row;

                .item {
                    @apply max-w-xs mx-auto md:mx-2 flex flex-col items-center justify-center border border-teal-500 bg-white p-8 rounded-lg mb-4;

                    img {
                        @apply w-16 mx-auto;
                    }

                    .name {
                        @apply text-sm font-bold text-gray-700;
                    }

                    .position {
                        @apply text-xs font-light mb-6 text-gray-500;
                    }

                    .description {
                        @apply text-sm font-light text-gray-600;
                    }
                }
            }
        }
    }
}
</style>
