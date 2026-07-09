const cases = [
  {
    title: "图书馆失窃案",
    desc: "学校图书馆夜间丢失了一台笔记本电脑。案发时间为晚上 9 点到 10 点之间，现场没有明显破坏痕迹。",
    suspects: [
      {
        name: "学生A",
        info: "晚上 9 点 20 分曾在图书馆自习，声称 9 点 40 分离开。"
      },
      {
        name: "管理员B",
        info: "负责图书馆钥匙管理，案发当晚最后一个离开。"
      },
      {
        name: "清洁员C",
        info: "晚上 9 点 50 分进入图书馆打扫，称没有看到异常。"
      }
    ],
    clues: [
      "监控显示管理员B在 9 点 55 分重新进入过图书馆。",
      "失窃电脑所在区域没有被撬开的痕迹。",
      "图书馆备用钥匙只有管理员B可以接触。",
      "学生A离开时背包很轻，清洁员C进入时手中只有清洁工具。"
    ],
    answer: "管理员B",
    reason: "本案关键在于现场没有破坏痕迹，说明嫌疑人很可能拥有正常进入权限。管理员B掌握备用钥匙，并且监控显示其在案发时段重新进入图书馆，因此嫌疑最大。"
  },
  {
    title: "实验室数据删除案",
    desc: "计算机实验室中，一个小组项目的重要代码文件被删除。删除时间为下午 5 点 10 分左右。",
    suspects: [
      {
        name: "组员A",
        info: "负责前端页面，下午 5 点前离开实验室。"
      },
      {
        name: "组员B",
        info: "负责后端逻辑，曾与组员A因代码风格发生争执。"
      },
      {
        name: "组员C",
        info: "负责文档整理，下午 5 点 20 分才到实验室。"
      }
    ],
    clues: [
      "电脑登录记录显示 5 点 08 分使用的是组员B账号。",
      "删除文件后，系统回收站被清空。",
      "组员B声称自己只是检查代码，没有进行删除操作。",
      "组员A离开时间早于删除时间，组员C到达时间晚于删除时间。"
    ],
    answer: "组员B",
    reason: "删除时间与组员B账号登录时间高度吻合，且删除后回收站被清空，说明行为具有明显目的性。其他两人时间线不匹配，因此组员B嫌疑最大。"
  },
  {
    title: "社团经费遗失案",
    desc: "学生社团活动结束后，装有活动经费的信封不见了。信封原本放在会议室桌子抽屉中。",
    suspects: [
      {
        name: "社长A",
        info: "知道经费存放位置，负责活动整体安排。"
      },
      {
        name: "干事B",
        info: "活动后独自返回会议室取海报。"
      },
      {
        name: "成员C",
        info: "活动结束后直接离开，并未返回会议室。"
      }
    ],
    clues: [
      "会议室门锁没有损坏。",
      "干事B返回会议室的时间正好是经费遗失前后。",
      "社长A虽然知道位置，但当时一直在操场收拾设备。",
      "成员C离开后出现在宿舍门禁记录中。"
    ],
    answer: "干事B",
    reason: "干事B在关键时间段独自返回会议室，并具备接触信封的机会。其他人虽然可能知道经费位置，但时间线或行动轨迹不符合，因此干事B最可疑。"
  },
  {
    title: "咖啡店手机调包案",
    desc: "一家咖啡店内，一名顾客发现自己的手机被调包。案发时，桌边曾有三个人短暂靠近。",
    suspects: [
      {
        name: "顾客A",
        info: "坐在旁边桌，曾借口询问充电器靠近过失主。"
      },
      {
        name: "服务员B",
        info: "负责清理桌面，案发前后一直在店内工作。"
      },
      {
        name: "外卖员C",
        info: "进入店内取餐，只停留了不到一分钟。"
      }
    ],
    clues: [
      "失主手机最后一次亮屏时间是顾客A靠近后的 2 分钟内。",
      "监控显示顾客A离开时手中多了一个黑色手机壳。",
      "服务员B清理桌面时手机已经不在原位置。",
      "外卖员C始终没有靠近失主桌面。"
    ],
    answer: "顾客A",
    reason: "顾客A有接近手机的机会，并且离开时手中出现与案件相关的手机壳。服务员B虽然接触桌面，但时间点已经在手机消失之后，外卖员C也没有靠近桌面，因此顾客A嫌疑最大。"
  }
];

let currentCase = null;

function loadRandomCase() {
  const randomIndex = Math.floor(Math.random() * cases.length);
  currentCase = cases[randomIndex];

  document.getElementById("caseTitle").innerText = currentCase.title;
  document.getElementById("caseDesc").innerText = currentCase.desc;

  const suspectList = document.getElementById("suspectList");
  suspectList.innerHTML = "";

  currentCase.suspects.forEach((suspect) => {
    const div = document.createElement("div");
    div.className = "suspect";
    div.innerHTML = `
      <strong>${suspect.name}</strong>
      <p>${suspect.info}</p>
    `;
    suspectList.appendChild(div);
  });

  const clueList = document.getElementById("clueList");
  clueList.innerHTML = "";

  currentCase.clues.forEach((clue) => {
    const li = document.createElement("li");
    li.innerText = clue;
    clueList.appendChild(li);
  });

  const answerSelect = document.getElementById("answerSelect");
  answerSelect.innerHTML = "";

  currentCase.suspects.forEach((suspect) => {
    const option = document.createElement("option");
    option.value = suspect.name;
    option.innerText = suspect.name;
    answerSelect.appendChild(option);
  });

  document.getElementById("resultBox").innerHTML = `
    <h3>AI 推理结果</h3>
    <p>请选择嫌疑人后，系统会生成推理分析。</p>
  `;
}

function checkAnswer() {
  if (!currentCase) {
    loadRandomCase();
    return;
  }

  const userAnswer = document.getElementById("answerSelect").value;
  const resultBox = document.getElementById("resultBox");

  if (userAnswer === currentCase.answer) {
    resultBox.innerHTML = `
      <h3>AI 推理结果</h3>
      <p class="correct">判断正确！你找到了最可疑的人物：${currentCase.answer}</p>
      <p><strong>推理分析：</strong>${currentCase.reason}</p>
      <p><strong>Agent 流程：</strong>系统先读取案件背景，再分析人物时间线与关键证据，最后根据线索匹配度生成判断结果。</p>
    `;
  } else {
    resultBox.innerHTML = `
      <h3>AI 推理结果</h3>
      <p class="wrong">判断错误。你选择的是：${userAnswer}</p>
      <p><strong>正确嫌疑人：</strong>${currentCase.answer}</p>
      <p><strong>推理分析：</strong>${currentCase.reason}</p>
      <p><strong>改进建议：</strong>推理时优先关注时间线、行动机会和关键证据是否相互吻合。</p>
    `;
  }
}

window.onload = loadRandomCase;
