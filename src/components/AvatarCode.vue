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
    const writeToClipboard = () => {
      const textarea = document.createElement('textarea')
      document.body.appendChild(textarea)
      textarea.value = '复制我呀'
      textarea.select()
      navigator.clipboard
        .writeText(code.value)
        .then(function () {
          alert('save to clipboard!') // success
        })
        .catch(function () {
          alert('copy failed') // error
        })
      document.body.removeChild(textarea)
    }
    return () =>
      h('div', { className: 'relative m-4 p-4 bg-[#1a1b26] rounded-lg' }, [
        h('pre', { className: 'overflow-auto' }, [
          h('code', { innerHTML: highlightedCode.value.value }),
          h(
            'button',
            {
              className:
                'transition-colors flex items-center justify-center rounded-bl bg-[#62658f]/40 hover:bg-[#62658f]/60 text-slate-50 absolute top-0 right-0 rounded-tr-lg p-2',
              onClick: writeToClipboard
            },
            [h('i', { className: 'ph-clipboard', style: { fontSize: '24px' } })]
          )
        ])
      ])
  }
})
</script>
