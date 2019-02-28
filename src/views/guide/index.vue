<template>
  <div class="app-container guide">
    <p class="warn-content">
      {{ $t('guide.description') }}
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.
      </a>
    </p>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">{{ $t('guide.button') }}</el-button>
  </div>
</template>

<script>
import * as Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './defineSteps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      className: 'test', // className to wrap driver.js popover
      animate: true, // Whether to animate or not
      opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
      padding: 10, // Distance of element from around the edges
      allowClose: true, // Whether the click on overlay should close or not
      overlayClickNext: false, // Whether the click on overlay should move next
      doneBtnText: 'Done', // Text on the final button
      closeBtnText: 'Close', // Text on the close button for this step
      stageBackground: '#ffffff', // Background color for the staged behind highlighted element
      nextBtnText: 'Next1', // Next button text for this step
      prevBtnText: 'Previous1', // Previous button text for this step
      showButtons: true, // Do not show control buttons in footer
      keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
      scrollIntoViewOptions: {}, // We use `scrollIntoView()` when possible, pass here the options for it if you want any
      onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
      onHighlighted: (Element) => {}, // Called when element is fully highlighted
      onDeselected: (Element) => {}, // Called when element has been deselected
      onReset: (Element) => {}, // Called when overlay is about to be cleared
      onNext: (Element) => {}, // Called when moving to next step on any step
      onPrevious: (Element) => {} // Called when moving to next step on any step
    })
  },
  methods: {
    guide() {
      this.driver = new Driver({
        className: 'test', // className to wrap driver.js popover
        animate: true, // Whether to animate or not
        opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
        padding: 0, // Distance of element from around the edges
        allowClose: true, // Whether the click on overlay should close or not
        overlayClickNext: false, // Whether the click on overlay should move next
        doneBtnText: 'Done', // Text on the final button
        closeBtnText: 'Close', // Text on the close button for this step
        stageBackground: '#ffffff', // Background color for the staged behind highlighted element
        nextBtnText: 'Next1', // Next button text for this step
        prevBtnText: 'Previous1', // Previous button text for this step
        showButtons: true, // Do not show control buttons in footer
        keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
        scrollIntoViewOptions: {}, // We use `scrollIntoView()` when possible, pass here the options for it if you want any
        onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
        onHighlighted: (Element) => {}, // Called when element is fully highlighted
        onDeselected: (Element) => {}, // Called when element has been deselected
        onReset: (Element) => {}, // Called when overlay is about to be cleared
        onNext: (Element) => {}, // Called when moving to next step on any step
        onPrevious: (Element) => {} // Called when moving to next step on any step
      })
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
<style lang="scss" scoped>
  .test{ // 会被覆盖
    background: yellow;
    margin: 0;
    padding: 0;
  }
  #driver-popover-item{
    background: blueviolet;
  }
</style>
