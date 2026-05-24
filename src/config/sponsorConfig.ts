import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "请我喝杯奶茶",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description:
		"写这些东西不图什么，但如果你觉得有点意思，可以请我喝杯奶茶。不请也没事，来了就好。",

	// 赞助用途说明
	usage:
		"在人山人海的互联网中，能在这里遇见你，也是一种缘分。如果你觉得还行，可以请我喝杯奶茶。不请也没关系，你来过，我就已经很开心了！",

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
			qrCode: "/assets/images/alipay.png",
			link: "",
			description: "使用 支付宝 扫码赞助",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/wechat.png",
			link: "",
			description: "使用 微信 扫码赞助",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		// 示例：已实名赞助者
		{
			name: "高达星",
			amount: "¥50",
			date: "2026-3-15",
		},

		// 示例：微信赞助者
		{
			name: "綦桐",
			amount: "¥100",
			date: "2025-12-13",
		},
	],
};
