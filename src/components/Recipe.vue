<template>
  <div>
    <slot
      :value="name"
      name="name"
    />
    <div class="detailsPanel">
      <slot
        :value="subtitle"
        name="subtitle"
      />
      <slot
        :value="ingredients"
        name="ingredients"
      />
      <slot
        value="Delete"
        name="deleteButton"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      default: () => ({}),
      name: {
        type: String,
        default: 'header'
      }
    },
    name: {
      type: String,
      default: 'header'
    },
    ingredients: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    subtitle: 'Ingredients'
  })
}
</script>
