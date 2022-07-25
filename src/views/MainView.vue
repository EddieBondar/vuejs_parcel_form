<template>
  <div>
    <TheHeader />
    <TheParcelSending />
    <TheSumForm />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheParcelSending from "@/components/TheParcelSending.vue";
import TheSumForm from "@/components/TheSumForm.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "MainView",
  components: {
    TheHeader,
    TheParcelSending,
    TheSumForm,
    TheFooter,
  },
};
</script>
