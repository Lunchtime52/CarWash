<template>
  <div
    :class="` bg-${background}  text-white hero text-center w-100`"
    :style="{
      backgroundImage: `radial-gradient(closest-side, rgba(0, 0, 0, 0.7),transparent), url(${imageUrl}) `,
      height: '75vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }"
  >
    <div
      class="  d-flex flex-column justify-content-center align-items-center"
      :style="{height:'75vh'}"
    >
      <h1 :class="`display-${titleScale}`">{{ title }}</h1>
      <p v-if="subtitle" :class="`fs-${subtitleScale}`">{{ subtitle }}</p>
      <BButton
        v-if="buttonText"
        :variant="buttonVariant"
        :size="buttonSize"
        :to="{ name: buttonHref }"
      >
        {{ buttonText }}
      </BButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false, default: "" },
  buttonText: { type: String, required: false },
  buttonVariant: { type: String, required: false, default: "primary" },
  buttonSize: { type: String, required: false, default: "md" },
  buttonHref: { type: String, required: false, default: "Contact" },
  padding: { type: Number, required: false, default: 5 },
  background: { type: String, required: false, default: "light" },
  titleScale: { type: Number, required: false, default: 3 },
  subtitleScale: { type: Number, required: false, default: 5 },
  imageUrl: { type: String, required: false, default: "" },
});
</script>

<style scoped>
.hero {
  position: relative;
}
</style>
