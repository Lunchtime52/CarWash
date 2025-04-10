<template>
  <BCard>
    <BCardTitle>Page Not Found</BCardTitle>
    <BCardText class="text-primary">
      The page you are looking for does not exist.
    </BCardText>
  </BCard>

  <p aria-hidden="true">
    <span class="placeholder bg-primary col-6"></span>
  </p>

  <BButton
    class="btn btn-primary disabled placeholder col-4"
    aria-disabled="true"
  ></BButton>
</template>
