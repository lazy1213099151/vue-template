<template>
	<!-- #ifdef H5 || APP-PLUS || MP-WEIXIN -->
	<view class="nav-box" :style="{
		height: navStyle.navBarHeight + 'px',
		background: navBarBgc
	}">
	<!-- #endif -->

	<!-- #ifdef MP-TOUTIAO -->
	<view class="nav-box" :style="{
		height: 'auto',
		background: navBarBgc
	}">
	<!-- #endif -->
		<!-- #ifdef H5 || APP-PLUS || MP-WEIXIN -->
		<view class="bar_padding" :style="{
			height: navStyle.statusBarHeight + 1 + 'px',
		}"></view>
		<!-- #endif -->
		<!-- #ifdef MP-TOUTIAO -->
		<view class="bar_padding" :style="{
			height: '0px',
		}"></view>
		<!-- #endif -->
		<view class="bar_content" :style="{
			// #ifdef MP-TOUTIAO
			top: '0px',
			// #endif
			height: navStyle.navBarHeight - navStyle.statusBarHeight + 'px',
		}">
			<view class="left">
				<slot name="left" v-if="hasBack">
					<image class="close" :src="closeIcon" @click="back()" v-if="close" />
					<image class="back" :src="backIcon" @click="back()" v-else />
				</slot>
			</view>
			<view class="middle">
				<slot name="middle">
					<text class="title" :style="{
						fontSize: `${navStyle.realNavBarHeight * 0.4
							}px`,
					}">{{ title }}</text>
				</slot>
			</view>
			<view class="right"></view>
		</view>
	</view>
</template>
<script lang="ts">
// @ts-nocheck
import Vue from 'vue'
export default Vue.extend({
	props: {
		hasBack: {
			type: Boolean,
			default: true
		},
		close: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		},
		navBarBgc: {
			type: String,
			default: '#ffffff00'
		},
	},
	data() {
		return {
			followModalVisible: false,
			followTipVisible: false,
		}
	},
	methods: {
		back() {
			uni.navigateBack()
		},
	},
	computed: {
		navStyle() {
			// @ts-ignore
			return this.$store.state.navStyle.baseinfo
		},
		backIcon() {
			return require('@/assets/icon/back.png')
		},
		closeIcon() {
			return require('@/assets/icon/close_bold.svg')
		},
	}
})
</script>
<style lang="scss" scoped>
.nav-box {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	width: 750rpx;
}

.bar_padding {
	// position: fixed;
	// top: 0;
	// left: 0;
	// z-index: 999;
	// width: 750rpx;
}

.bar_content {
	// position: fixed;
	// left: 0;
	// z-index: 999;
	box-sizing: border-box;
	width: 100%;
	padding: 0 17px;
	position: relative;

	.left {
		position: absolute;
		top: 50%;
		left: 17px;
		transform: translateY(-50%);

		.back {
			display: block;
			width: 9px;
			height: 17px;
			padding: 6.5px 21px 6.5px 0;
			// position: absolute;
			// top: 50%;
			// left: -34rpx;
			// transform: translate(17px,-50%);
		}

		.close {
			display: block;
			width: 30px;
			height: 30px;
		}
	}

	.middle {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 100%;
		transform: translate(-50%, -50%);

		.title {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 16px;
		}
	}

	.right {
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);

		// #ifdef H5
		.h5-btn {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 100px;
			width: 176rpx;
			height: 64rpx;
			background-color: #FFFFFF;
			border: 1px solid rgba(151, 151, 151, 0.2);

			.icon {
				margin-right: 6rpx;
				width: 48rpx;
				height: 48rpx;
				border-radius: 50%;
				background: url('https://img.playlarp.com/c4a6e9b76cc5aae318c18c9085567136.png') no-repeat center / 48rpx;
			}

			.text {
				font-size: 24rpx;
				color: #202020;
			}

			.tip {
				position: absolute;
				top: 90rpx;
				right: 0;
				padding: 24rpx 22rpx;
				background-color: #464646;
				color: #fff;
				font-size: 24rpx;
				width: 366rpx;
				text-align: justify;
				box-shadow: 0px 4px 12px 0px rgba(72, 43, 82, 0.4);
				border-radius: 20rpx;

				&::before {
					content: "";
					position: absolute;
					top: -12px;
					right: 60rpx;
					border-top-color: transparent;
					border-right-color: transparent;
					border-left-color: transparent;
					border-bottom-color: #464646;
					border-width: 7px;
					border-style: solid;
					width: 0;
					height: 0;
				}
			}
		}

		// #endif
	}
}
</style>
