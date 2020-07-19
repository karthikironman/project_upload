<template>
  <div id="app">
    <sidebar-menu :menu="menu" :width="'200px'" />
    <router-view/>
  <div>
</div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
       menu: [
                    {
                        href: '/portal/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-signal'
                    },
                    {
                        href: '/portal/media',
                        title: 'Media',
                        icon: 'fa fa-image'
                    },
                    {
                        href: '/portal/apps',
                        title: 'Apps',
                        icon: 'fa fa-th'
                    },
                    {
                        href: '/portal/my_plan',
                        title: 'My plan',
                        icon: 'fa fa-play'
                    },
                    {
                        href: '/portal/support',
                        title: 'support',
                        icon: 'fa fa-comment'
                    }
                    
                ]
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.v-sidebar-menu{
    top: 3.5rem !important;
    height: calc(100vh - 3.5rem) !important;
}




</style>
