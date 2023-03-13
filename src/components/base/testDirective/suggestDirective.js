export default function suggest() {
  return {
    mounted(el) {
      console.log('调用suggest指令')
      console.log(el)
    },
  }
}
