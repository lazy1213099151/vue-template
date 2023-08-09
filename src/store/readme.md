# 全局状态管理 —— Vuex

当前项目全采用模块化状态管理，按模块进行划分store，所有的状态模块均放在 `src/store/modules` 中

## 状态模块的

### 创建
本文演示如何创建一个状态管理模块

首先，在 `src/modules/` 下创建一个文件 `demo.ts`，内容如下：
```ts
export default {
    // 开启命名空间
    namespaced: true,
    state: {
        title: '这是demo状态模块的数据'
    },
    // 这里就相当于计算属性
    getters: {
        ttt(state) {
            return state.title
        }
    },
    // 不能在这里写异步
    mutations: {
        test1(state) {
            state.title = '666'
            console.log('触发了test1')
        }
    },
    // 写异步的地方
    actions: {
        test2() {
            console.log('触发了test2')
        },
        test3({commit}) {
            // 触发本模块内的其它方法不需要在前面带上命名空间
            // 正确写法：
            commit('test1')
            // 错误写法：触发本模块内的东西不需要带命名空间
            // commit('users/test1')
        }
    }
}
```

### 注册
一个状态模块创建后，要注入到vuex中，注入的方式如下，打开 `src/modules/index.ts`，在 `modules` 字段中添加
```ts
import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        demo // 这是我们引入的子模块
    }
})
```

### 使用
上面我们创建好了一个demo的状态模块，并且也注入进vuex了，接下来演示如何使用，我们打开一个页面文件，在script中写
```vue
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	mounted() {
      // 可以从实例身上读取数据
      console.log(this.$store.state.demo)
      // 通过commit提交一个mutations
      this.$store.commit('demo/test1')
      // 触发一个dispatch
      this.$store.dispatch('demo/test2')
    }
});
</script>
```

### 辅助函数
Vuex内置了一些辅助函数我们使用，下面演示一下如何使用
```vue
<script lang="ts">
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default Vue.extend({
	mounted() {
      // 读取getter中的ttt
      console.log(this.ttt)
      // 直接调用mutations中的test1方法
      this.test1()
      // 直接调用actions中的test1方法
      this.test2()
    },
    methods: {
      ...mapMutations('demo', ['test1']),
      ...mapActions('demo', ['test2', 'test3']),
    },
  computed: {
    ...mapGetters('demo', ['ttt']),
  }
});
</script>
```
