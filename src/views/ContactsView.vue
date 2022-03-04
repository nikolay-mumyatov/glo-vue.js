<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>

        <header-title-component :title="this.title" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit()" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phone.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.textarea.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span v-for="error in v$.textarea.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import HeaderTitleComponent from "@/components/HeaderTitleComponent.vue";

import useVuelidate from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "../validators/minLength";

export default {
  components: {
    NavBarComponent,
    HeaderTitleComponent,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("This is a required field.", required),
      },
      email: {
        required: helpers.withMessage("This is a required field.", required),
        email,
      },
      phone: "",
      textarea: {
        required: helpers.withMessage("This is a required field.", required),
        maxLength: maxLength(150),
        minLength: helpers.withMessage(
          "The minimum number of characters is 5.",
          minLength
        ),
      },
    };
  },
  data() {
    return {
      title: "Contact us",
      name: "",
      email: "",
      phone: "",
      textarea: "",
    };
  },
  computed: {},
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
    },
  },
};
</script>

<style lang="scss" scoped>
    span{
        font-size: 12px;
        color: red;
    }
</style>
