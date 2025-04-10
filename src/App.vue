<template>
  <Navbar
    logoText="My Awesome Site"
    :navLinks="[
      { text: 'Home', href: 'Home' },
      { text: 'About', href: 'About' },
      { text: 'Contact', href: 'Contact' },
    ]"
  />
  
    <router-view></router-view>
  
  <Footer
    :footerLinks="[
      // { text: 'Privacy', href: '/privacy' },
      // { text: 'Terms', href: '/terms' },
    ]"
  />
</template>

<style scoped></style>
