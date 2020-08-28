<template>
	<div class="task_management_pages">
		<div class="header-box">
			<div class="header-left">
				<el-button-group>
				  <el-button type="primary" plain>全部</el-button>
				  <el-button type="primary" plain>待完成</el-button>
				  <el-button type="primary" plain>进行中</el-button>
				  <el-button type="primary" plain>已超期</el-button>
				  <el-button type="primary" plain>暂停</el-button>
				  <el-button type="primary" plain>已完成</el-button>
				  <el-button type="primary" plain>已关闭</el-button>
				</el-button-group>
				<div class="search-box">
					<el-input
					    placeholder="请输入内容"
					    prefix-icon="el-icon-search"
					    v-model="searchWords">
					</el-input>
					<el-button class="search-button" type="primary">搜索</el-button>
				</div>
			</div>
			<div class="header-right">
				<el-button-group>
				  <el-button type="primary" plain>新增</el-button>
				  <el-button type="primary" plain>删除</el-button>
				  <el-button type="primary" plain>暂停</el-button>
				  <el-button type="primary" plain>导出</el-button>
				</el-button-group>
			</div>
		</div>
		<div class="content-box">
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'TaskManagement',
	data(){
		return {
			searchWords: ''
		}
	},
	methods: {
		
	},
	mounted() {
		
	}
};
</script>

<style scoped lang="scss">
	@import "../../styles/element-ui-new.css";
	
	.task_management_pages {
		padding: 10px;
		
		.header-box {
			display: flex;
			justify-content: space-between;
			
			.header-left {
				display: flex;
				
				.search-box {
					margin-left: 20px;
					display: flex;
					
					.search-button {
						margin-left: 5px;
					}
				}
			}
		}
	}
</style>
