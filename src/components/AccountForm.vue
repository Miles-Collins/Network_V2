<template>
  <div class="row m-5 text-light">
    <form @submit.prevent="handleSubmit(account?.id)">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          aria-describedby="nameHelp"
          v-model="editable.name"
        />
        <div id="nameHelp" class="form-text">Type name here.</div>
      </div>

      <div class="mb-3">
        <label for="picture" class="form-label">Profile Picture</label>
        <input
          type="text"
          name="picture"
          class="form-control"
          id="picture"
          aria-describedby="profileHelp"
          v-model="editable.picture"
        />
        <div id="profileHelp" class="form-text">Insert Profile Picture URL</div>
      </div>

      <div class="mb-3">
        <label for="bio" class="form-label">Bio</label>
        <textarea
          class="form-control"
          name="bio"
          id="bio"
          aria-describedby="bioHelp"
          cols="10"
          rows="5"
          v-model="editable.bio"
        ></textarea>
        <div id="bioHelp" class="form-text">Tell us about yourself.</div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="editable.email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3">
        <label for="class" class="form-label">Graduating Class</label>
        <input
          type="text"
          class="form-control"
          id="class"
          aria-describedby="graduateClassHelp"
          v-model="editable.class"
        />
        <div id="graduateClassHelp" class="form-text">Example: Summer 22'</div>
      </div>

      <div class="mb-3">
        <label for="coverImg" class="form-label">Cover Image</label>
        <input
          type="text"
          class="form-control"
          id="coverImg"
          aria-describedby="coverImgHelp"
          v-model="editable.coverImg"
        />
        <div id="coverImgHelp" class="form-text">
          Link to your favorite cover image.
        </div>
      </div>

      <div class="mb-3">
        <label for="github" class="form-label">GitHub</label>
        <input
          type="text"
          class="form-control"
          id="github"
          aria-describedby="githubHelp"
          v-model="editable.github"
        />
        <div id="githubHelp" class="form-text">Insert link to your GitHub.</div>
      </div>

      <div class="mb-3">
        <label for="linkedin" class="form-label">LinkedIn</label>
        <input
          type="text"
          class="form-control"
          id="linkedin"
          aria-describedby="linkedinHelp"
          v-model="editable.linkedin"
        />
        <div id="linkedinHelp" class="form-text">
          Insert link to your LinkedIn.
        </div>
      </div>

      <div class="mb-3">
        <label for="resume" class="form-label">Resume</label>
        <input
          type="text"
          class="form-control"
          id="resume"
          aria-describedby="resumeHelp"
          v-model="editable.resume"
        />
        <div id="resumeHelp" class="form-text">
          Insert link to your resume, or webpage.
        </div>
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="graduated"
          v-model="editable.graduated"
        />
        <label
          class="form-check-label"
          for="graduated"
          aria-describedby="graduatedHelp"
          >Graduated from CodeWorks</label
        >
        <div id="graduatedHelp" class="form-text">
          Check yes if you have graduated.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref, watchEffect } from "vue";
import { AppState } from "../AppState";
import { accountService } from "../services/AccountService";
import Pop from "../utils/Pop";

export default {
  setup() {
    const editable = ref({});

    watchEffect(() => {
      if (!AppState.account) {
        return;
      }
      editable.value = { ...AppState.account };
    });

    return {
      account: computed(() => AppState.account),
      editable,
      async handleSubmit(accountId) {
        try {
          // debugger
          editable.value.id = accountId;
          console.log("[ACCOUNT BODY]", editable.value);
          await accountService.edit(editable.value);
        } catch (error) {
          console.error(error);
          // @ts-ignore
          Pop.error("[ERROR]", error.message);
        }
      },
    };
  },
};
</script>

<style></style>
