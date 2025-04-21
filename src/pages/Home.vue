<template>
  <Hero
    title="Get Your Car Sparkling at Reef Rinse!"
    subtitle="Dive into clean at Reef Rinse! We've brought the vibrant underwater world of 'Shark Tale' to your carwash experience. Get ready for a fun and effective clean that will leave your vehicle looking its best."
    buttonText="Our Wash Packages"
    buttonHref="Contact"
    :imageUrl="heroImg"
  />
  <BContainer class="section-padding">
    <ImageWithText
      imageUrl="https://placehold.co/800x400"
      title="Our Featured Product"
      text="This is a brief description of our featured product. It's awesome!"
      imageClass="col-md-6"
      textClass="col-md-6"
    />

    <BRow mt-5 gap-4>
      <BCol md="4" mb-md-4 v-for="n in 6" :key="n">
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
    <FeatureList
      :features="[
        {
          title: 'The Coral Quick Clean',
          description: 'A fast and effective rinse to remove surface dirt.',
          icon: 'bi-1-square',
        },
        {
          title: 'The Seaweed Scrub',
          description: 'A more thorough wash including undercarriage cleaning.',
          icon: 'bi-2-square',
        },
        {
          title: 'The Pearl Polish',
          description:
            'Our premium wash with sealant and tire shine for a dazzling finish.',
          icon: 'bi-3-square',
        },
      ]"
    />
    <Gallery
      :images="['https://placehold.co/300x400', 'https://placehold.co/300x400']"
    />

    <Testimonial
      quote="This is a sample testimonial quote."
      author="John Doe"
      image="https://placehold.co/100x100"
    />
  </BContainer>
</template>

<script>
import Hero from "../components/Hero.vue";
import ImageWithText from "../components/ImageWithText.vue";
import Card from "../components/Card.vue";
import FeatureList from "../components/FeatureList.vue";
import Gallery from "../components/Gallery.vue";
import Testimonial from "../components/Testimonial.vue";
import { heroImg } from "../js/main.js";

export default {
  components: {
    Hero,
    ImageWithText,
    Card,
    FeatureList,
    Gallery,
    Testimonial,
  },
  data(){
    return {heroImg}
  }
};
</script>
