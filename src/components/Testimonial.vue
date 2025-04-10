<template>
  <BContainer class="section-padding">
    <div class="bg-light p-5 rounded-lg shadow-md d-flex flex-column align-items-center">
      <img v-if="image" :src="image" :alt="author" class="w-25 h-25 rounded-full object-cover mb-4" />
      <blockquote class="text-secondary text-center mb-4">
        <p class="italic">"{{ quote }}"</p>
      </blockquote>
      <p class="text-muted fw-semibold">{{ author }}</p>
    </div>
  </BContainer>
</template>
  
<script>
export default {
  name: 'Testimonial',
  props: {
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>