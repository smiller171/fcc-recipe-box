<template>
  <div class="ingredientList">
    <div
      v-for="ingredient in list"
      :key="ingredient"
    >
      <slot
        :ingredient="ingredient"
        name="ingredient"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
