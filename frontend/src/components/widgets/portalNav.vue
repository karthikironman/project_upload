<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">UPLOAD</b-navbar-brand>
         <b-collapse id="nav-collapse" is-nav>
 
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</template>