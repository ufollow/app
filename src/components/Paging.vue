<template>
<div>
  <ul class="pagination justify-content-center my-4">
    <li class="page-item" v-for="page in pages" :key="page" :class="{ 'active': isCurrentPage(page), 'disabled': isEllipsis(page) }">
      <span class="page-link" v-if="isEllipsis(page)">
        {{ page }}
      </span>
      <a href="#" class="page-link" @click.prevent="selectPage(page)" v-else>
        {{ page }}
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'paging',
  props: {
    count: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 30
    },
    range: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    isCurrentPage (page) {
      return this.currentPage === page
    },
    isEllipsis (page) {
      return page === '...'
    },
    selectFirstPage () {
      this.selectPage(1)
    },
    selectLastPage () {
      this.selectFirstPage(this.totalPages)
    },
    selectNextPage () {
      this.selectPage(this.currentPage + 1)
    },
    selectPage (page) {
      if (page < 1 || page > this.totalPages) return

      this.currentPage = page
      this.$emit('update:index', this.selectedIndex)
      this.$emit('change')
    },
    selectPreviousPage () {
      this.selectPage(this.currentPage - 1)
    }
  },
  computed: {
    isFirstPage () {
      return this.currentPage === 1
    },
    isLastPage () {
      return this.currentPage === this.totalPages
    },
    pages () {
      const last = this.totalPages
      const delta = 2
      const left = this.currentPage - delta
      const right = this.currentPage + delta + 1
      const range = []
      const rangeWithDots = []

      for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
          range.push(i)
        }
      }

      let l = null

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1)
          } else if (i - l !== 1) {
            rangeWithDots.push('...')
          }
        }
        rangeWithDots.push(i)
        l = i
      }

      return rangeWithDots
    },
    selectedIndex () {
      return (this.currentPage - 1) * this.length
    },
    totalPages () {
      return Math.ceil(Math.max(this.count, 1) / Math.max(this.length, 1))
    }
  }
}
</script>
