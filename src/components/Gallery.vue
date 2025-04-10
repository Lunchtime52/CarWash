<template>
  <BContainer fluid class="p-2">
    <BRow>
      <BCol
        v-for="(imageUrl, index) in images"
        :key="index"
        class="text-center"
      >
        <BImg
          :src="imageUrl"
          alt="Gallery Image"
          :class="['customMargin', galleryMargin]"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
  galleryMargin: { type: String, default: "mb-4" },
});
</script>
