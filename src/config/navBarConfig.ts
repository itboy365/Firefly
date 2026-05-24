import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: (NavBarLink | LinkPreset)[] = [
		// 主页
		LinkPreset.Home,

		// 时光 (手动重写，替换掉 LinkPreset.Archive)
		{
			name: "时光",
			url: "/archive/",
			icon: "material-symbols:archive",
		},
	];

	// 根据配置决定是否添加友链，在siteConfig关闭pages.friends时导航栏不显示友链
	if (siteConfig.pages.friends) {
		links.push({
			name: "友链",
			url: "/friends/",
			icon: "material-symbols:link",
		});
	}

	// 根据配置决定是否添加留言板，在siteConfig关闭pages.guestbook时导航栏不显示留言板
	if (siteConfig.pages.guestbook) {
		links.push({
			name: "留言",
			url: "/guestbook/",
			icon: "material-symbols:chat",
		});
	}

	// 根据配置决定是否添加打赏，在siteConfig关闭pages.sponsor时导航栏不显示打赏
	if (siteConfig.pages.sponsor) {
		links.push({
			name: "打赏",
			url: "/sponsor/",
			icon: "material-symbols:coffee",
		});
	}

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			// 关于页面
			LinkPreset.About,
		],
	});

	// 指路 (自定义导航栏链接)
	links.push({
		name: "指路",
		url: "/links/",
		icon: "material-symbols:link",

		// 子菜单
		children: [
			{
				name: "ITboy主页",
				url: "https://itboy.pw",
				external: true,
				icon: "material-symbols:home",
			},
			{
				name: "权芯365主页",
				url: "https://www.quanxin365.cn",
				external: true,
				icon: "material-symbols:language",
			},
		],
	});

	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
