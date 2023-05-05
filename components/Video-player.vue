<template>
  <div id="VideoPlayer" class="flex flex-col gap-4 overflow-hidden rounded-lg">
    <div class="w-full max-h-screen relative bg-[#161920] rounded-lg" ref="parentVideo">
      <video
        id="video"
        class="rounded-lg"
        autoplay
        ref="videoReference"
        @click="playOrPause"
      >
        <source src="https://raw.githubusercontent.com/webldavi/turing-community/main/assets/Videos/videoplayback.mp4" type="video/mp4" />
      </video>
      <div
        class="w-full h-full flex items-center justify-center top-0 absolute"
      >
        <div
          class="w-max h-max p-4 rounded-full bg-blue-dark/50"
          id="animationPause"
          v-if="animationCondition"
        >
          <svg
            v-if="!videoState"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="w-full h-max flex flex-col gap-2">
      <input
        type="range"
        v-model="percentageVideo"
        controls
        controlsList="nodownload"
        @change="onChangeTimeByProgressBar"
        id="rangeVideo"
      />
      <div class="flex flex-row items-center justify-between gap-2">
        <div class="flex flex-row gap-2 justify-center items-center">
          <button
            class="p-2 border rounded-lg border-2 border-gray-400 rotate-180"
            @click="incOrDecTimeInVideo().dec()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>
          </button>
          <button
            class="p-2 border rounded-lg border-2 border-gray-400"
            @click="playOrPause()"
          >
            <svg
              v-if="!videoState"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </button>
          <button
            class="p-2 border rounded-lg border-2 border-gray-400"
            @click="incOrDecTimeInVideo().inc()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>
          </button>

          <p v-if="mounted">
            {{
              parseInt(currentTimeUpdated / 60, 10) <= 9
                ? "0" + parseInt(currentTimeUpdated / 60, 10)
                : parseInt(currentTimeUpdated / 60, 10)
            }}:{{
              parseInt(currentTimeUpdated % 60) <= 9
                ? "0" + parseInt(currentTimeUpdated % 60)
                : parseInt(currentTimeUpdated % 60)
            }}/{{
              parseInt(videoReference.duration / 60, 10) <= 9
                ? "0" + parseInt(videoReference.duration / 60, 10)
                : parseInt(videoReference.duration / 60, 10)
            }}:{{
              parseInt(videoReference.duration % 60) <= 9
                ? "0" + parseInt(videoReference.duration % 60)
                : parseInt(videoReference.duration % 60)
            }}
          </p>
        </div>

        <div class="flex flex-row gap-2">
          <button
            class="p-2 border rounded-lg border-2 border-gray-400 flex flex-row items-center justify-center gap-1"
            @click="incOrDecVolumeInVideo().inc()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
          <button
            class="p-2 border rounded-lg border-2 border-gray-400 flex flex-row items-center justify-center gap-1"
            @click="incOrDecVolumeInVideo().dec()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 12H6"
              />
            </svg>
          </button>
          <button
            class="p-2 border rounded-lg border-2 border-gray-400 rotate-180"
            @click="setFullScreenVideo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const videoState = ref(true);
const videoReference = ref(null);
const percentageVideo = ref(0);
const animationCondition = ref(true);
const currentTimeUpdated = ref(0);
const parentVideo = ref(null)
const mounted = ref(false);

const props = defineProps({
  source: String
})

watch(()=>(props.source), ()=>{
  videoReference.value.load()
})

onMounted(() => {
  mounted.value = true;
  videoReference.value.volume = 0.10
  videoReference.value.ontimeupdate = () => {
    percentageVideo.value =
      (videoReference.value.currentTime / videoReference.value.duration) * 100;
    currentTimeUpdated.value = videoReference.value.currentTime;
  };
});

function playOrPause() {
  videoReference.value[videoState.value ? "play" : "pause"]();
  videoState.value = !videoState.value;
  animationCondition.value = true;
  setTimeout(() => {
    animationCondition.value = false;
  }, 700);
}

function incOrDecTimeInVideo() {
  return {
    inc() {
      videoReference.value.currentTime += 10;
    },
    dec() {
      videoReference.value.currentTime -= 10;
    },
  };
}

function incOrDecVolumeInVideo() {
  return {
    inc() {
      videoReference.value.volume +=
        videoReference.value.volume <= 0.9 ? 0.1 : 0;
    },
    dec() {
      videoReference.value.volume -=
        videoReference.value.volume >= 0.1 ? 0.1 : 0;
    },
  };
}

function setFullScreenVideo() {
  videoReference.value.requestFullscreen();
  videoReference.value.setAttribute("controlsList", "nodownload");
}

function onChangeTimeByProgressBar() {
  videoReference.value.currentTime =
    (percentageVideo.value / 100) * videoReference.value.duration;
}
</script>

<style>
@keyframes pause {
  0% {
    opacity: 0;
    scale: 1;
  }
  100% {
    opacity: 1;
    scale: 2;
  }
}
#animationPause {
  animation: pause 700ms;
}
#rangeVideo {
  background: #161820;
  -webkit-appearance: none;
  border-radius: 9999px;
  overflow: hidden;
}

#video {
  width: 100%;
  height: 50vh;
}

#rangeVideo::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border: 4px solid #021b2a;
  border-radius: 50px;
  background: #4ade80;
  cursor: pointer;
  box-shadow: -9007px 0px 0px 9000px #4ade80;
}
</style>
