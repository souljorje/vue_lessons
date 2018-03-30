<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                  <h1 slot="title">Title</h1>
                  <p>woah</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
          return {
            selectedComponent: null,
          }
        },
        methods: {

        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
