// const { useDebugValue } = require("react");

Vue.component("my-hello", {
  props: ["yourName"],

  props: {
    yourName: {
      type: String,
      // default: '名無しの権兵衛',
      required: true,
      validator: function(value) {
        return value.length <= 5;
      }
    },
  },
  template: `<div>こんにちは、{{ yourName }}さん！</div>`,
});

new Vue({
  el: '#app',
});