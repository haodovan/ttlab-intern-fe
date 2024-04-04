<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="users"
    :search="search"
    :sort-by="[{ key: 'name', order: 'desc' }]"
    :itemsPerPage="itemsPerPage"
  >
    <template v-slot:top>
      <div class="filter-add d-flex align-center justify-space-between">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          variant="solo"
          label="Tìm kiếm"
          center-affix
          density="compact"
          hide-details
          single-line
        ></v-text-field>
        <v-dialog class="dialog" v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="add-btn" v-bind="props" prepend-icon="mdi-plus"
              >Tạo mới</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <h1 class="card-title">{{ formTitle }}</h1>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <div class="wrapper">
                <div class="brand-input">
                  <p>
                    Tên người dùng
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedUser.name"
                    label="Nhập tên người dùng"
                    variant="solo"
                    center-affix
                    density="compact"
                    hide-details
                    single-line
                    flat
                  ></v-text-field>
                </div>
                <div class="brand-input">
                  <p>
                    Email
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedUser.email"
                    label="Nhập email"
                    variant="solo"
                    center-affix
                    density="compact"
                    hide-details
                    single-line
                    flat
                  ></v-text-field>
                </div>
                <div class="brand-input">
                  <p>
                    Ngày sinh
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedUser.dob"
                    label="YYYY/MM/DD"
                    variant="solo"
                    center-affix
                    density="compact"
                    hide-details
                    single-line
                    flat
                    append-inner-icon="mdi-calendar"
                  ></v-text-field>
                </div>
                <div class="brand-input">
                  <p>
                    Số điện thoại
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedUser.phone"
                    label="Nhập số điện thoại"
                    variant="solo"
                    center-affix
                    density="compact"
                    hide-details
                    single-line
                    flat
                  ></v-text-field>
                </div>
                <div class="brand-input">
                  <p>
                    Avatar
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedUser.avatar"
                    label="Nhập link ảnh avatar"
                    variant="solo"
                    center-affix
                    density="compact"
                    hide-details
                    single-line
                    flat
                  ></v-text-field>
                </div>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="cancel" variant="elevated"> Hủy </v-btn>
              <v-btn flat class="save" color="primary" variant="elevated">
                Tạo mới
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <template v-slot:item.avatar="{ value }">
      <v-avatar rounded="0" size="36px"
        ><v-img alt="Avatar" :src="value"></v-img
      ></v-avatar>
    </template>
    <template v-slot:item.action="{}">
      <div class="action-col">
        <v-icon>mdi-square-edit-outline</v-icon>
        <v-icon>mdi-trash-can-outline</v-icon>
      </div>
    </template>
    <template v-slot:bottom="{ itemsPerPage }">
      <div class="pagination-bar d-flex align-center justify-space-between">
        <div class="showing">
          <span>Showing</span>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" append-icon="mdi-chevron-down" flat>
                {{ itemsPerPage === 1000 ? "All" : itemsPerPage }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in [5, 10, 25, 50, 100, 'All']"
                :key="index"
                :value="number"
                @click="selectItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <span>of 50</span>
        </div>
        <v-pagination v-model="page" :length="5" :total-visible="6">
          <template v-slot:item="{ isActive, page, props }">
            <v-btn
              v-if="!props.disabled"
              class="pag-item"
              flat
              v-bind="props"
              :color="isActive ? '#0F60FF' : '#F1F2F6'"
              @click="props.onClick()"
            >
              {{ page }}
            </v-btn>
            <div class="d-flex align-end" style="height: 80%" v-else>
              <span>{{ page }}</span>
            </div>
          </template>
          <template
            v-slot:next="{
              onClick,
              disabled,
              'aria-label': ariaLabel,
              'aria-disabled': ariaDisabled,
            }"
          >
            <v-btn
              size="28px"
              flat
              density="compact"
              :disabled="disabled"
              :color="!disabled ? '#F1F2F6' : '#0F60FF'"
              @click="onClick"
              :aria-label="ariaLabel"
              :aria-disabled="ariaDisabled"
            >
              <v-icon class="arrow-icon">mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <template
            v-slot:prev="{
              onClick,
              disabled,
              'aria-label': ariaLabel,
              'aria-disabled': ariaDisabled,
            }"
          >
            <v-btn
              size="28px"
              flat
              density="compact"
              :disabled="disabled"
              :color="!disabled ? '#F1F2F6' : '#0F60FF'"
              @click="onClick"
              :aria-label="ariaLabel"
              :aria-disabled="ariaDisabled"
            >
              <v-icon class="arrow-icon">mdi-chevron-left</v-icon>
            </v-btn>
          </template>
        </v-pagination>
      </div>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  data() {
    const dialog = false;
    const search = "";
    const editedIndex = -1;
    const page = ref(1);
    const itemsPerPage = 10;
    const headers = [
      {
        title: "avatar",
        align: "start",
        key: "avatar",
      },
      {
        title: "tên người dùng",
        align: "start",
        key: "name",
      },
      {
        title: "email",
        align: "start",
        key: "email",
      },
      {
        title: "ngày sinh",
        align: "start",
        key: "dob",
      },
      {
        title: "số điện thoại",
        align: "start",
        key: "phone",
      },
      {
        title: "HÀNH ĐỘNG",
        align: "start",
        key: "action",
      },
    ];
    const users = [
      {
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
        name: "Dianne Russell",
        email: "nevaeh.simmons@example.com",
        dob: "1989/04/06",
        phone: "063-222-1125",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        name: "Leslie Alexander",
        email: "curtis.weaver@example.com",
        dob: "1979/04/06",
        phone: "051-254-8725",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
        name: "Dianne Russell",
        email: "nevaeh.simmons@example.com",
        dob: "1989/04/06",
        phone: "063-222-1125",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Dianne Russell",
        email: "nevaeh.simmons@example.com",
        dob: "1989/04/06",
        phone: "063-222-1125",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        name: "Dianne Russell",
        email: "nevaeh.simmons@example.com",
        dob: "1989/04/06",
        phone: "063-222-1125",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Dianne Russell",
        email: "nevaeh.simmons@example.com",
        dob: "1989/04/06",
        phone: "063-222-1125",
      },
    ];
    const editedUser = {
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "",
      email: "",
      dob: "",
      phone: "",
    };
    return {
      search,
      headers,
      users,
      dialog,
      editedIndex,
      page,
      editedUser,
      itemsPerPage,
    };
  },
  methods: {
    selectItemsPerPage(number) {
      this.itemsPerPage = number;
      if (number === "All") this.itemsPerPage = 1000;
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Tạo mới người dùng"
        : "Chỉnh sửa người dùng";
    },
  },
};
</script>

<style lang="scss">
.table {
  .filter-add {
    margin-top: 35px;
    margin-bottom: 24px;
    .v-text-field {
      max-width: 316px;
    }
    .v-btn {
      background-color: #0f60ff;
      color: #ffffff;
      text-transform: none;
      font-family: Public Sans, sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      text-align: center;
    }
  }
  .action-col {
    .v-icon {
      margin-right: 10px;
      color: #8b909a;
    }
  }
  .v-divider {
    display: none;
  }

  .v-table__wrapper {
    border: 1px solid #e9e7fd;
    border-radius: 16px 16px 0px 0px;
    /* border-bottom: 0px; */

    table {
      thead {
        font-family: Public Sans, sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 15.28px;
        text-align: left;
        color: #8b909a;
        text-transform: uppercase;
        tr .v-data-table__td {
          padding-left: 36px;
        }
      }
      tbody {
        //styleName: Light/Basic Typography/Paragraph Semi Bold;
        font-family: Public Sans, sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;
        text-align: left;
        .v-data-table__tr {
          .v-data-table__td {
            padding-left: 36px;
          }
        }
      }
    }
  }

  .pagination-bar {
    border: 1px solid #e9e7fd;
    border-top: 0;
    padding-bottom: 21px;
    border-radius: 0px 0px 16px 16px;
    .v-pagination {
      margin: 16px 24px;
      .pag-item {
        height: 28px;
        width: 28px;
        //styleName: Light/Basic Typography/Paragraph Small;
        font-family: Public Sans, sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
      }

      ul li {
        margin: 2px;
      }
    }
    .showing {
      margin-left: 24px;
      //styleName: Light/Button/2) Button Default;
      font-family: Public Sans, sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 17.63px;
      letter-spacing: 0.4300000071525574px;
      text-align: left;
      color: #8b909a;
      .v-btn {
        margin: 0 8px;
        border: 1px solid #e9e7fd;
        border-radius: 6px;
      }
    }
  }
}
.dialog {
  .v-card {
    width: 440px;
    border-radius: 12px !important;

    .v-card-title {
      padding: 17px 20px;
      .card-title {
        font-family: Public Sans, sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 21.15px;
        text-align: left;
      }
      .v-divider {
        color: #ebeefa;
      }
    }
    .v-card-text {
      background-color: #f7f8fa;
      padding: 16px 20px 20px 20px;
      .wrapper {
        .brand-input {
          p {
            font-family: Public Sans, sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.02em;
            text-align: left;
            color: #464f60;
            margin-bottom: 8px;
            span {
              color: #0f60ff;
            }
          }
          .v-text-field {
            color: #a1a9b8;
            margin-bottom: 16px;
            border: 2px solid #868fa029;
            border-radius: 6px !important;
          }
        }
      }
    }
    .v-card-actions {
      padding: 0;
      font-family: Public Sans, sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.02em;
      text-align: left;

      .cancel {
        text-transform: capitalize;
        padding: 6px 21px;
        box-shadow: 0px 0px 0px 1px #464f6029;
      }
      .save {
        text-transform: capitalize;
        padding: 6px 26px;
        margin: 16px 20px 16px 16px;
      }
    }
  }
}
</style>
