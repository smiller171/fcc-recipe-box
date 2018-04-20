<template>
  <div>
    <slot
      :value="header"
      name="header"
    />
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'header'
    }
  }
}
</script>
