<template>
  
    <Hero
        title="Drive Clean, Drive Happy"
        subtitle="Welcome to, Seymour's newest destination for a sparkling clean car! We offer fast, reliable, and high-quality washes to keep your vehicle looking its best."
        buttonText="Explore Our Options"
        buttonHref="Contact"
        imageUrl= "./src/assets/images/hero-background.jpg"
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
        { title: 'Basic Wash', description: 'Description for Feature 1', icon:'bi-1-square'},
        {
          title: 'Shine & Protect',
          description: 'Description for Feature 2',
          icon: 'bi-2-square',
        },
        {
          title: 'Ultimate Detail',
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
