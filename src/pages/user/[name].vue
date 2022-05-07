<template>
  <transition name="fade">
    <main class="flex items-center justify-center w-screen min-h-screen">
      <div v-if="loading" class="flex items-center space-x-2">
        <Icon name="loading" class="w-8 h-8 animate-spin" />
        <span class="text-xl font-normal">Fetching data from Twitter API...</span>
      </div>
      <div
        v-else-if="!loading && twitterData && twitterData.errors"
        class="flex items-center space-x-2"
      >
        <Icon name="error" class="w-8 h-8" />
        <span class="text-xl font-normal">Error: {{ twitterData.errors[0].message }}</span>
      </div>
      <div
        v-else-if="!loading && twitterData && !twitterData.errors"
        class="md:w-3/4 lg:w-2/3 xl:w-1/2 hover:shadow-md bg-opacity-60"
      >
        <div class="twitter-card">
          <!-- Profile photo and banner section -->
          <div class="images">
            <div
              class="image"
              :style="{
                backgroundImage: twitterData.profile_banner_url ? `url(${twitterData.profile_banner_url})` : undefined,
                paddingTop: '33.33%'
              }"
            ></div>
            <div
              class="avatar image"
              :style="{
                backgroundImage: `url(${getBiggerPicture})`,
              }"
            ></div>
          </div>
          <div class="px-3">
            <!-- Header -->
            <div class="py-1.5">
              <h1 class="twitter-username">
                <span>{{ twitterData.name }}</span>
                <Icon
                  title="This account is verified by Twitter."
                  v-if="twitterData.verified"
                  name="verified"
                  class="w-5 h-5 text-gray-100"
                />
                <Icon
                  title="This account's tweets are protected."
                  v-if="twitterData.protected"
                  name="protected"
                  class="w-5 h-5 text-gray-100"
                />
              </h1>
              <a
                class="text-sm text-gray-400"
                :href="twitterProfileUrl"
              >@{{ twitterData.screen_name }}</a>
            </div>

            <!-- Description -->
            <div class="text-sm text-gray-100">{{ twitterData.description }}</div>

            <!-- Location, Link and Birth Date -->
            <div class="twitter-links">
              <p v-if="twitterData.location" class="flex space-x-1.5">
                <Icon name="location" class="w-5 h-5 text-gray-500" />
                <span class="self-center">{{ twitterData.location }}</span>
              </p>
              <a
                v-if="twitterData.url"
                class="flex space-x-1.5"
                :href="getUrlForUrlSection.expanded_url"
              >
                <Icon name="link" class="w-5 h-5 text-gray-500" />
                <span class="self-center">{{ getUrlForUrlSection.display_url }}</span>
              </a>
              <p
                :title="`They've created their account at ${formatDate(new Date(twitterData.created_at))} `"
                class="flex space-x-1.5"
              >
                <Icon name="calendar" class="w-5 h-5" />
                <span class="self-center">{{ getCreationDate }}</span>
              </p>
              <p
                title="The string representation of the unique identifier for this user. (Twitter User ID)"
                class="flex space-x-1.5"
              >
                <Icon name="id" class="w-5 h-5" />
                <span class="self-center font-medium text-gray-200">{{ twitterData.id_str }}</span>
              </p>
            </div>

            <div class="twitter-followers">
              <a
                :href="twitterProfileUrl + '/following'"
                class="text-gray-500"
                title="The number of users this account is following."
              >
                <span class="font-normal text-gray-100">{{ twitterData.friends_count.toLocaleString() }}</span> Following
              </a>
              <a
                :href="twitterProfileUrl + '/followers'"
                class="text-gray-500"
                title="The number of followers this account currently has."
              >
                <span class="font-normal text-gray-100">{{ twitterData.followers_count.toLocaleString() }}</span> Followers
              </a>
              <a
                :href="twitterProfileUrl + '/likes'"
                class="text-gray-500"
                title="The number of Tweets this user has liked in the account’s lifetime."
              >
                <span class="font-normal text-gray-100">{{ twitterData.favourites_count.toLocaleString() }}</span> Liked Tweets
              </a>
              <p title="The number of Tweets (including retweets) issued by the user.">
                <span class="font-normal text-gray-100">{{ twitterData.statuses_count.toLocaleString() }}</span> Tweets
              </p>
              <p title="The number of public lists that this user is a member of.">
                <span class="font-normal text-gray-100">{{ twitterData.listed_count.toLocaleString() }}</span> Lists
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </transition>
</template>

<script lang="ts" setup>
import Icon from "../../components/Icon.vue";
import { useRoute } from "vue-router";
import { computed, ComputedRef, ref, Ref } from "vue";
import { useFetch } from "@vueuse/core";

const twitterData: Ref = ref({});
const loading = ref(true);

const nameParam = computed(() => {
  let route = useRoute();
  return route.params.name;
});


const twitterProfileUrl = ref('https://twitter.com/' + nameParam.value);

const url = ref(`https://twitter-profile-api.ardasoyturk.workers.dev/?username=${nameParam.value}`);
const twitterRequest = useFetch(url, { refetch: true }).json();

const getCreationDate = computed(() => {
  let date = new Date(twitterData.value.created_at);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return `Joined ${months[date.getMonth()]} ${date.getFullYear()}`
})

const formatDate = function (date: Date) {
  const day = date.getUTCDate().toString().length < 2 ? `0${date.getUTCDate()}` : date.getUTCDate();
  const month = (date.getUTCMonth() + 1).toString().length < 2 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const hours = date.getUTCHours().toString().length < 2 ? `0${date.getUTCHours()}` : date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().length < 2 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();
  const seconds = date.getUTCSeconds().toString().length < 2 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds();
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} GMT`
}

const getBiggerPicture = computed(() => {
  return twitterData.value.profile_image_url_https.replace('_normal', '_400x400');
})

const getUrlForUrlSection: ComputedRef<Record<string, string>> = computed(() => {
  let url = twitterData.value.url;

  if (twitterData.value.entities?.url?.urls[0]?.url === url) {
    return twitterData.value.entities?.url?.urls[0];
  }
})

twitterRequest.onFetchResponse(() => {
  loading.value = false;
  twitterData.value = twitterRequest.data.value instanceof Array ? twitterRequest.data.value[0] : twitterRequest.data.value;
})
</script>