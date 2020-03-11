<template>
  <div class="classifyBox">
    <header class="search">
      <router-link to="/search">
        <div class="search_outer">
          <van-icon name="search" size="18" class="a_icon" />
          <span>搜索商品, 共23602款好物</span>
        </div>
      </router-link>
    </header>
    <!-- 内容 -->
    <div class="classify_content">
      <!-- 左侧导航 -->
      <div class="classify_left_nav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="cly.name" class="nav_title" v-for="(cly,index) in classify.categoryL1List" :key="index" @click="goItem(`/classify?categoryid=${cly.id}`)" />
        </van-sidebar>
      </div>
      <!-- 右侧内容 -->
      <div class="classify_right">
        <!-- <div class="top_img">
          <img src="./images/00.webp" alt="">
        </div>
        <div class="right_content">
          <ul class="content_ul">
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
          </ul>
        </div> -->
        <!--  <ClassList :cateListsdata="cateListsdata" /> -->
        <ClassList />
      </div>
    </div>

  </div>
</template>
<script>
import { Icon, Sidebar, SidebarItem } from 'vant'
// 引入Vuex
import { mapState } from 'vuex'
// 引入ClassList组件
import ClassList from '../../components/ClassList/ClassList'
export default {
  name: 'Classify',
  data() {
    return {
      activeKey: 0
      // cateListsdata: {}
    }
  },
  // 注册组件
  components: {
    ClassList,
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  async mounted() {
    await this.$store.dispatch('getClassify')
    // await this.$store.dispatch('getCateLists')

    this.goItem()
  },
  // 计算属性
  computed: {
    ...mapState({
      classify: state => state.classify.classify
      // cateLists: state => state.classify.cateLists
    })
  },
  methods: {
    goItem(path) {
      this.$nextTick(() => {
        if (this.$router.path !== path) {
          this.$router.push(path, () => {})
          /* // 获取当前左侧数据的id
          const id = +this.$route.query.categoryid
          // 获取右侧数据

          const cateListsdata = this.cateLists
          // 遍历数据，取出对应id的数据
          cateListsdata.forEach(data => {
            if (data.id === id) {
              this.cateListsdata = data
            }
          }) */
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.classifyBox
  width 100%
  height 100%
  font-size 16px
  .search
    height 44px
    width 100%
    box-sizing border-box
    padding 0 15px
    display flex
    flex-direction column
    justify-content center
    border-bottom 1px solid #EDEDED
    .search_outer
      height 28px
      width 100%
      background-color #EDEDED
      text-align center
      line-height 28px
      color #666
      font-size 14px
      border-radius 5px
      position relative
      .a_icon
        position absolute
        top 6px
      span
        padding-left 20px
  .classify_left_nav
    height 100%
    width 23%
    float left
    .nav_title
      height 45px
      text-align center
      line-height 10px
      border-right 1px solid #EDEDED
  .classify_right
    width 77%
    float right
    box-sizing border-box
    padding 15px
</style>
