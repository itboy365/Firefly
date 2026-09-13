import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "gov",
		name: "国家政务",
		icon: "material-symbols:account-balance-outline-rounded",
		desc: "国家政务服务平台与办事入口",
		weight: 100,
		items: [
			{
				title: "国家政务服务平台",
				url: "http://gjzwfw.www.gov.cn",
				desc: "全国一体化在线政务服务平台总入口",
				weight: 10,
			},
			{
				title: "中国政府网",
				url: "https://www.gov.cn",
				desc: "国务院政策信息与政务动态",
				weight: 9,
			},
			{
				title: "国家社会保险公共服务平台",
				url: "https://si.12333.gov.cn",
				desc: "社保缴费记录与养老保险查询",
				weight: 8,
			},
			{
				title: "国家医保服务平台",
				url: "https://fuwu.nhsa.gov.cn",
				desc: "医保余额查询与异地就医备案",
				weight: 7,
			},
			{
				title: "交管12123",
				url: "https://gab.122.gov.cn",
				desc: "交通违法处理与车驾管业务",
				weight: 6,
			},
		],
	},
	{
		id: "life",
		name: "国家生活",
		icon: "material-symbols:home-outline-rounded",
		desc: "日常生活常用的官方服务",
		weight: 90,
		items: [
			{
				title: "中国天气网",
				url: "https://www.weather.com.cn",
				desc: "中国气象局官方天气预报",
				weight: 10,
			},
			{
				title: "网上国网",
				url: "https://www.95598.cn",
				desc: "国家电网电费查询与缴纳",
				weight: 9,
			},
			{
				title: "铁路12306",
				url: "https://www.12306.cn",
				desc: "火车票购票与车次查询",
				weight: 8,
			},
			{
				title: "学信网",
				url: "https://www.chsi.com.cn",
				desc: "学历学籍信息查询",
				weight: 7,
			},
		],
	},
	{
		id: "search",
		name: "搜索引擎",
		icon: "material-symbols:search-rounded",
		desc: "国内外常用搜索引擎",
		weight: 80,
		items: [
			{
				title: "百度",
				url: "https://www.baidu.com",
				desc: "国内最常用的中文搜索引擎",
				weight: 10,
			},
			{
				title: "必应",
				url: "https://cn.bing.com",
				desc: "微软出品的搜索引擎，国内可直接访问",
				weight: 9,
			},
			{
				title: "Google",
				url: "https://www.google.com",
				desc: "全球最大的搜索引擎",
				weight: 8,
			},
			{
				title: "DuckDuckGo",
				url: "https://duckduckgo.com",
				desc: "注重隐私保护的搜索引擎",
				weight: 7,
			},
		],
	},
];
