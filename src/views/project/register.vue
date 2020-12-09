<template>
  <div class="components-container">
     <el-form class="basic-form" ref="basicForm" :model="basicForm" :rules="rules" label-width="150px">
            <el-form-item label="项目ID：">
                <span>12345</span>
            </el-form-item>
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="资管类型" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="发行主体" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="基金担保主体" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="登记备案机构" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="管理承销机构" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
             <el-form-item label="该项目结算账户" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="项目融资总额（万）" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="付息方式" prop="type">
              <el-select v-model="basicForm.type" placeholder="请选择">
                <el-option label="按自然季度" value="1"></el-option>
                <el-option label="到期还本付息" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目发行日" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="发行有效天数" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="最多可投资人数">
                <span>200</span>
            </el-form-item>
             <el-form-item label="附加备注" prop="remarks" style="width:80%">
              <el-input type="textarea" v-model="basicForm.remarks"></el-input>
            </el-form-item>
            <el-form-item label="投资人年利率设置：(最低)" label-width="200px">
                <ul class="default-input">
                  <li><input type="text" /><span>万≤投资额＜<input type="text" />万  年利率：<input type="text" />%</span></li>
                  <li><input type="text" /><span>万≤投资额＜<input type="text" />万  年利率：<input type="text" />%</span></li>       
                  <li><input type="text" /><span>万≤投资额＜<input type="text" />万  年利率：<input type="text" />%</span></li>       
                </ul>
            </el-form-item>
            <el-form-item style="width:100%;text-align:center">
              <el-button type="primary" @click="submitbasicForm('basicForm')">保存</el-button>
              <el-button @click="cancel">取消</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>
import { provinceAndCityData } from 'element-china-area-data'
export default {
  data() {
    return {
      activeName: 'first',
      basicForm: {
        name: '',
        type: '',
        sysMark: 'xxx.tencent.com',
        sysMarkType: '1',
        accountMark: '',
        region1: '',
        region1List: [],
        region2: '',
        region2List: [],
        concat: '',
        depart: '',
        tel: '',
        email: '',
        remarks: ''
      },
     
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      departType: '',
      departOptions: [{
        label: '我们',
        value: 1
      }],
      content: '',
      // 基本信息验证规则
      rules: {
        name: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择客户类型', trigger: 'change' }
        ],
        sysMark: [
          { required: true, message: '请输入系统标识', trigger: 'blur' }
        ],
        accountMark: [
          { required: true, message: '请输入账号标识', trigger: 'blur' }
        ],
        region1: [
          { required: true, message: '请选择地区', trigger: 'blur' }
        ],
        region2: [
          { required: true, message: '请选择城市', trigger: 'blur' }
        ],
        concat: [
          { max: 20, message: '20 字以内，非必填', trigger: 'blur' }
        ],
        depart: [
          { max: 20, message: '20 字以内，非必填', trigger: 'blur' }
        ],
        remarks: [
          { max: 200, message: '200 字以内，非必填', trigger: 'blur' }
        ]
      }
    }
  },
  // computed: {
  //   sysMark() {
  //     return this.basicForm.sysMark
  //   }
  // },
  watch: {
    'basicForm.sysMark': function(newVal, oldVal) {
      if(this.basicForm.sysMarkType === '2') {
        this.basicForm.accountMark = newVal
      }
    }
  },
  methods: {
    // 系统标识切换
    handleSysMarkType(val) {
      // 系统标识-标准
      if(val === '1') {
        this.basicForm.sysMark = '.tencent.com'
      } else if(val === '2') { // 系统标识-个性
        this.basicForm.sysMark = ''
      }
    },
    // 省-选择
    chooseProvince(val) {
      this.basicForm.region1 = val
      this.basicForm.region2 = ''
      let _provinceList = this.basicForm.region1List
      for(let provinceItem of _provinceList) {
        if(val === provinceItem.value) {
          this.basicForm.region2List = provinceItem.children
          break
        }
      }
    },
    // 城市-选择
    chooseCity(val) {
      this.basicForm.region2 = val
    },
    // 基本信息提交
    submitbasicForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let params = {
            province: this.basicForm.region1,
            city: this.basicForm.region2,
            customer_name: this.basicForm.name,
            customer_type: this.basicForm.type,
            sys_sign: this.basicForm.sysMark,
            sign_type: this.basicForm.sysMarkType,
            account_sign: this.basicForm.accountMark,
            contact: this.basicForm.concat,
            dept: this.basicForm.depart,
            phone: this.basicForm.tel,
            email: this.basicForm.email,
            remark: this.basicForm.remarks
          }
          console.log(params)
          // addOrg(_data).then( res => {
          //   console.log(res)
          // })
        } else {
          return false
        }
      })
    },
    // 取消提交
    cancel() {
      this.$refs['basicForm'].resetFields()
    },
  },
  created() {
    this.basicForm.region1List = provinceAndCityData
  }

}
</script>
<style scoped>
.basic-form{
  width:100%
}
.el-form-item{
  width: 40%;
  display: inline-block;
}
.sys-mark-wrapper .input-two{
      position:absolute;
      top:0;
      right: -110px;
      width: 100px
}
.default-input{
    display: flex;
    flex-direction: column;
}
.default-input input{
  width: 80px;
  height: 30px;
}
  
  
</style>
