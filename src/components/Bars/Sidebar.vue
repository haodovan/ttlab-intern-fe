<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
    rail-width="62"
    class="sidebar"
  >
    <v-list-item class="logo d-flex justify-space-between align-center" nav>
      <template v-slot:prepend>
        <img
          class="company-logo"
          src="../../assets/logo/ttlab - logo ngang.png"
        />
      </template>
      <template v-slot:append>
        <v-icon @click.stop="rail = !rail"
          ><img src="../../assets/icons/indent-decrease.png"
        /></v-icon>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      class="link-list"
      density="compact"
      nav
      active-color="#23272E"
      base-color="#8B909A"
    >
      <span class="section-name" v-show="!rail">Quản lý sản phẩm</span>
      <v-list-item class="san-pham" title="Sản phẩm" value="1" selected>
        <template v-slot:prepend>
          <v-icon :data-rail="rail.toString()">mdi-cube-outline</v-icon>
        </template>
      </v-list-item>
      <v-list-item title="Users" value="2">
        <template v-slot:prepend>
          <img
            :data-rail="rail.toString()"
            src="../../assets/icons/users.png"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  .logo {
    .company-logo {
      padding: 12px 10px;
    }
    .v-icon {
      padding-right: 6px;
    }
  }
  .link-list {
    .section-name {
      font-family: Public Sans, sans-serif;
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      text-align: left;
      margin-left: 22px;
      text-transform: uppercase;
    }

    .v-list-item {
      margin: 0 6px 8px 6px;
      .v-list-item__spacer {
        width: 8px;
      }
      .v-icon {
        margin-left: 8px;
        &[data-rail="true"] {
          margin-left: 0;
        }
      }
      img {
        margin: 0 2px 0 8px;
        &[data-rail="true"] {
          margin-left: 0;
        }
      }
    }
    .san-pham {
      margin: 15px 6px 8px 6px;
    }
  }
}
</style>
