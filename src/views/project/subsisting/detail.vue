<template>
  <div class="components-container">
    <div class="detail-info">
      <div v-for="(items,index) in baseInfo" :key="index">
        <span class="lable">{{items.lable}}</span><span class="value">{{items.value}}</span>
      </div>
      <div class="last">
        <span class="lable">投资人年利率：</span>
        <ul>
          <li>（最低）50万≤投资额＜100万；年利率：11%</li>
           <li>100万≤投资额＜300万；年利率：12%</li>
            <li>300万≤投资额＜500万；年利率：12.5%</li>
        </ul>
      </div>
      <el-button type="primary">修改备注信息</el-button>
    </div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>设立法务文件列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">增加文件</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>投资人签约文件列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">增加文件</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

 <div class="detail-table">
                <div class="table-header">该项目资金动态</div>
                <div class="table-center">
                        <span>平台项目总数：3</span>
                        <span>平台未完结个数：3</span>
                        <span>平台项目总额度（万元）10000</span>
                        <span>已买入额度（万元）8900</span>
                        <span>平台存量总额（万元）80000</span>
                </div>
                <div class="table-bottom">
                        <span>已还本总额（万元）1000</span>
                        <span>已付息总额（万元）223322</span>
                        <span>未付息总额（万元）7866</span>
                        <span>累计买入总笔数：180</span>
                        <!-- <span>平台存量持有笔数：90</span> -->
                </div>
        </div>
        <ul class="bottom-btn">
          <li @click="toInvestors">查看投资人清单</li>
          <li>认购录入</li>
          <li>付息-信息查看/录入</li>
          <li>兑付本金-信息查看/录入</li>
        </ul>
        <ul class="bottom-btn">
          <li>资产端结算信息入口</li>
        
        </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      baseInfo:[
        {lable:"项目ID：",value:"1231234"},
         {lable:"项目名称：",value:"中创和诚1号"},
         {lable:"项目状态：",value:"存续中/到期结算中/已完结"},
         {lable:"资管类型：",value:"非公开定向融资计划"},
         {lable:"发行主体：",value:"上海心施实业有限公司"},
         {lable:"基金担保主体：",value:"北京庄和房地产开发集团有限公司"},
         {lable:"登记备案机构：",value:"鹰潭市汇鲸资产交易中心"},
         {lable:"管理承销机构：",value:"中创汇智资本管理有限公司"},
         {lable:"该项目结算账户：",value:"上海心施实业有限公司；交行上海支行；10029598591857814"},
         {lable:"附加备注：",value:"该项目发行方为...发行交易结构为..."},

          {lable:"项目融资总额(万)",value:"1000"},
          {lable:"项目发行日期：",value:"2020-11-11"},
          {lable:"可售期限",value:"2020-11-11"},
          {lable:"最多可投资人数",value:"200"},
          {lable:"本项目投资期限",value:"365天"},
          {lable:"付息方式",value:"按自然季度"},
          {lable:"投资人年利率：",value:"该项目发行方为...发行交易结构为..."},

      ]
    }
  },
  mounted(){},
  methods:{
    toInvestors(){
      this.$router.push('/investors/detail')
    }
  }

}
</script>
<style scoped>
.detail-info{
  display: flex;
  flex-wrap: wrap;
  margin: 20px 30px;
}
.detail-info>div{
 margin: 10px ;
 width: calc(100% / 4);
}
.last{
  width:100%  !important;
 display: flex;
}
.last li{
  margin-bottom:10px;
}
.box-card{
  margin-bottom: 30px;
}
.box-card .item{
   margin-bottom: 18px;
}
.detail-table{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border:1px solid #ddd
}
.detail-table>div.table-header{
        height: 44px;
        background-color: rgb(221, 243, 241);
}
.detail-table>div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
}
.detail-table>div>span{
        width: 20%;
        height: 100%;
        line-height: 44px;
        text-align: center;
        border:1px solid #ddd
}
.detail-table .table-bottom{
  justify-content: flex-start;
}
.bottom-btn{
  width:1200px;
  margin:30px auto;
  display: flex;
   justify-content: space-between;
        align-items: center;
  

}
.bottom-btn>li{
  width:240px;
  height:35px;
  display: flex;
   justify-content: center;
        align-items: center;
  background-color: rgb(237, 146, 146);
  cursor: pointer;
}
</style>