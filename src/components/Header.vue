<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <b-link class="navbar-brand" to="/">V Project</b-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;</button>

    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item-dropdown right no-caret class="d-md-down-none">
        <template slot="button-content">
          <i class="icon-bell"></i><span class="badge badge-pill badge-danger">3</span>
        </template>
        <b-dropdown-item>알림 메세지 1</b-dropdown-item>
        <b-dropdown-item>알림 메세지 2222</b-dropdown-item>
        <b-dropdown-item>알림 메세지 33</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown right>
        <template slot="button-content">
          <span class="d-md-down-none">younyang</span>
        </template>
        <b-dropdown-item><i class="fa fa-user"></i> 회원정보 수정</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>

    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">&#9776;</button>
  </header>
</template>
<script>
export default {
  name: 'header',
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>
