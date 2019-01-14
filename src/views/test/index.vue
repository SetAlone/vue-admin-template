<template>
  <div style="height: 100%; width: 100%">
    <el-row>
      <el-col :span="6">
        <el-button type="text" @click="open2">
          点击打开 Message Box
        </el-button>
      <span>{{ count }}</span></el-col>
      <el-col :span="12">
        <div v-bgb-block>
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
                    <el-button v-button-color size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form>
          </div>
        </div>
      </el-col>
      <el-col :span="6">xx3</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">xx1</el-col>
      <el-col :span="6">xx2</el-col>
      <el-col :span="6">xx3</el-col>
      <el-col :span="6">xx4</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
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
      }
    }
  },
  methods: {
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
    }
  }
}
</script>
