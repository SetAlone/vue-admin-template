<template>
  <div style="height: 100%; width: 100%">
    <el-row>
      <el-col :span="6">
        <div>
          <draggable :list="list" :component-data="getComponentData()" element="el-collapse" >
            <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
              <div>{{ e.description }}</div>
            </el-collapse-item>
          </draggable>
        </div>
      </el-col>
      <el-col :span="6">{{ list }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div>
          区域1
          <!-- 调用组件  -->
          <draggable
            v-model="list1"
            :options="options"
            element="ul"
            @choose="choose"
            @clone="clone"
            @start="start"
            @add="add"
            @remove="remove"
            @update="update"
            @filter="filter"
            @sort="sort"
            @end="end" >
            <li v-for="item in list1" :key="item.id" class="item">{{ item.name }}</li>
          </draggable>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          区域2
          <draggable
            v-model="list2"
            :options="options"
            element="ul">
            <li v-for="item in list2" :key="item.id" class="item">{{ item.name }}</li>
            <button slot="header" @click="addPeople">Add</button>
            <button slot="footer" @click="addPeople">Add</button>
          </draggable>
        </div>
      </el-col>
      <el-col :span="6">{{ list1 }}</el-col>
      <el-col :span="6">list{{ list2 }}</el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      count: 0,
      activeNames: '',
      options: {
        group: 'people', // 同一组的不同list可以相互拖动
        draggable: '.item',
        sort: true
      },
      list: [
        {
          id: 1,
          name: 'a',
          title: 'title1',
          description: 'description1'
        },
        {
          id: 2,
          title: 'title2',
          name: 'b',
          description: 'description2'
        },
        {
          id: 3,
          title: 'title3',
          name: 'c',
          description: 'description3'
        }],
      list1: [
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        }
      ],
      list2: [{
        id: 1,
        name: 'a'
      }],
      form: {
        supplier2: '',
        type: '',
        desc: '',
        input: ''
      },
      model: {
        rules: {
          name: { type: 'string', required: true, message: '必填字段', trigger: 'change' },
          input: { type: 'string', required: true, message: '必填字段', trigger: 'change' },
          supplier: { type: 'string', required: true, message: '必填字段', trigger: 'change' },
          goodstatus: { type: 'string', required: true, message: '必填字段', trigger: 'change' },
          'producedate.start': { type: 'string', required: true, message: '必填字段', trigger: 'change' },
          'expireddate.start': { type: 'string', required: true, message: '必填字段', trigger: 'change' }
        },
        tableData: [{
          input: '',
          name: '',
          supplier: '',
          goodstatus: '',
          producedate: {
            start: ''
          },
          expireddate: {
            start: ''
          }
        }, {
          input: '',
          name: '',
          supplier: '',
          goodstatus: '',
          producedate: {
            start: ''
          },
          expireddate: {
            start: ''
          }
        }]
      },
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      }
    }
  },
  methods: {
    handleChange() {
      console.log('changed')
    },
    inputChanged(value) {
      this.activeNames = value
      console.log('inputChanged')
    },
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      }
    },
    end() {
      console.log('end')
    },
    start() {
      console.log('start')
    },
    add() {
      console.log('add')
    },
    remove() {
      console.log('remove')
    },
    update() {
      console.log('update')
    },
    choose() {
      console.log('choose')
    },
    sort() {
      console.log('sort')
    },
    filter() {
      console.log('filter')
    },
    clone() {
      console.log('clone')
    },
    addPeople() {
      console.log('addPeople')
    }
  }
}
</script>
<style scoped>
  .item {

  }
</style>
