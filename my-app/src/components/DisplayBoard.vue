<template>
    <div class="display-board">
        <h4>Designs Created</h4>
        <div class="number">
        {{numberOfDesigns}}
        </div>
        <div class="btn">
            <button @click='getAllDesigns()' type="button" class="btn btn-warning">Get all Designs</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfDesigns'],
        methods: {
            getAllDesigns() {
                this.$emit('getAllDesigns')
            }
        }
    }
</script>