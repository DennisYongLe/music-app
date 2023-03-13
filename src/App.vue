<template>
  <headerContent />
  <tabContent />
  <RouterView />
  <!-- <Suspense>
    <RouterView />
  </Suspense> -->
</template>
<script>
import tabContent from './components/tab/TabContent.vue'
import headerContent from './components/header/HeaderContent.vue'

export default {
  components: { tabContent, headerContent },
}
</script>
<style lang="scss"></style>
