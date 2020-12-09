<template>
    <div class="project-detail">
        <ul class="detail-top">
            <li class="bg-color1" @click="toSubsisting">新项目设立登记</li>
            <li class="bg-color2">存续项目查看</li>
            <li class="bg-color3">已完结项目查看</li>
        </ul>
        <div class="detail-table">
                <div class="table-header">平台全盘统计</div>
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
                        <span>平台存量持有笔数：90</span>
                </div>
        </div>
        <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
        
    </div>
</template>

<script>
export default {
        methods:{
                toSubsisting(){
                         this.$router.push('/project/register')

                }
        }
};
</script>
<style scoped>
.detail-top{
        display: flex;
        margin: 30px 50px;
        justify-content: space-between;
        align-items: center;
        text-align: center;
}
.detail-top>li{
        width: 200px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
}
.detail-top>li.bg-color1{
        background-color: rgb(240, 202, 119);
}
.detail-top>li.bg-color2{
        background-color: rgb(146, 185, 237);
}
.detail-top>li.bg-color3{
       background-color: rgb(210, 210, 210);
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
.pagination{
        margin: 30px auto;
}
</style>