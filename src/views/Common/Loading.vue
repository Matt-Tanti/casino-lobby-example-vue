<template>
  <div class="content">
    <span class="spinner"></span>
  </div>
</template>

<style scoped>
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 3rem;
  height: 3rem;
  margin: 3rem;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
