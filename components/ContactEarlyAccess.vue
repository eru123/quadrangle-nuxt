<script setup>
import {watchEffect} from 'vue'

const accType = useState('accType', () => 'Quadmate')
const fname = useState('fname', () => null)
const lname = useState('lname', () => null)
const email = useState('email', () => null)
const organization = useState('organization', () => null)

async function onSubmit(e){
    const formData = new FormData(e.target)
    console.log(formData.get('type'), accType)
    const data = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        organization: organization.value,
        role: accType.value
    }
    console.log(data)
    await $fetch('/api/earlyaccess', {
        method: 'POST',
        body: data
    }).then(e => console.log(e))
    e.target.reset();
    fname.value = ""
    lname.value = ""
    email.value = ""
    organization.value = ""
    accType.value = ""
    // const data = new URLSearchParams([
    //     ['item',formData.get('item')],
    //     ['pass',formData.get('pass')],
    //     ['role',formData.get('nrole')],
    //     ['name',formData.get('name')],
    // ])
}

</script>
<template>
	<div class="w">
        <div class="c">
            <div class="i">
                <img src="/img/Contact_us-illustration.png">
            </div>
            <form class="f" @submit.prevent="onSubmit">
                <h1>Coming Soon!</h1>
                <h2>Sign up to be notified when we launch.</h2>
                <div class="f">
                    <div class="g">
                        <label>First Name</label>
                        <input type="text" v-model="fname">
                    </div>
                    <div class="g">
                        <label>Last Name</label>
                        <input type="text" v-model="lname">
                    </div>
                </div>
                <div class="g">
                    <label>Email</label>
                    <input type="email" v-model="email">
                </div>
                <div class="g">
                    <label>School/Organization</label>
                    <input type="text" v-model="organization">
                </div>
                <div class="g">
                    <label>I want to be a</label>
                    <div class="rg">
                        <div class="r" :class="accType == 'Quadmate' ? 'active' : ''">
                            <input type="radio" name="type" id="r_qmt" v-model="accType" value="Quadmate">
                            <label for="r_qmt">
                                <img src="/img/Quadmate1.png">
                                Quadmate
                            </label>

                        </div>
                        <div class="r" :class="accType == 'Quadmaster' ? 'active' : ''">
                            <input type="radio" name="type" id="r_qmr" v-model="accType" value="Quadmaster">
                            <label for="r_qmr">
                                <img src="/img/Quadmate2.png">
                                Quadmaster
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit">Get Early Access</button>                
            </form>
        </div>
    </div> 
</template>
<style lang="scss" scoped>
.w {
    @apply w-full px-8 my-12;

    .c {
        @apply w-full max-w-screen-xl mx-auto px-8 flex gap-4 flex-col lg:flex-row items-center justify-center lg:items-start;
        


        .i {
            @apply flex-1;

            img {
                @apply w-full max-w-screen-sm mb-12 mx-auto;
            }
        }

        
        .f {
            @apply w-full max-w-[420px];
            h1 {
                @apply text-teal-500 text-4xl font-bold;
            }

            h2 {
                @apply text-gray-700 text-xl mb-8;
            }

            .f {
                @apply flex flex-row justify-center items-center;

                .g:not(:last-child) {
                    @apply mr-4;
                }
            }
        
            .g {
                @apply w-full flex flex-col items-start justify-center mt-2 mb-4;
                label {
                    @apply text-gray-400 text-sm;
                }
                input[type=text], input[type=email] {
                    @apply w-full bg-gray-100 rounded-md py-3 px-4;
                }

                .rg {
                    @apply w-full flex flex-row items-center justify-start py-4 gap-4;
                    
                    .r {
                        @apply flex-1 flex border border-gray-400 bg-white py-3 px-4 rounded-lg;
                        
                        &, * {
                            cursor: pointer;
                        }

                        label {
                            @apply  text-gray-500 flex flex-row items-center justify-center;

                            img {
                                @apply h-6 mr-2;
                            }
                        }

                        &.active {
                            @apply bg-teal-50 border-teal-500;

                            label {
                                @apply text-teal-500;
                            }
                        }

                        input[type=radio] {
                            @apply w-0 h-0 opacity-0;
                        }
                    }
                }
            }

            button[type=submit] {
                @apply py-4 px-8 bg-teal-500 hover:bg-teal-600 w-full transition rounded-lg;
            }
        }

        

    }
}


</style>