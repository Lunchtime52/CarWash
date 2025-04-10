<template>
  
    <Hero
        title="Welcome to Our Site!"
        subtitle="Sample Subtitle"
        buttonText="Explore Now"
        buttonHref="Contact"
        imageUrl="https://placehold.co/1600x900"
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
      <BCol md=4 mb-md-4 v-for="n in 6" :key="n">
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
        { title: 'Feature 1', description: 'Description for Feature 1', icon:'bi-1-square'},
        {
          title: 'Feature 2',
          description: 'Description for Feature 2',
          icon: 'bi-2-square',
        },
        {
          title: 'Feature 3',
          description: 'Description for Feature 3',
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
    
    export default {
      components: {
        Hero,
        ImageWithText,
        Card,
        FeatureList,
        Gallery,
        Testimonial,
      },
    };
    </script>
