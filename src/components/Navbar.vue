<template>
  <BNavbar toggleable="md" :type="variant" :variant="color" class="px-4">
    <BNavbarBrand :to="{ name: logoHref }">{{ logoText }}</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto text-end">
        <BNavItem
          v-for="link in navLinks"
          :key="link.href"
          :to="{ name: link.href }"
          >{{ link.text }}
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
export default {
  props: {
    logoText: { type: String, default: "My Site" },
    logoHref: { type: String, default: "Home" },
    navLinks: { type: Array, default: () => [] },
    variant: { type: String, default: "dark" },
    color: { type: String, default: "info" },
    base: { type: String, default: "/Vue-Template-Project" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
