<template>
  <div style="height: 100%; width: 100%">
    <el-row>
      <el-col :span="2">
        <el-button type="text" @click="open2">
          点击打开 Message Box
        </el-button>
      <span>{{ count }}</span></el-col>
      <el-col :span="12">
        <div >
          <div style="margin-top:10px;">
            <el-form ref="form" :rules="model.rules" :model="model">
              <!-- 表布局 -->
              <el-table
                :data="model.tableData"
                :default-sort = "{prop: 'date', order: 'descending'}"
                border
                style="width: 100%;"
              >
                <el-table-column
                  width="100px"
                  label="要求批次">
                  <template slot-scope="scope">
                    <el-form-item :prop="'tableData.' + scope.$index + '.input'" :rules="model.rules.name">
                      <el-input v-model="scope.row.input" style="width:80px" />
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column
                  width="180px"
                  label="要求供应商">
                  <template slot-scope="scope">
                    <el-form-item :prop="'tableData.' + scope.$index + '.supplier'" :rules="model.rules.supplier">
                      <el-select v-model="scope.row.supplier" style="width:130px" placeholder="请选择要求供应商"/>
                    </el-form-item>
                  </template>
                </el-table-column>
                <!-- <el-table-column
                  width="180px"
                  label="要求生产日期">
                  <template slot-scope="scope">
                    <el-form-item :prop="'tableData.' + scope.$index + '.producedate.start'" :rules="model.rules[&quot;producedate.start&quot;]">
                      <bingobox-datepicker :model="scope.row.producedate" type="date" />
                    </el-form-item>
                  </template>
                </el-table-column>-->
                <!--<el-table-column
                  width="180px"
                  label="要求有效期至">
                  <template slot-scope="scope">
                    <el-form-item :prop="'tableData.' + scope.$index + '.expireddate.start'" :rules="model.rules[&quot;expireddate.start&quot;]">
                      <bingobox-datepicker :model="scope.row.expireddate" type="date" />
                    </el-form-item>
                  </template>
                </el-table-column>-->
                <el-table-column
                  width="150px"
                  label="要求商品形态">
                  <template slot-scope="scope">
                    <el-form-item :prop="'tableData.' + scope.$index + '.goodstatus'" :rules="model.rules.goodstatus">
                      <el-select v-model="scope.row.goodstatus" style="width:130px" placeholder="请选择商品形态"/>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column
                  width="100px"
                  label="期待出库数量">
                  <template slot-scope="scope">
                    <el-form-item :prop="'tableData.' + scope.$index + '.name'" :rules="model.rules.name">
                      <el-input v-model="scope.row.name" style="width:80px" />
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作">
                  <template slot-scope="scope">
                    <el-button size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <el-form ref="dynamicValidateForm" :model="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div>
              <el-form-item
                :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]"
                prop="email"
                label="邮箱"
              >
                <el-input v-model="dynamicValidateForm.email"/>
              </el-form-item>
              <div>
                <el-form-item
                  v-for="(domain, index) in dynamicValidateForm.domains"
                  :label="'域名' + index"
                  :key="domain.key"
                  :prop="'domains.' + index + '.value'"
                  :rules="{
                    required: true, message: '域名不能为空', trigger: 'blur'
                  }"
                >
                  <el-input v-model="domain.value"/><el-button @click.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>
              </div>

              <el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                <el-button @click="addDomain">新增域名</el-button>
                <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
              </el-form-item>
            </div>
          </el-card>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><svg-icon icon-class="eye"/></el-col>
      <el-col :span="6"><div>
        <draggable :list="list" :component-data="getComponentData()" element="el-collapse" >
          <el-collapse-item v-for="e in list" :title="e.title" :name="e.name" :key="e.name">
            <div>{{ e.description }}</div>
          </el-collapse-item>
        </draggable>
      </div>
      </el-col>
      <el-col :span="6">{{ list }}</el-col>
      <el-col :span="6">xx4</el-col>
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
