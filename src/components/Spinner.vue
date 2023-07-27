<template>
  <div class="spin"></div>
</template>

<script>
export default {
  name: "Spinner"
}
</script>

<style scoped>
.spin{
  display: block;
  width: 50px;
  height: 50px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  border-bottom-color: #ff8800;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to{
    transform: rotateZ(360deg);
  }

}
</style>