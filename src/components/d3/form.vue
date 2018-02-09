<template>
  <quill-editor :options="editorOption"
                ref="QuillEditor"
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
</template>

<script>
    export default {
      data () {
        return {
          content:'',
          editorOption:{

          }
        }
      },
      computed: {
        editor() {
          return this.$refs.QuillEditor.quill
        }
      },
      methods: {
        onEditorChange({editor, html, text}) {
          this.content=html;
          console.log(html)
        },
        onEditorFocus() {

        },
        onEditorReady() {

        },
        onEditorBlur() {

        },
      }
    }
</script>

<style scoped>
  .quill-editor {

    height: 600px;
  }
</style>
