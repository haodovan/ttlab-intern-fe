<template>
  <Sidebar />
  <div class="main">
    <v-nav class="navbar d-flex align-center justify-space-between">
      <h1>Danh sách người dùng</h1>
      <div>
        <v-icon>mdi-bell-outline</v-icon>
        <v-avatar
          image="https://randomuser.me/api/portraits/men/85.jpg"
        ></v-avatar>
      </div>
    </v-nav>
    <UserTable />
  </div>
</template>

<script>
import Sidebar from "../../components/Bars/Sidebar.vue";
import UserTable from "../../components/Tables/UserTable.vue";
</script>

<style lang="scss" scoped>
.main {
  padding: 8px 24px 0 26px;
  .navbar {
    h1 {
      font-family: Public Sans, sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 22px;
      text-align: left;
    }
    div .v-icon {
      margin-right: 24px;
    }
  }
}
</style>
