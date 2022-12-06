<script setup lang="ts">
    const props = defineProps(["selectedValue", "courses", "valueid"])
    const id = props.valueid
    const selectedValue = useState("selectedValueFor"+id, () => props.selectedValue)
    const emit = defineEmits(["changed"])

    const updateSelected = (e) => {
        selectedValue.value = e.target.value
        console.log("changed value for " + id + " to " + selectedValue.value)
        emit("changed", id, selectedValue.value)
    }

</script>

<template>

    <select class="courseinput" :id="valueid" @change="updateSelected" :value="selectedValue">
            <option v-for="course in props.courses" :value="course">{{course}}</option>
        </select>
</template>

<style scoped>

</style>