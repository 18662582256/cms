<template>
  <div class="components-container">
    <div class="subsisting-from">
       <el-form ref="form" label-width="120px">
            <el-form-item label="项目名称">
              <el-input v-model="query.projectName"></el-input>
        </el-form-item>
        <el-form-item label="发行人">
              <el-input v-model="query.issuer"></el-input>
        </el-form-item>
        <el-form-item label="项目状态">
              <el-select v-model="query.projectStatus" placeholder="请选择">
                <el-option label="按自然季度" value="1"></el-option>
                <el-option label="到期还本付息" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="设立时间区间">
              <el-date-picker
                v-model="query.time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
             <el-button type="primary">搜索</el-button>
            </el-form-item>
       </el-form>
    </div>
    <div class="subsisting-table">
      <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="项目ID"></el-table-column>
      <el-table-column prop="projectName" label="项目名称"></el-table-column>
      <el-table-column prop="total" label="总额（万）"></el-table-column>
      <el-table-column prop="buy" label="已买入额（万）"></el-table-column>
      <el-table-column prop="surplus" label="已买入笔数"></el-table-column>
      <el-table-column prop="address" label="剩余额度（万）"></el-table-column>
      <el-table-column prop="time" label="可买入期限"></el-table-column>
      <el-table-column prop="issuer" label="发行人"></el-table-column>
      <el-table-column prop="projectStatus" label="项目状态"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <span @click="handleEdit(scope.$index, scope.row)" style="color:#409EFF">查看</span>
      </template>
    </el-table-column>
    </el-table>
    </div>
    <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      query:{
        projectName:"",
        issuer:"",
        projectStatus:"",
        time:"",
        startTime:"",
        endTime:""
      },
      tableData:[{
          id: '12345',
          projectName: '中创和诚1号',
          total: '10000',
          buy:"100",
          surplus:"101",
          time:"2016-05-02",
          issuer:"某某某有限公司",
          projectStatus:"存续中"

        }]
    }
  },
  methods:{
    handleEdit(){
        this.$router.push('/detail')
    }
  }

}
</script>

<style scoped>
.el-form-item{
  width: 30%;
  display: inline-block;
}
.pagination{
  margin-top: 30px;
}
</style>