<template>
        <div class="form">
            <form action="">
            <label for="">Email</label>
            <input type="email" name="" id="" :value="email" @input="$emit('update:email', $event.target.value)">
            <label for="">Password</label>
            <input type="password" name="" id="" :value="password" @input="$emit('update:password', $event.target.value)">
            </form>
        </div>
</template>

<style>
    .form{
        margin: auto;
        width: 70%;
        background-color: cadetblue;
        height: 100px;
        display: inline-block;
    }
</style>


<script>
export default {
    props:{
        email:{
            type:String,
            default:'',
        },
        password:{
            type:String,
            default:'',
        }
    }
}
</script>