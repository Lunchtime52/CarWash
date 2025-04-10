<template>
  <BContainer class="section-padding">
    <h1 class="text-center my-5 text-primary">Components:</h1>
    <h2 class="text-center my-2 text-danger">Call to Action:</h2>
    <CallToAction class="border border-danger" />
    <h2 class="text-center my-2 text-danger">Hero:</h2>
    <Hero
      class="border border-danger"
      image-url="https://mdbcdn.b-cdn.net/img/new/slides/003.webp"
      title="Hero Title"
      subtitle="Hero Subtitle"
      button-text="Hero Button"
    />
    <h2 class="text-center my-2 text-danger">Feature List:</h2>
    <FeatureList
      class="border border-danger"
      :features="[
        {
          title: 'Feature 1',
          description: 'Description for Feature 1',
          icon: 'bi-android',
        },
        {
          title: 'Feature 2',
          description: 'Description for Feature 2',
          icon: 'bi-apple',
        },
        {
          title: 'Feature 3',
          description: 'Description for Feature 3',
          icon: 'bi-windows',
        },
      ]"
    />
    <h2 class="text-center my-2 text-danger">Gallery:</h2>
    <Gallery
      class="border border-danger"
      :images="['https://placehold.co/300x400', 'https://placehold.co/300x400']"
    />
    <h2 class="text-center my-2 text-danger">Testimonial:</h2>
    <Testimonial
      class="border border-danger"
      quote="Awesome!"
      author="Me"
      image="https://placehold.co/100x100"
    />
    <h2 class="text-center my-2 text-danger">Cards:</h2>
    <BRow mt-5 gap-4 class="border border-danger">
      <BCol md=4 mb-md-4 v-for="n in 5" :key="n">
        <Card
          title="Card Title"
          text="Quick example text."
          imgSrc="https://placehold.co/300x200"
          imgAlt="Card Image"
          cardMargin="mb-4"
          buttonText="Read More"
          
        />
      </BCol>
    </BRow>
    <h2 class="text-center my-2 text-danger">Image with Text:</h2>
    <ImageWithText class="border border-danger" />
  </BContainer>
</template>

<script>
import ImageWithText from "../components/ImageWithText.vue";
import ContactForm from "../components/ContactForm.vue";
import CallToAction from "../components/CallToAction.vue";
import Card from "../components/Card.vue";
import FeatureList from "../components/FeatureList.vue";
import Gallery from "../components/Gallery.vue";
import Hero from "../components/Hero.vue";
import Testimonial from "../components/Testimonial.vue";

export default {
  components: {
    ImageWithText,
    ContactForm,
    CallToAction,
    Card,
    FeatureList,
    Gallery,
    Hero,
    Testimonial,
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
