<script setup lang="ts">
import { RecaptchaV2 } from "../../dist";
import { ref, onMounted } from 'vue';

const widget = ref();

const handleWidgetId = (widgetId: string) => {
  console.log("Widget ID: ", widgetId);
};
const handleErrorCalback = () => {
  console.log("Error callback");
};
const handleExpiredCallback = () => {
  console.log("Expired callback");
};
const handleResetCallback = () => {
  console.log("Reset callback");
};
const handleLoadCallback = (response: unknown) => {
  console.log("Load callback", response);
};
const btnReset = () => {
  console.log("Load sdssd");
  widget.value.resetWidget();
}
</script>

<template>
  <div>
    <RecaptchaV2 ref="widget" @widget-id="handleWidgetId" @error-callback="handleErrorCalback"
      @expired-callback="handleExpiredCallback" @load-callback="handleLoadCallback"
      @reset-callback="handleResetCallback" />
    <button @click="btnReset">Reset</button>
  </div>
</template>
