<template>
  <BContainer class="section-padding">
    <BRow class="align-items-center">
      <BCol :class="imageClass">
        <img :src="imageUrl" class="img-fluid" :alt="imageAlt" />
      </BCol>
      <BCol :class="textClass">
        <h2 :class="`fs-${titleScale}`">{{ title }}</h2>
        <p :class="`fs-${textScale}`">{{ text }}</p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
export default {
  props: {
    imageUrl: { type: String, required: false, default: "https://placehold.co/600x400" },
    imageAlt: { type: String, required: false, default: "Placeholder" },
    title: { type: String, required: false, default: "Title" },
    text: { type: String, required: false, default: "Lorem ipsum... Some example Text to go with the Image" },
    imageClass: { type: String, required: false, default: "col-md-6" },
    textClass: { type: String, required: false, default: "col-md-6" },
    titleScale: { type: Number, required: false, default: 2, validator: (value) => value >= 1 && value <= 6 },
    textScale: { type: Number, required: false, default: 4, validator: (value) => value >= 1 && value <= 6 },
  },
};
</script>

<style scoped></style>
