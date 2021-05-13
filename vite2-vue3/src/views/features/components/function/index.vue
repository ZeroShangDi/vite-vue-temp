<script>
  import { h } from 'vue'
  // 性能提升在vue3.0中忽略不计
  function Heading(props, context) {
    console.log(context)

    return h(`h${props.level}`, context.attrs, context.slots)
  }
  export default Heading
</script>
