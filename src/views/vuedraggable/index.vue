<template>
  <div style="height: 100%; width: 100%">
    <el-row>
      <el-col :span="6"><div>
        <draggable :list="list" :component-data="getComponentData()" element="el-collapse" >
          <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
            <div>{{ e.description }}</div>
          </el-collapse-item>
        </draggable>
      </div>
      </el-col>
      <el-col :span="6">xx4</el-col>
      <el-col :span="6">{{ list }}</el-col>
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
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.count++
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.count--
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    add() {
      console.log(this.form)
    },
    save() {
      this.$refs['form'].validate((valid, model) => {
        console.log(valid)
        console.log(model)
      })
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    }
  }
}
</script>
