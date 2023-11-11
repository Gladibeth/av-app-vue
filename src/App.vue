<template>
   <RouterView /> 
</template>

<script>
export default {
  created() {
    // localStorage.removeItem('dateTo');
    // localStorage.removeItem('dateFrom');

    const isAuthenticated = localStorage.getItem('isLogin');

    if (!isAuthenticated || isAuthenticated === 'false') {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
</style>
