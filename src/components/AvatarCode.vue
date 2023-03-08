<script lang="ts">
import { computed, defineComponent, h, toRefs } from 'vue'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/tokyo-night-dark.css'

import hljs from 'highlight.js'
hljs.registerLanguage('json', json)
export default defineComponent({
  props: {
    code: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { code } = toRefs(props)
    const highlightedCode = computed(() => {
      return hljs.highlight(code.value, { language: 'json' })
    })
    return () => h('pre', {}, [h('code', { innerHTML: highlightedCode.value.value })])
  }
})
</script>
