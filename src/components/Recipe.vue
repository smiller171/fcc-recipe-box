<template>
  <div>
    <slot
      :value="header"
      name="header"
    />
    <div class="detailsPanel">
      <slot
        :value="subtitle"
        name="subtitle"
      />
      <slot
        :value="list"
        name="list"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'header'
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    subtitle: 'Ingredients'
  })
}
</script>
