/***********************************

> 应用名称：爱奇艺去除开屏广告
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-03-17
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 脚本功能：去除开屏广告
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
           本脚本仅供学习交流使用，禁止转载售卖
           ⛔⛔⛔
    
***********************************/

let obj = JSON.parse($response.body);

delete obj.adSlots, $done({ body: JSON.stringify(obj) });
