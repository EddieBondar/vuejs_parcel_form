<template>
  <div>
    <div
      class="w-4/5 mx-auto border rounded-lg drop-shadow-md bg-gray-100 mb-4"
    >
      <div class="px-8 py-8">
        <h1 class="text-2xl text-center border-b-2 border-dashed pb-4 mb-4">
          Parcel sending form
        </h1>
        <form @submit.prevent>
          <div class="flex flex-wrap">
            <!-- Sener City -->
            <div class="text-lg w-1/2 pr-2 pb-2">
              <label class="pl-2" for="Sender_City">Город отправитель:</label>
              <br />
              <input
                v-model="cityL"
                class="rounded-md w-full px-4 py-4"
                id="Sender_City"
                type="text"
                placeholder="Введите название"
              />
            </div>
            <!-- Recipient City -->
            <div class="text-lg w-1/2">
              <label class="pl-2" for="Recipient_City">Город получатель:</label>
              <br />
              <input
                v-model="cityR"
                class="rounded-md w-full px-4 py-4"
                id="Recipient_City"
                type="text"
                placeholder="Введите название"
              />
            </div>
            <!-- Type of parcel -->
            <div class="text-lg w-1/2 pr-2 pb-2">
              <label class="pl-2" for="">Тип посылки:</label>
              <select v-model="typeParcel" class="rounded-md" id="">
                <option class="border-b-2 rounded-md" value="">
                  Выберите тип
                </option>
                <option value="Стандарт">Стандарт</option>
                <option value="Хрупкое">Хрупкое</option>
                <option value="Габаритное">Габаритное</option>
                <option value="Негабаритное">Негабаритное</option>
              </select>
            </div>
            <!-- Date of dispatch -->
            <div class="text-lg w-1/2">
              <label class="pl-2" for="">Дата отправки:</label>
              <input v-model="date" class="rounded-md px-2" type="date" />
            </div>
            <!-- Parcel discription -->
            <div class="text-lg w-full pb-2">
              <label class="pl-2" for="">Описание посылки:</label>
              <textarea
                v-model="descriptionParcel"
                class="bg-zinc-50 w-full rounded-md px-4 py-4"
                name=""
                id=""
                cols="30"
                rows="2"
              ></textarea>
            </div>
          </div>
          <div
            class="flex flex-wrap text-lg pt-2 justify-center border-t-2 border-dashed"
          >
            <button
              class="bg-blue-500 hover:bg-indigo-500 duration-300 rounded-md px-4 py-4"
              v-on:click="onSubmit"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- Arrow bot -->
    <div class="flex flex-wrap justify-center mb-4">
      <div class="rounded-full bg-indigo-300 border-2 border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TheParcelSending",
  data() {
    return {
      cityL: null,
      cityR: null,
      typeParcel: null,
      date: null,
      descriptionParcel: null,
    };
  },
  methods: {
    ...mapActions({
      setParcel: "Parcel/setParcel",
    }),
    onSubmit() {
      // eslint-disable-next-line
      // debugger;
      this.setParcel({
        cityL: this.cityL,
        cityR: this.cityR,
        type: this.typeParcel,
        date: this.date,
        description: this.descriptionParcel,
        timeCreation: new Date().toLocaleString(),
      });
    },
  },
};
</script>
