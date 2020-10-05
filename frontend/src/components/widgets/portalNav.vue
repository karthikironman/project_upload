<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">UPLOAD</b-navbar-brand>
         <b-collapse id="nav-collapse" is-nav>
 
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em><b-avatar variant="light"></b-avatar></em>
            <b-badge variant="success">User ID</b-badge>
          </template>
          <b-dropdown-item href="#">Profile Settings</b-dropdown-item>
          <b-dropdown-item href="#">Account Settings</b-dropdown-item>
          <b-dropdown-item href="#">Contact Us</b-dropdown-item>
          <b-dropdown-item href="#">My Plan</b-dropdown-item>
          <b-dropdown-item href="#">Support</b-dropdown-item>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</template>