# 个人简历

一个基于 HTML5 语义化标签和 Flex 布局实现的单页个人简历，用来练习页面结构设计与样式布局。

---

## 一、项目简介

- 使用语义化标签搭建简历结构：`main`、`section`、`article`、`header`、`time`、`aside`、`address` 等。
- 使用 Flex 实现主内容区和侧边栏的两栏布局。
- 适合用来练习简历页面的结构划分和基础排版。

## 二、文件结构

- `2.html`：完整的简历页面（HTML + 内联 CSS）。

## 三、页面结构概览

```text
个人简历
│
├─ 主内容 (main)
│   ├─ 工作经历 (section.experience)
│   │   ├─ 工作1 (article)
│   │   └─ 工作2 (article)
│   │
│   ├─ 教育经历 (section.education)
│   │   └─ 学历1 (article)
│   │
│   └─ 获奖经历 (section.awards)
│       └─ 获奖1 (article)
│
└─ 侧边栏 (aside)
    ├─ 个人信息 (header)
    └─ 联系方式 (address)
```

## 四、语义化标签说明

- `main`：页面的主内容区域，只出现一次，包含所有和简历主体相关的内容。
- `section`：按照主题分块的内容区，例如工作经历、教育经历、获奖经历。
- `article`：一条可以独立看作完整内容的记录，如单个工作、单个学历或奖项。
- `header`：每条记录的头部区域，左侧是标题（职位/名称），右侧是时间。
- `time`：使用 `class="date"` + `datetime` 属性存放起止时间，展示如 `2022 - 至今`、`2022.03`。
- `aside`：与主内容相关的附属区域，这里用来展示头像和基本信息。
- `address`：用于存放联系信息（邮箱、电话、GitHub、QQ）。

## 五、布局与样式要点

- 整体容器 `.container` 使用 Flex 布局：
  - `main` 设置 `flex: 1`，占据主要显示区域。
  - `aside` 固定宽度 280px，使用深色背景突出侧边栏。
  - 通过 `order: -1` 将 `aside` 在视觉上显示在左侧。
- 各个 `section` 之间通过 `margin-bottom` 拉开间距，保证版面呼吸感。
- `main section article header` 使用 `display: flex; justify-content: space-between;` 实现标题和时间左右对齐。
- 联系方式通过 `.contact-item` 统一字号和行距，并利用 `::before` 伪元素添加简易图标：
  - 邮箱：`✉`
  - 电话：`☎`
  - 网站：`🌐`
  - QQ：`Q`

## 六、如何使用

1. 直接在浏览器中打开 `2.html` 即可查看简历页面效果。
2. 修改内容：
   - 在 `main` 中编辑具体的职位名称、公司名称、时间与描述文字。
   - 在 `section.education` 中修改学校、专业与时间。
   - 在 `section.awards` 中补充更多获奖记录（复制现有 `article` 即可）。
3. 修改个人信息：
   - 在 `aside > header` 中替换头像路径、姓名和头衔。
   - 在 `address` 中更新邮箱、电话、GitHub 链接和 QQ 号。

## 七、可以继续改进的方向

- 为小屏幕设备添加媒体查询，优化移动端展示效果。
- 抽离内联 CSS 到独立的样式文件，便于复用与维护。
- 把静态数据（经历、获奖等）抽象为 JSON，通过模板引擎或前端框架渲染，做成可配置的简历模板。