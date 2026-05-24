import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "请我喝杯奶茶",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description:
		"写这些东西不图什么，但如果你觉得有点意思，可以请我喝杯奶茶。不请也没事，来了就好。",

	// 赞助用途说明
	usage:
		"写点想说的，写点想写的小心思。如果偶尔有一两句说进了你心里，可以请我喝杯奶茶，就当是隔着屏幕，分享一份开心。",

	// 是否显示赞助者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/sponsor/alipay.png",
			link: "",
			description: "使用 支付宝 扫码赞助",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.png",
			link: "",
			description: "使用 微信 扫码赞助",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		// 示例：已实名赞助者
		{
			name: "夏叶",
			amount: "¥50",
			date: "2026-3-15",
		},

		// 示例：匿名赞助者
		{
			name: "匿名用户",
			amount: "¥20",
			date: "2025-12-13",
		},
	],
};