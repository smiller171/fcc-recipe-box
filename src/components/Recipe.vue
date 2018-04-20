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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'header'
    }
  },
  data: () => ({
    subtitle: 'Ingredients'
  })
}
</script>
