<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="products"
    :search="search"
    :sort-by="[{ key: 'price', order: 'desc' }]"
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
            <v-btn v-bind="props" prepend-icon="mdi-plus">Tạo mới</v-btn>
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
                    Tên sản phẩm
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedProduct.name"
                    label="Nhập tên sản phẩm"
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
                    Giá
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedProduct.price"
                    label="Nhập giá sản phẩm"
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
                    Số lượng
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedProduct.quantity"
                    label="Nhập số lượng sản phẩm"
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
                    Mô tả
                    <span>*</span>
                  </p>
                  <v-textarea
                    v-model="editedProduct.description"
                    label="Nhập mô tả"
                    variant="solo"
                    center-affix
                    density="compact"
                    hide-details
                    single-line
                    flat
                  ></v-textarea>
                </div>
                <div class="brand-input">
                  <p>
                    Ảnh sản phẩm
                    <span>*</span>
                  </p>
                  <v-text-field
                    v-model="editedProduct.image"
                    label="Nhập link ảnh sản phẩm"
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
        title: "TÊN SẢN PHẨM",
        align: "start",
        key: "name",
      },
      {
        title: "GIÁ",
        align: "start",
        key: "price",
      },
      {
        title: "SỐ LƯỢNG",
        align: "start",
        key: "quantity",
      },
      {
        title: "MÔ TẢ",
        align: "start",
        key: "description",
      },
      {
        title: "ẢNH",
        align: "start",
        key: "image",
      },
      {
        title: "HÀNH ĐỘNG",
        align: "start",
        key: "action",
      },
    ];
    const products = [
      {
        name: "Sản phẩm 1",
        price: 6000,
        quantity: 3,
        description: "Lorem ipsum dolor sit amet",
        image: "",
      },
      {
        name: "Sản phẩm 1",
        price: 7000,
        quantity: 1,
        description: "Lorem ipsum dolor sit amet",
        image: "",
      },
      {
        name: "Sản phẩm 1",
        price: 6000,
        quantity: 1,
        description: "Lorem ipsum dolor sit amet",
        image: "",
      },
      {
        name: "Sản phẩm 4",
        price: 6000,
        quantity: 1,
        description: "Lorem ipsum dolor sit amet",
        image: "",
      },
      {
        name: "Sản phẩm 1",
        price: 6000,
        quantity: 1,
        description: "Lorem ipsum dolor sit amet",
        image: "",
      },
      {
        name: "Sản phẩm 1",
        price: 6000,
        quantity: 1,
        description: "Lorem ipsum dolor sit amet",
        image: "",
      },
    ];
    const editedProduct = {
      name: "",
      price: null,
      quantity: null,
      description: "",
      image: "",
    };
    return {
      search,
      headers,
      products,
      dialog,
      editedIndex,
      page,
      editedProduct,
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
        ? "Tạo mới sản phẩm"
        : "Chỉnh sửa sản phẩm";
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
