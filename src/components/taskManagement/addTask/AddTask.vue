<template>
	<div class="addTask-box">
		<el-dialog title="新增任务" :visible.sync="dialogAdd">
			<div class="content-box">
				<div class="cancel-box" @click="closeAdd"><i class="el-dialog__close el-icon el-icon-close"></i></div>
				<el-form :model="addForm">
					<div class="list-item">
						<el-form-item class="has-two-item" label="任务名称：" label-width="120px" prop="taskName" :rules="[{ required: true, message: '任务名称不能为空' }]">
							<div class="list-item-content-box">
								<el-input type="taskName" v-model="addForm.taskName" autocomplete="off"></el-input>
							</div>
						</el-form-item>
						<el-form-item class="has-two-item" label="任务负责人：" label-width="120px">
							<el-button class="choose-active" type="primary" plain v-if="addForm.inCharge != ''" v-model="addForm.inCharge">{{ addForm.inCharge }}</el-button>
							<el-button type="primary" plain @click="choosePerson">选择人员</el-button>
						</el-form-item>
					</div>
					<div class="list-item">
						<el-form-item class="has-two-item" label="开始时间：" label-width="120px">
							<div class="list-item-content-box">
								<el-date-picker v-model="addForm.estimatedStartTime" type="datetime" placeholder="预计任务开始时间"></el-date-picker>
							</div>
						</el-form-item>
						<el-form-item class="has-two-item" label="预计结束时间：" label-width="120px">
							<div class="list-item-content-box">
								<el-date-picker v-model="addForm.estimatedEndTime" type="datetime" placeholder="预计任务结束时间"></el-date-picker>
							</div>
						</el-form-item>
					</div>
					<div class="list-item">
						<el-form-item
							class="has-two-item"
							label="任务类别："
							label-width="120px"
							prop="taskType"
							:rules="[{ required: true, message: '任务类别不能为空', trigger: 'change' }]"
						>
						<div class="list-item-content-box">
							<el-select v-model="addForm.taskType" placeholder="请选择任务类别">
								<el-option label="普通任务" value="puTong"></el-option>
								<el-option label="临时任务" value="liShi"></el-option>
							</el-select>
						</div>
						</el-form-item>
						<el-form-item class="has-two-item" label="巡检片区：" label-width="120px">
							<div class="list-item-content-box">
								<!-- <el-input type="inspectionArea" v-model="addForm.inspectionArea" autocomplete="off"></el-input> -->
								<el-button type="primary" plain @click="chooseArea">选择片区</el-button>
							</div>
						</el-form-item>
					</div>
					<el-form-item label="备注：" label-width="120px"><el-input type="textarea" :rows="3" v-model="addForm.remarks" autocomplete="off"></el-input></el-form-item>
				</el-form>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="closeAdd">取 消</el-button>
				<el-button type="primary" @click="closeAdd">确 定</el-button>
			</div>
		</el-dialog>

		<choose-people :dialogCharge="dialogCharge" @closeChoosePeople="closeChoosePeople" @checkedPerson="checkedPerson"></choose-people>
		<choose-area :dialogArea="dialogArea" @closeChooseArea="closeChooseArea" @checkedArea="checkedArea"></choose-area>
	</div>
</template>

<script>
import ChoosePeople from './ChoosePeople.vue';
import ChooseArea from './ChooseArea.vue';
export default {
	name: 'AddTask',
	props: ['dialogAdd'],
	components: {
		ChoosePeople,
		ChooseArea
	},
	data() {
		return {
			addForm: {
				taskName: '',
				inCharge: '测试人员',
				estimatedStartTime: '',
				estimatedEndTime: '',
				taskType: '',
				inspectionArea: '',
				remarks: ''
			},
			// 负责人弹窗状态
			dialogCharge: false,
			// 巡检片区弹窗状态
			dialogArea: false
		};
	},
	methods: {
		// 点击取消或者右上角的×关闭新增弹窗
		closeAdd() {
			let data = {
				dialogAdd: false,
				data: []
			};
			this.$emit('getAddData', data);
		},
		// 点击选择负责人按钮
		choosePerson() {
			this.dialogCharge = true;
		},
		// 关闭选择负责人弹窗
		closeChoosePeople(data) {
			this.dialogCharge = data.dialogCharge;
		},
		// 选择负责人弹窗选择了负责人并点击了确定按钮
		checkedPerson(data) {
			console.log(data);
			this.dialogCharge = data.dialogCharge;
			this.addForm.inCharge = data.name;
		},
		// 点击选择片区按钮
		chooseArea() {
			this.dialogArea = true
		},
		// 关闭选择片区弹窗
		closeChooseArea(data) {
			this.dialogArea = data.dialogArea;
		},
		// 选择片区弹窗选择了片区并点击了确定按钮
		checkedArea(data) {
			console.log(data);
			this.dialogArea = data.dialogArea;
			// this.addForm.inCharge = data.name;
		},
	}
};
</script>

<style scoped lang="scss">
@import '../../../styles/element-ui-new.css';

.addTask-box {
	.content-box {
		position: relative;

		.cancel-box {
			width: 20px;
			height: 20px;
			background: #4b77be;
			position: absolute;
			top: -42px;
			right: 0;
			z-index: 20;
			color: #ffffff;
			font-size: 20px;
		}

		.list-item {
			display: flex;
			justify-content: space-between;

			.has-two-item {
				width: 46%;

				.choose-active {
					color: #ffffff;
					background: #4b77be;
					border: none;
					padding: 7px 6px;
					cursor: auto;
				}
				
				.list-item-content-box {
					width: 220px;
				}
			}
		}
	}
}
</style>
