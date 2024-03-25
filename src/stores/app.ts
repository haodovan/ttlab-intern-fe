import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    collapse: false,
    lists: [
      'Shop1',
      'Shop2',
      'Shop3',
      'Shop4'
    ],
    icons: [
      'mdi-twitter',
      'mdi-facebook',
      'mdi-instagram',
      'mdi-github',
    ],
    links: [
      {
        title: 'Home',
        disabled: true,
        href: '/product-detail',
      },
      {
        title: 'Shop',
        disabled: true,
        href: '/product-detail',
      },
      {
        title: 'Men',
        disabled: true,
        href: '/product-detail',
      },
      {
        title: 'T-shirts',
        disabled: false,
        href: '/product-detail',
      },
    ],
    tab: 'Rating & Reviews',
    rating: 4.5,
    productData: [],
  }),

  // actions: {
  //   fetchData() {
  //     axios ('url').then(response => {
  //       // Xử lý dữ liệu nhận được
  //       return response.json()
  //     }).then(data => {
  //       // Lưu dữ liệu vào store
  //       this.productData = data
  //     }).catch(error => {
  //       console.error('Error fetching data:', error)
  //     })
  //   }
  // }
})

// Sử dụng hook onMounted để gọi action fetchData khi component được mounted
// onMounted(() => {
//   useUserStore.fetchData()
// })
