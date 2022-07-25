<template>
  <div class="w-4/5 mx-auto border rounded-lg drop-shadow-md bg-gray-100">
    <div class="px-4 py-8">
      <div class="table">
        <t-table :headers="headers" :data="items"></t-table>
      </div>
    </div>
  </div>
</template>

<script>
import { TTable } from "vue-tailwind/dist/components";
import { mapGetters } from "vuex";

export default {
  components: { TTable },
  data: () => {
    return {
      headers: [
        {
          text: "City from",
          value: "cityL",
        },
        {
          text: "City where",
          value: "cityR",
        },
        {
          text: "Type Parcel",
          value: "type",
        },
        {
          text: "Date of dispatch",
          value: "date",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "Time creation",
          value: "timeCreation",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("Parcel", ["items"]),
  },
};
</script>
