<template>

  <BCard v-if="imgSrc || imgAlt || imgTop" :class="['customMargin', cardMargin]">
 <template #header>
      <BImg v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :top="imgTop" fluid />
    </template>
    <BCard-title :class="`fs-${titleScale}`">{{ title }}</BCard-title>
    <BCard-text :class="`fs-${textScale}`">{{ text }}</BCard-text>
    <slot></slot>
    <BButton
      v-if="buttonText"
      :variant="buttonVariant"
      :to="{ name: buttonHref }"
      >{{ buttonText }}</BButton
    >
  </BCard>
  <BCard v-else  :class="['customMargin', cardMargin]">
<BCard-title :class="`fs-${titleScale}`">{{ title }}</BCard-title>
    <BCard-text :class="`fs-${textScale}`">{{ text }}</BCard-text>
    <slot></slot>
    <BButton
      v-if="buttonText"
      :variant="buttonVariant"
      :to="{ name: buttonHref }"
      >{{ buttonText }}</BButton
    >
  </BCard>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Card Title' },
    text: { type: String, default: 'Some example text.' },
    imgSrc: { type: String, required: false },
    imgAlt: { type: String, required: false },
    imgTop: { type: Boolean, default: false },
    buttonText: { type: String, required: false },
    buttonVariant: { type: String, default: 'success' },
    buttonHref: { type: String, default: 'NotFound' },
    titleScale: { type: Number, default: 4 },
    textScale: { type: Number, default: 5 },
    cardMargin: { type: String, default: '' },
  },
};
</script>
