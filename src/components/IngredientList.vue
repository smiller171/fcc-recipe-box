<template>
  <div class="ingredientList">
    <div
      v-for="ingredient in ingredients"
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
    ingredients: {
      type: Array,
      default: () => []
    }
  }
}
</script>
