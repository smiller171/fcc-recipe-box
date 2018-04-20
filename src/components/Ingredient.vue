<template>
  <div class="ingredient">
    <span class="ingredientText">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => null
    }
  }
};
</script>
