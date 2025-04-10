<template>
  <BContainer class="my-4 section-padding">
    <form class="bg-white p-5 rounded-lg shadow-md col-md-8">
      <h2 class="mb-4">{{ title }}</h2>

      <BRow class="mb-3">
        <!-- <label for="name" class="col-sm-2 col-form-label text-start"
          >Name</label
        > -->
        <BCol>
          <BFormGroup>
          <BFormInput
            type="text"          
            id="name"
            v-model="name"
            placeholder="Your Name"
          />
          </BFormGroup>
        </BCol>
      </BRow>

      <BRow class="mb-3">
        <!-- <label for="email" class="col-sm-2 col-form-label text-start"
          >Email</label
        > -->
        <BCol>
          <BFormGroup>
          <BFormInput
            type="email"
            id="email"
            v-model="email"
            placeholder="Your Email"
          />
          </BFormGroup>
        </BCol>
      </BRow>

      <BRow class="mb-3">
        <!-- <label for="message" class="col-sm-2 col-form-label text-start"
          >Message</label
        > -->
        <BCol>
          <BFormGroup>
          <BFormTextarea
            id="message"
            v-model="message"
            rows="4"
            placeholder="Your Message"
          ></BFormTextarea>
          </BFormGroup>
        </BCol>
      </BRow>
      <BButton block variant="primary" type="submit">
        {{ buttonText }}
      </BButton>
    </form>
  </BContainer>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonHref: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>
