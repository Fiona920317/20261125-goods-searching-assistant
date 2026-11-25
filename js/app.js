const PRODUCTS = [
  ["Aero 無線耳罩耳機","青禾商城","3C 配件","耳機","降噪",1490,4.8,"headphones","#d4ded5","#537569"],
  ["Luma 日光護眼檯燈","日光百貨","居家生活","檯燈","可調亮度",890,4.7,"lamp","#f2e5c9","#c88848"],
  ["Trail 輕量防潑水後背包","盒子市集","通勤戶外","後背包","防潑水",1190,4.9,"bag","#e9dcd6","#9b5b49"],
  ["Dew 真空保溫瓶","青禾商城","通勤戶外","保溫瓶","可保溫",590,4.6,"bottle","#dee3ee","#61788f"],
  ["Pulse 輕巧無線耳機","盒子市集","3C 配件","耳機","輕量",790,4.5,"headphones","#e5dded","#75678e"],
  ["Halo 充電式閱讀檯燈","青禾商城","居家生活","檯燈","可充電",690,4.5,"lamp","#dce7dc","#63816a"],
  ["Metro 通勤電腦後背包","日光百貨","通勤戶外","後背包","電腦夾層",1390,4.7,"bag","#e5e2d6","#686c51"],
  ["Pebble 彈蓋輕量保溫瓶","盒子市集","通勤戶外","保溫瓶","輕量",450,4.4,"bottle","#eddfe3","#9f6574"],
  ["Quiet Pro 混合降噪耳機","日光百貨","3C 配件","耳機","降噪",2290,4.9,"headphones","#dce3ee","#455b80"],
  ["Mori 摺疊閱讀檯燈","盒子市集","居家生活","檯燈","可調亮度",1290,4.8,"lamp","#e9dfd2","#81624d"],
  ["Daypack 輕量後背包","青禾商城","通勤戶外","後背包","輕量",890,4.5,"bag","#d6e8e5","#3e7770"],
  ["Thermo 寬口不鏽鋼保溫瓶","日光百貨","通勤戶外","保溫瓶","可保溫",850,4.8,"bottle","#eee4ce","#988042"],
  ["Forge 日常桌上型主機","青禾商城","電腦設備","桌上型電腦","文書上網",11900,4.7,"desktop","#d9e3e2","#4a5d62"],
  ["Vista 文書電腦套裝","日光百貨","電腦設備","桌上型電腦","文書上網",14900,4.8,"bundle","#e4ded2","#5e6261"],
  ["Pocket 迷你桌上型主機","盒子市集","電腦設備","桌上型電腦","文書上網",9900,4.5,"desktop","#e4ddd6","#636068"],
  ["Nova 入門遊戲主機","盒子市集","電腦設備","桌上型電腦","遊戲",19900,4.7,"desktop","#ddddef","#494769"],
  ["Arc 遊戲電腦套裝","青禾商城","電腦設備","桌上型電腦","遊戲",25900,4.9,"bundle","#d8ddea","#414c66"],
  ["Vertex 遊戲桌上型主機","日光百貨","電腦設備","桌上型電腦","遊戲",22900,4.8,"desktop","#d8e3e8","#414f60"],
  ["Studio 剪輯創作主機","日光百貨","電腦設備","桌上型電腦","剪輯設計",28900,4.9,"desktop","#e7e0ef","#53506b"],
  ["Frame 剪輯電腦套裝","盒子市集","電腦設備","桌上型電腦","剪輯設計",31900,4.8,"bundle","#dce8dc","#415747"],
  ["Core 桌機主機板","青禾商城","電腦設備","電腦零件","主機板",2890,4.7,"part","#d7e6de","#487063"],
  ["Key 桌機鍵盤滑鼠組","盒子市集","電腦設備","電腦配件","鍵盤滑鼠",690,4.5,"keyboard","#e4e2ee","#66617d"]
].map(([name,store,category,kind,detail,price,rating,shape,background,color],id)=>({id,name,store,category,kind,detail,price,rating,shape,background,color}));

const DESKTOP_KIND = "桌上型電腦";
const KINDS = [...new Set(PRODUCTS.map(product=>product.kind))].filter(kind=>!["電腦零件","電腦配件"].includes(kind));
const KIND_TERMS = {
  桌上型電腦:["主機","桌機","桌上型電腦","桌上電腦","套裝電腦","電腦套裝","整機","desktop"],
  耳機:["耳機","headphone","earbuds"],
  檯燈:["檯燈","閱讀燈","書桌燈","桌燈","desk lamp"],
  後背包:["背包","雙肩包","書包","電腦包","backpack"],
  保溫瓶:["保溫瓶","保溫杯","水瓶","水壺","thermos"]
};
const DETAIL_TERMS = {
  文書上網:["文書","上網","作業","辦公","日常"],
  遊戲:["遊戲","電競","打電動"],
  剪輯設計:["剪輯","設計","修圖","繪圖"],
  降噪:["降噪","抗噪","隔音"],
  輕量:["輕量","輕便","輕巧","輕一點","越輕"],
  可調亮度:["可調亮度","調光","亮度可調","調整亮度","調亮度"],
  可充電:["可充電","充電式","充電"],
  防潑水:["防潑水","防水","擋雨"],
  電腦夾層:["電腦夾層","放筆電","裝筆電","放電腦","筆電"],
  可保溫:["可保溫","保暖","保熱","裝熱水","裝熱茶","保溫久"]
};
const NEED_QUESTIONS = {
  桌上型電腦:{question:"新電腦主要用來文書上網、玩遊戲，還是剪輯影片或做設計？",extra:["小空間擺放"]},
  耳機:{question:"挑耳機時，你最在意降低環境噪音、方便攜帶，還是其他功能？",extra:["通話清楚","長時間佩戴舒適"]},
  檯燈:{question:"這盞檯燈會在哪裡使用？你比較在意哪個功能？",extra:["自然柔光","不佔桌面"]},
  後背包:{question:"這個後背包要拿來做什麼？需要裝筆電、通勤防雨，還是想減輕負擔？",extra:["大容量收納"]},
  保溫瓶:{question:"你會帶保溫瓶裝熱飲，還是更在意攜帶和清洗？",extra:["防漏","寬口好清洗"]}
};
const PRODUCT_QUESTIONS = [
  {match:/^顯示卡$/, question:"這張顯示卡主要要用來做什麼？",options:["1080p 遊戲","1440p 遊戲","4K 遊戲","影片剪輯或 3D 製作"]},
  {match:/^記憶體$/, question:"你的主機板支援哪一種記憶體？",options:["DDR4","DDR5","先看兩種"]},
  {match:/SSD|固態硬碟/i, question:"你的電腦可以安裝哪一種固態硬碟？",options:["M.2 NVMe","2.5 吋 SATA","M.2 SATA","先看不同接頭"]},
  {match:/^主機板$/, question:"這張主機板要搭配哪一類處理器？",options:["Intel Core","AMD Ryzen","沿用舊處理器，型號待確認"]},
  {match:/^電源供應器$/, question:"你想找多少瓦數的電源供應器？",options:["550W","650W","750W","850W 以上"]},
  {match:/^散熱器$/, question:"希望主機用哪一種散熱方式？",options:["塔式風冷","下吹式風冷","一體式水冷"]},
  {match:/墨水匣|碳粉匣/, question:"你知道印表機的品牌或型號嗎？輸入型號能讓候選商品更貼近需求。",options:["原廠耗材","相容耗材","型號還不確定"]},
  {match:/咖啡機|義式機|coffee maker|espresso machine/i, question:"平常想用哪種方式泡咖啡？", options:["義式濃縮","美式滴濾","膠囊沖煮","全自動奶泡"]},
  {match:/折疊椅|摺疊椅|露營椅|camping chair/i, question:"這張椅子會帶去哪裡用？", options:["登山輕量攜帶","露營久坐","戶外野餐","陽台或居家使用"]},
  {match:/瑜珈墊|瑜伽墊|yoga mat/i, question:"使用這張墊子時，你最在意什麼？", options:["止滑穩定","加厚護膝","輕便攜帶","容易清潔"]},
  {match:/手機殼/,question:"手機是哪個型號？也可以先選想要的外殼特性。",options:["透明薄殼","防摔保護","磁吸支援","先確認手機型號"]},
  {match:/手機保護貼/,question:"保護貼要搭配哪個手機型號？也可以先選你重視的功能。",options:["清晰透光","防窺","霧面防指紋","先確認手機型號"]},
  {match:/手機充電器/,question:"你要充哪種裝置？也可以先選充電方式。",options:["USB-C 有線快充","無線充電","同時充多台裝置","先確認充電規格"]},
  {match:/手機|智慧型手機|smartphone|iphone/i, question:"換手機時，你最想改善什麼？", options:["拍照畫質","電池續航","遊戲效能","螢幕好閱讀"]},
  {match:/手錶|智慧錶|smartwatch/i, question:"你希望手錶主要幫你做什麼？", options:["記錄運動","查看通知","追蹤睡眠","長時間續航"]},
  {match:/吸塵器|掃地機器人|vacuum/i, question:"你主要想清理哪種環境？", options:["木地板或磁磚","地毯","寵物毛髮","床墊與沙發"]},
  {match:/行李箱|登機箱|suitcase|luggage/i, question:"這次主要想用在哪種旅程？", options:["短程登機","三到五天旅行","長途托運","重視耐撞"]},
  {match:/跑鞋|球鞋|運動鞋|running shoes/i, question:"你打算在哪種情況穿這雙鞋？", options:["日常步行","公路跑步","健身房訓練","戶外越野"]},
  {match:/相機|camera/i, question:"你打算主要拿相機拍什麼？", options:["旅行紀錄","人像照片","影片或短影音","運動與快速移動主體"]},
  {match:/鍵盤|keyboard/i, question:"你希望鍵盤主要適合哪種使用情境？", options:["安靜辦公","長時間打字","遊戲操作","外出攜帶"]},
  {match:/窗簾|遮光簾/,question:"你最希望窗簾改善什麼？",options:["睡眠遮光","白天保留採光","遮擋視線","方便拆洗"]},
  {match:/冰箱|冷凍櫃/,question:"你想放在哪裡使用，需要多大的容量？",options:["租屋小空間","一到兩人日常","家庭採買","專門冷凍備料"]},
  {match:/書桌|電腦桌|工作桌/,question:"這張桌子主要要放什麼？",options:["筆電與文具","雙螢幕與桌機","繪圖或手作","小空間收納"]},
  {match:/床墊|睡墊/,question:"你想先挑哪種睡感或使用方式？",options:["偏硬支撐","偏軟包覆","側睡減壓","可摺疊收納"]},
  {match:/雨傘|陽傘/,question:"你需要這把傘應付哪種情況？",options:["通勤放包包","大雨防風","晴雨兩用","兩人共撐"]},
  {match:/耳機套|耳墊/,question:"要搭配哪一款耳機？可直接輸入型號或先選耳墊材質。",options:["皮革類耳墊","布面耳墊","先確認原本的尺寸"]},
  {match:/鏡頭/,question:"這顆鏡頭主要想拍什麼？也可以補充相機接環。",options:["廣角風景","人像背景虛化","遠距離主體","微距特寫"]},
  {match:/拖把布|拖把頭|拖把.*(?:替換布|替換頭)/,question:"替換耗材要搭配哪種拖把？也可以直接輸入型號。",options:["平板拖把","旋轉拖把","噴水拖把"]},
  {match:/拖把/,question:"主要要清潔哪裡？",options:["磁磚或石材","木地板","浴室積水","毛髮多的空間"]},
  {match:/淨水濾[芯心]|(?:濾水壺|淨水器).*濾[芯心]/,question:"新濾芯要搭配哪一款淨水設備？可輸入型號或先選設備類型。",options:["濾水壺","水龍頭式","廚下式"]},
  {match:/淨水器|濾水壺/,question:"淨水設備想放在哪裡使用？",options:["桌上免安裝","裝在水龍頭","廚下收納"]},
  {match:/收納盒|收納箱|收納籃/,question:"你想用它收納什麼？也可以補充擺放空間的尺寸。",options:["衣物或棉被","文具小物","廚房用品","浴室用品"]},
  {match:/洗衣精|洗衣液|洗衣粉/,question:"洗衣時最想改善什麼？",options:["汗味或異味","油漬或頑垢","想要無香","希望低泡好沖洗"]},
  {match:/垃圾袋/,question:"垃圾袋要搭配哪個空間的垃圾桶？也可以輸入公升數。",options:["浴室小桶","廚房垃圾桶","客廳垃圾桶","大型分類桶"]},
  {match:/衛生紙|面紙|廚房紙巾/,question:"這次主要想在哪種情況使用？",options:["浴廁日常","擦臉或擤鼻涕","廚房吸油吸水","隨身攜帶"]},
  {match:/洗碗精|洗潔精/,question:"挑洗碗精時，你最在意什麼？",options:["重油污","好沖洗","無香料","可補充包"]},
  {match:/保鮮盒|便當盒/,question:"這個盒子主要用來做什麼？",options:["攜帶便當","冷凍分裝","微波加熱","冰箱堆疊收納"]},
  {match:/毛巾|浴巾/,question:"這條巾主要在哪裡用？",options:["洗臉或擦手","洗澡後擦身","運動擦汗","外出快乾收納"]},
  {match:/衣架|曬衣架/,question:"衣架主要用來晾什麼，或放在哪裡收納？",options:["襯衫或上衣","褲子與裙子","厚外套","小空間省位"]}
];
const PRODUCT_SCOPES = [
  {
    match:/拖把/,
    specific:/拖把布|拖把頭|替換布|替換頭|一支|一把|拖把本體/,
    question:"你要買一支拖把，還是替現有的拖把換布或換頭？",
    options:[
      {label:"拖把本體",item:"拖把",match:/本體|一支|一把/},
      {label:"拖把替換耗材",item:"拖把耗材",match:/耗材|替換|換布|換頭/,question:"你要找哪種替換耗材？",parts:["拖把布","拖把頭"]}
    ]
  },
  {
    match:/淨水器|濾水壺/,
    specific:/濾芯|濾心|一台|一個|本體/,
    question:"你要買淨水設備本體，還是替現有設備換濾芯？",
    options:[
      {label:"淨水設備本體",item:"淨水器",match:/本體|設備/},
      {label:"替換濾芯",item:"淨水濾芯",match:/濾芯|濾心|耗材/}
    ]
  },
  {
    match:/主機|桌機/,
    specific:/主機板|電源供應器|顯示卡|記憶體|散熱器|硬碟|SSD|鍵盤|滑鼠|整台|一台|整機|主機本體|電腦套裝|伺服器主機|遊戲機主機/i,
    question:"你要找整台主機，還是要換主機裡的零件？",
    options:[
      {label:"主機本體／整台電腦",item:DESKTOP_KIND,match:/本體|整台|整機|套裝/},
      {label:"主機零件",item:"主機零件",match:/零件|配件/,question:"你要找哪一種主機零件？",parts:["主機板","顯示卡","記憶體","電源供應器","SSD 固態硬碟","散熱器"]}
    ]
  },
  {
    match:/印表機|printer/i,
    specific:/印表機本體|整台|一台|墨水匣|碳粉匣|相片紙/i,
    question:"你需要一台印表機，還是要補墨水、碳粉等耗材？",
    options:[
      {label:"印表機本體",item:"印表機",match:/本體|整台|一台/,question:"你平常主要會印什麼？",choices:["黑白文件","彩色作業","照片","大量雙面文件"]},
      {label:"印表機耗材",item:"印表機耗材",match:/耗材|配件/,question:"你要找哪一種列印耗材？",parts:["墨水匣","碳粉匣","相片紙","影印紙"]}
    ]
  },
  {
    match:/相機|camera/i,
    specific:/機身|一台|鏡頭|相機電池|相機背帶|手機|筆電/i,
    question:"你想找的是相機機身，還是鏡頭、電池等配件？",
    options:[
      {label:"相機機身",item:"相機",match:/機身|本體|整台/},
      {label:"相機配件",item:"相機配件",match:/配件/,question:"你需要哪一種相機配件？",parts:["鏡頭","相機電池","相機背帶"]}
    ]
  },
  {
    match:/手機|smartphone/i,
    specific:/一支|一台|手機本體|手機殼|保護貼|充電器|耳機/i,
    question:"你想換一支手機，還是要幫目前的手機找配件？",
    options:[
      {label:"手機本體",item:"手機",match:/本體|整支|整台/},
      {label:"手機配件",item:"手機配件",match:/配件/,question:"你想找哪種手機配件？",parts:["手機殼","手機保護貼","手機充電器"]}
    ]
  }
];

const CATEGORIES = ["全部商品",...new Set(PRODUCTS.map(product=>product.category))];
const PAGE_SIZE = 8;
const SIMULATED_PAGE_SIZE = 10;
const PRODUCT_TITLE_PREFIXES = {
  桌上型電腦:{遊戲:"遊戲用",文書上網:"文書用",剪輯設計:"剪輯用",小空間擺放:"迷你"},
  耳機:{降噪:"降噪",輕量:"輕量",通話清楚:"通話用"},
  檯燈:{可調亮度:"可調光",可充電:"充電式",自然柔光:"柔光"},
  後背包:{防潑水:"防潑水",電腦夾層:"筆電用",輕量:"輕量",大容量收納:"大容量"},
  保溫瓶:{輕量:"輕量",防漏:"防漏",寬口好清洗:"寬口"},
  咖啡機:{義式濃縮:"義式",美式滴濾:"滴濾式",膠囊沖煮:"膠囊",全自動奶泡:"全自動奶泡"},
  洗衣精:{想要無香:"無香",希望低泡好沖洗:"低泡"},
  洗碗精:{無香料:"無香",重油污:"去油"},
  手機殼:{透明薄殼:"透明薄型",防摔保護:"防摔",磁吸支援:"磁吸"},
  窗簾:{睡眠遮光:"遮光",白天保留採光:"透光"},
  拖把:{木地板:"木地板用",浴室積水:"浴室用"}
};
const STORAGE_KEY = "pickwise-cart-v1";
const MONEY = new Intl.NumberFormat("zh-TW");
const cartProducts = new Map();
let simulationCount = 0;
const state = {query:"",kind:"",category:CATEGORIES[0],sort:"featured",detail:"",budget:Infinity,store:"",generated:[],step:"item",item:"",openItem:false,chatDetail:null,chatBudget:null,cart:ReadCart()};
const elements = Object.fromEntries([...document.querySelectorAll("[id]")].map(element=>[element.id,element]));

function FormatMoney(amount) {
  return "NT$ " + MONEY.format(amount);
}

function EscapeHtml(value) {
  const escapes = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
  return String(value).replace(/[&<>"']/g,character=>escapes[character]);
}

function FindProduct(id) {
  return PRODUCTS[id] ?? state.generated.find(product=>product.id===id) ?? cartProducts.get(id);
}

function ReadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const quantities = saved?.quantities ?? saved;
    for (const product of Array.isArray(saved?.products) ? saved.products : []) {
      if (/^sim-[a-z0-9]+-\d+$/.test(product?.id) && typeof product.name==="string" && typeof product.store==="string" && Number.isSafeInteger(product.price) && product.price>0) {
        cartProducts.set(product.id,product);
      }
    }
    return Object.fromEntries([...PRODUCTS,...cartProducts.values()]
      .filter(({id})=>Number.isSafeInteger(quantities?.[id]) && quantities[id]>0 && quantities[id]<=99)
      .map(({id})=>[id,quantities[id]]));
  } catch {
    return {};
  }
}

function UpdateCart(id,quantity) {
  if (quantity>0) {
    const product = FindProduct(id);
    if (!product) return;
    state.cart[id] = Math.min(quantity,99);
    if (String(id).startsWith("sim-")) cartProducts.set(id,product);
  } else {
    delete state.cart[id];
    cartProducts.delete(id);
  }
  try {
    localStorage.setItem(STORAGE_KEY,JSON.stringify({quantities:state.cart,products:[...cartProducts.values()]}));
  } catch {}
  RenderCart();
}

function RenderCart() {
  const activeAction = document.activeElement?.dataset.action;
  const activeId = document.activeElement?.dataset.id;
  const items = Object.keys(state.cart).map(FindProduct).filter(Boolean);
  elements["cart-count"].textContent = items.reduce((sum,{id})=>sum+state.cart[id],0);
  elements["cart-total"].textContent = FormatMoney(items.reduce((sum,{id,price})=>sum+price*state.cart[id],0));
  elements["cart-items"].innerHTML = items.length ? items.map(({id,name,price})=>
    '<div class="cart-row"><div><strong>'+EscapeHtml(name)+'</strong><small>'+FormatMoney(price)+'／件</small></div><div class="cart-actions">'+
    '<button data-id="'+id+'" data-action="minus" aria-label="減少 '+EscapeHtml(name)+' 的數量">−</button><span>'+state.cart[id]+'</span>'+
    '<button data-id="'+id+'" data-action="plus" aria-label="增加 '+EscapeHtml(name)+' 的數量">+</button>'+
    '<button data-id="'+id+'" data-action="remove" aria-label="刪除 '+EscapeHtml(name)+'">刪除</button></div></div>').join("") : '<p>購物車目前是空的。</p>';
  if (activeAction) {
    const replacement = [...elements["cart-items"].querySelectorAll("button")].find(button=>button.dataset.id===activeId && button.dataset.action===activeAction);
    (replacement ?? elements["cart"].querySelector("button")).focus();
  }
}

function Normalize(value) {
  return value.toLowerCase().trim().replaceAll("台燈","檯燈").replaceAll("水壺","保溫瓶");
}

function GetMatches() {
  const tokens = Normalize(state.kind ? "" : state.query).split(/\s+/).filter(Boolean);
  const source = state.kind==="generated" ? state.generated : PRODUCTS;
  const matches = source.filter(product=>
    (!state.store || product.store===state.store) &&
    (state.category===CATEGORIES[0] || product.category===state.category) &&
    (!state.kind || product.kind===state.kind) &&
    tokens.every(token=>Normalize([product.name,product.store,product.category,product.kind,product.detail].join(" ")).includes(token)) &&
    (!state.detail || product.detail===state.detail) && product.price<=state.budget);
  if (state.sort==="price") matches.sort((first,second)=>first.price-second.price);
  if (state.sort==="rating") matches.sort((first,second)=>second.rating-first.rating);
  return matches;
}

function RenderProducts() {
  const matches = GetMatches();
  const isFiltered = Boolean(state.query || state.detail || Number.isFinite(state.budget) || state.category!==CATEGORIES[0]);
  const pageSize = state.kind==="generated" ? SIMULATED_PAGE_SIZE : PAGE_SIZE;
  const featured = matches.slice(0,pageSize);
  elements["results-title"].textContent = state.store || (isFiltered ? "搜尋結果" : "精選好物");
  elements["store-back"].hidden = !state.store;
  elements["refresh-products"].hidden = state.kind!=="generated" || Boolean(state.store) || !matches.length;
  elements["result-count"].textContent = state.kind==="generated" ? "本次產生 "+matches.length+" 件虛擬商品"
    : matches.length>pageSize ? "顯示 "+featured.length+" 件重點商品・共 "+matches.length+" 件符合" : "共 "+matches.length+" 件商品";
  elements["active-filter"].hidden = !isFiltered;
  elements["filter-text"].textContent = [state.query,state.category===CATEGORIES[0]?"":state.category,state.detail,Number.isFinite(state.budget)?FormatMoney(state.budget)+" 以內":""].filter(Boolean).join(" · ");
  elements["empty-results"].hidden = featured.length>0;
  for (const button of elements.categories.querySelectorAll("button")) button.setAttribute("aria-pressed",String(button.dataset.category===state.category));
  elements["product-grid"].innerHTML = featured.map(({id,name,store,detail,rating,price})=>
    '<article class="product-card"><canvas class="product-art" data-product="'+id+'" width="400" height="280" role="img" aria-label="'+EscapeHtml(name)+'示意圖"></canvas>'+
    '<div class="product-info"><button type="button" class="store-name" data-store="'+EscapeHtml(store)+'" aria-label="查看虛擬店家 '+EscapeHtml(store)+'">'+EscapeHtml(store)+'</button><h3>'+EscapeHtml(name)+'</h3><p class="product-detail">'+EscapeHtml(detail)+'</p>'+
    '<p class="rating"><span aria-hidden="true">★</span> <span class="sr-only">評分</span>'+rating.toFixed(1)+' / 5</p>'+
    '<div class="product-bottom"><span class="price">'+FormatMoney(price)+'</span><button class="add-product" data-product="'+id+'" aria-label="將 '+EscapeHtml(name)+' 加入購物車">加入購物車</button></div></div></article>').join("");
  for (const canvas of elements["product-grid"].querySelectorAll("canvas")) DrawProduct(canvas,FindProduct(canvas.dataset.product));
  return matches.length;
}

function SetSearch(query,detail="",budget=Infinity,kind="") {
  Object.assign(state,{query,kind,detail,budget,store:"",category:CATEGORIES[0]});
  elements["search-input"].value = query;
  return RenderProducts();
}

function AddMessage(message,isUser=false) {
  const paragraph = document.createElement("p");
  paragraph.className = isUser ? "chat-message is-user" : "chat-message";
  paragraph.textContent = message;
  elements["chat-log"].append(paragraph);
  elements["chat-log"].scrollTop = elements["chat-log"].scrollHeight;
}

function ShowOptions(options) {
  const container = elements["chat-options"];
  container.className = ["scope","part","detail"].includes(state.step) ? "chat-options chat-option-grid" : "chat-options";
  container.replaceChildren(...options.map(option=>{
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    return button;
  }));
}

function AskItem() {
  Object.assign(state,{step:"item",item:"",scope:null,scopeOption:null,openItem:false,chatDetail:null,chatBudget:null});
  AddMessage("你想找什麼商品？");
  ShowOptions(KINDS);
}

function ExtractOpenItem(answer) {
  const text = answer.trim().replace(/[。！？!?]+$/g,"");
  const request = [...text.matchAll(/(?:想要買|想買|想找|想換|需要|要買|要找|購買|搜尋|找)(?:\s*)/g)].at(-1);
  const item = (request ? text.slice(request.index+request[0].length) : text)
    .replace(/^一(?:個|台|支|本|雙|件|組|把|款|張|條|套)\s*(?=.)/,"")
    .replace(/^(?:NT\$\s*|\$\s*)?[\d,，]+(?:\.\d+)?\s*(?:元|塊)?\s*(?:以內|以下|內|左右)的?\s*/i,"")
    .split(/[，,。；;！？!?]|(?:\s|^)(?:NT\$|\$)|預算|希望|最好|主要用來/)[0]
    .trim();
  if (!/[\p{L}\p{N}]/u.test(item) || /^(?:新的?|舊的?|一個|一台|東西|商品|你好|嗨|不知道|隨便|都可以)$/.test(item)) return "";
  return item.slice(0,36);
}

function DrawOptions(options,count) {
  const pool = [...options];
  return Array.from({length:count},()=>pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
}

function BuildProductName(item,detail,isBundle) {
  const prefix = Object.hasOwn(PRODUCT_TITLE_PREFIXES,item) && Object.hasOwn(PRODUCT_TITLE_PREFIXES[item],detail)
    ? PRODUCT_TITLE_PREFIXES[item][detail] : "";
  if (item===DESKTOP_KIND) {
    return prefix+(isBundle ? "電腦套裝" : "桌上型主機");
  }
  if (item==="記憶體" && /DDR[45]/i.test(detail)) {
    const generation = detail.match(/DDR[45]/i)[0].toUpperCase();
    const capacity = detail.match(/\d+\s*GB/i)?.[0].toUpperCase() ?? DrawOptions(["8GB","16GB","32GB"],1)[0];
    return generation+" "+capacity+" 桌機記憶體";
  }
  if (item==="SSD 固態硬碟" && /M\.2|SATA/i.test(detail)) return detail+" 固態硬碟";
  if (item==="電源供應器" && /^\d+W/i.test(detail)) return detail.replace(/\s*以上$/,"")+" 電源供應器";
  if ((item==="拖把布" || item==="拖把頭") && /^(平板|旋轉|噴水)拖把$/.test(detail)) {
    return detail+"替換"+item.slice(2);
  }
  if (item==="收納盒" && !detail) {
    const size = DrawOptions(["5 公升","8 公升","12 公升","20 公升","30 公升"],1)[0];
    return "附蓋收納盒（"+size+"）";
  }
  return prefix+item;
}

function ShowGeneratedProducts(item,detail,budget) {
  const reference = PRODUCTS.filter(product=>product.kind===item);
  const isDesktop = item===DESKTOP_KIND;
  const stores = DrawOptions(["晨光選物","森野商城","白盒市集","小島商店","星橋百貨","琥珀購物","東岸集貨","丘陵選物"],3);
  const palette = [["#dce7e0","#3f6657"],["#e5e0ed","#655579"],["#ece4d4","#7a6044"]];
  const signature = Date.now().toString(36)+Math.random().toString(36).slice(2)+(++simulationCount).toString(36);
  const budgetLimit = Number.isFinite(budget) ? Math.floor(budget) : Math.max(2400,...reference.map(product=>product.price));
  const ceiling = Math.min(budgetLimit,1000000000);
  const minimum = reference.length ? Math.floor(Math.min(...reference.map(product=>product.price))*.65) : 1;
  const count = PAGE_SIZE+Math.floor(Math.random()*(SIMULATED_PAGE_SIZE-PAGE_SIZE+1));
  state.generated = ceiling<minimum ? [] : Array.from({length:count},(_,index)=>{
    const storeIndex = index%stores.length;
    const [background,color] = palette[(storeIndex+Math.floor(index/3))%palette.length];
    const price = minimum+Math.floor((ceiling-minimum)*(.35+.65*Math.random()));
    const isBundle = isDesktop && index%3===1;
    const shape = isDesktop ? (isBundle ? "bundle" : "desktop") : reference[0]?.shape ?? "generated";
    return {
      id:"sim-"+signature+"-"+index,
      name:BuildProductName(item,detail,isBundle),
      store:stores[storeIndex],
      category:CATEGORIES[0],
      kind:"generated",
      detail:detail || "虛擬商品",
      price,
      rating:4+Math.floor(Math.random()*11)/10,
      shape,
      background,
      color,
      label:item
    };
  });
  return SetSearch(item,detail,budget,"generated");
}

function FindKinds(answer) {
  const keyword = Normalize(answer);
  const wholeComputer = keyword.replace(/主機板|伺服器主機|遊戲機主機|(?:主機|桌機)(?:的)?(?:零件|配件|顯示卡|記憶體|鍵盤|滑鼠|電源供應器)/g,"");
  return KINDS.filter(kind=>KIND_TERMS[kind].some(term=>(kind===DESKTOP_KIND ? wholeComputer : keyword).includes(term)));
}

function FindDetail(answer,details) {
  const keyword = Normalize(answer);
  if (/功能不限|功能都可以|用途不限|用途都可以|沒有特別需求/.test(keyword)) return "";
  return details.find(detail=>(DETAIL_TERMS[detail] ?? [detail]).some(term=>{
    const key = Normalize(term);
    return keyword.includes(key) && !["不用","不要","不需","不必","不想","不在意"].some(prefix=>keyword.includes(prefix+key));
  })) ?? null;
}

function FindBudget(answer,expectsBudget) {
  const text = answer.normalize("NFKC").replaceAll(",","");
  if (/預算不限|無預算限制|不設預算/.test(text) || (expectsBudget && /不限|都可以|不拘/.test(text))) return Infinity;
  if (expectsBudget && /^\s*[-−]/.test(text)) return null;
  const amountPattern = "(\\d+(?:\\.\\d+)?)(\\s*[kK千萬])?";
  const amount = text.match(new RegExp("(?:預算(?:上限)?|最多|不超過|不高於|低於|上限|NT\\$|\\$)[^\\d+−-]{0,8}"+amountPattern,"i"))
    ?? text.match(new RegExp(amountPattern+"\\s*(?:元|塊|以內|以下|內)"))
    ?? (expectsBudget ? text.match(new RegExp("^\\s*"+amountPattern+"\\s*$")) : null);
  if (!amount) return null;
  const unit = amount[2]?.trim().toLowerCase();
  const value = Number(amount[1]) * (unit==="萬"?10000:unit==="千"||unit==="k"?1000:1);
  return Number.isFinite(value) ? value : null;
}

function ContinueGuidedSearch() {
  if (state.chatDetail===null) {
    state.step = "detail";
    const {question,options} = GetProductNeeds(state.item);
    AddMessage(question+" 可以點選，也可以輸入自己的需求。");
    const skip = state.openItem ? "需求不限" : state.item===DESKTOP_KIND ? "用途不限" : "功能不限";
    ShowOptions([...options,skip]);
    return;
  }
  if (state.chatBudget===null) {
    state.step = "budget";
    const product = "「"+state.item+"」";
    const request = state.chatDetail ? "已記下「"+state.chatDetail+"」。" : "";
    AddMessage(request+product+"的預算上限是多少？可以輸入金額或選「預算不限」。");
    ShowOptions(state.openItem ? ["預算不限"] : state.item===DESKTOP_KIND ? ["NT$ 15,000","NT$ 25,000","NT$ 35,000","預算不限"] : ["NT$ 500","NT$ 1,000","NT$ 1,500","預算不限"]);
    return;
  }
  const count = ShowGeneratedProducts(state.item,state.chatDetail,state.chatBudget);
  state.step = "done";
  if (!count) AddMessage("目前沒有符合條件的虛擬商品。可以調高預算再試一次。");
  ShowOptions(["查看搜尋結果","重新開始"]);
}

function FindProductScope(answer) {
  return PRODUCT_SCOPES.find(scope=>scope.match.test(answer) && !scope.specific.test(answer));
}

function FindRequestedPart(answer) {
  if (/整台|一台|整機|主機本體|電腦套裝/.test(answer)) return "";
  return PRODUCT_SCOPES.flatMap(scope=>scope.options.flatMap(option=>option.parts ?? []))
    .find(part=>answer.includes(part) || (part==="SSD 固態硬碟" && /SSD|固態硬碟/i.test(answer))) ?? "";
}

function SelectProductScope(option) {
  state.scopeOption = option;
  state.item = option.item;
  state.openItem = !KINDS.includes(option.item);
  state.chatDetail = FindDetail(state.scopeRequest,GetProductNeeds(option.item).options);
  if (option.parts) {
    state.step = "part";
    AddMessage(option.question+" 可以點選，也可以輸入品名。");
    ShowOptions(option.parts);
    return;
  }
  ContinueGuidedSearch();
}

function GetProductNeeds(kind) {
  if (Object.hasOwn(NEED_QUESTIONS,kind)) {
    const {question,extra} = NEED_QUESTIONS[kind];
    return {
      question,
      options:[...new Set(PRODUCTS.filter(product=>product.kind===kind).map(product=>product.detail)),...extra]
    };
  }
  const scoped = PRODUCT_SCOPES.flatMap(scope=>scope.options).find(option=>option.item===kind && option.choices);
  if (scoped) return {question:scoped.question,options:scoped.choices};
  return PRODUCT_QUESTIONS.find(profile=>profile.match.test(kind)) ?? {
    question:"選購「"+kind+"」時，最想先滿足哪個需求？",
    options:["操作或使用方便","耐用好保養","容易攜帶或收納","價格實惠"]
  };
}

function HandleAnswer(answer) {
  if (!answer) return;
  if (/^(重新開始|重新搜尋|重來)$/.test(answer)) {
    AskItem();
    return;
  }
  if (state.step==="done" && answer==="查看搜尋結果") {
    ToggleHelper(false);
    elements["results-title"].scrollIntoView({block:"start"});
    elements["results-title"].focus({preventScroll:true});
    return;
  }
  AddMessage(answer,true);
  if (state.step==="item" || state.step==="done") {
    const part = FindRequestedPart(answer);
    const scope = FindProductScope(answer);
    state.scope = scope;
    state.scopeOption = null;
    if (scope) {
      state.scopeRequest = answer;
      state.chatBudget = FindBudget(answer,false);
      const option = scope.options.find(choice=>choice.match.test(answer));
      if (option) {
        SelectProductScope(option);
      } else {
        state.step = "scope";
        AddMessage(scope.question);
        ShowOptions(scope.options.map(choice=>choice.label));
      }
      return;
    }
    const kinds = part ? [] : FindKinds(answer);
    if (kinds.length>1) {
      state.step = "item";
      AddMessage("你提到了「"+kinds.join("」和「")+"」。這次想先找哪一種？");
      ShowOptions(kinds);
      return;
    }
    state.item = part || (kinds[0] ?? ExtractOpenItem(answer));
    if (!state.item) {
      AddMessage("請告訴我具體想找的商品，例如「瑜珈墊」或「露營用的折疊椅」。");
      ShowOptions(KINDS);
      return;
    }
    state.openItem = kinds.length===0;
    state.chatDetail = FindDetail(answer,GetProductNeeds(state.item).options);
    state.chatBudget = FindBudget(answer,false);
    AddMessage("我抓到你想找的是「"+state.item+"」。");
    ContinueGuidedSearch();
    return;
  }
  if (state.step==="scope") {
    const option = state.scope.options.find(choice=>choice.label===answer || choice.match.test(answer));
    if (!option) {
      AddMessage("請先選擇你要找的商品類型。");
      return;
    }
    state.chatBudget = FindBudget(answer,false) ?? state.chatBudget;
    SelectProductScope(option);
    return;
  }
  if (state.step==="part") {
    const item = state.scopeOption.parts.find(part=>answer.includes(part)) ?? ExtractOpenItem(answer);
    if (!item) {
      AddMessage("請選一個品項，或輸入你要找的零件或耗材名稱。");
      return;
    }
    state.item = item;
    state.chatDetail = FindDetail(answer,GetProductNeeds(item).options);
    state.chatBudget = FindBudget(answer,false) ?? state.chatBudget;
    ContinueGuidedSearch();
    return;
  }
  if (state.step==="detail") {
    const isFlexible = /^(需求不限|不限|都可以|沒有|不拘|先看兩種|先看不同接頭)$/.test(answer);
    const options = GetProductNeeds(state.item).options;
    const selected = state.openItem ? options.find(option=>Normalize(option)===Normalize(answer)) : FindDetail(answer,options);
    const detail = isFlexible ? "" : selected ?? answer.slice(0,100);
    state.chatDetail = detail;
    state.chatBudget = FindBudget(answer,false) ?? state.chatBudget;
  } else {
    const budget = FindBudget(answer,true);
    if (budget===null) {
      AddMessage("請輸入預算上限，例如 1200，或選「預算不限」。");
      return;
    }
    state.chatBudget = budget;
  }
  ContinueGuidedSearch();
}


function ToggleHelper(open) {
  elements.helper.hidden = !open;
  elements["toggle-helper"].setAttribute("aria-expanded",String(open));
  elements[open?"chat-input":"toggle-helper"].focus();
}

elements.categories.innerHTML = CATEGORIES.map(category=>'<button type="button" data-category="'+category+'">'+category+'</button>').join("");
elements.categories.addEventListener("click",event=>{
  const button = event.target.closest("[data-category]");
  if (!button) return;
  if (state.kind==="generated" && button.dataset.category!==CATEGORIES[0]) {
    Object.assign(state,{query:"",kind:"",detail:"",budget:Infinity});
    elements["search-input"].value = "";
  }
  state.store = "";
  state.category = button.dataset.category;
  RenderProducts();
});
elements["search-form"].addEventListener("submit",event=>{
  event.preventDefault();
  const query = elements["search-input"].value.trim();
  if (!query) {
    SetSearch("");
    return;
  }
  state.step = "item";
  ToggleHelper(true);
  HandleAnswer(query);
});
elements["clear-filter"].addEventListener("click",()=>SetSearch(""));
elements["refresh-products"].addEventListener("click",()=>{
  const count = ShowGeneratedProducts(state.query,state.detail,state.budget);
  elements["result-count"].textContent = "已刷新，顯示 "+count+" 件虛擬商品";
});
elements["store-back"].addEventListener("click",()=>{
  state.store = "";
  RenderProducts();
  elements["results-title"].focus();
});
elements.sort.addEventListener("change",()=>{
  state.sort = elements.sort.value;
  RenderProducts();
});
elements["product-grid"].addEventListener("click",event=>{
  const storeButton = event.target.closest("button[data-store]");
  if (storeButton) {
    state.store = storeButton.dataset.store;
    RenderProducts();
    elements["results-title"].focus();
    return;
  }
  const button = event.target.closest("button[data-product]");
  if (!button) return;
  const id = button.dataset.product;
  UpdateCart(id,(state.cart[id] ?? 0)+1);
  elements["cart-status"].textContent = FindProduct(id).name+"，購物車內有 "+state.cart[id]+" 件";
  button.textContent = "已加入";
  clearTimeout(button.resetLabel);
  button.resetLabel = setTimeout(()=>{button.textContent="加入購物車";},1000);
});
elements["open-cart"].addEventListener("click",()=>elements.cart.showModal());
elements["cart-items"].addEventListener("click",event=>{
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  const change = button.dataset.action;
  UpdateCart(id,change==="remove"?0:state.cart[id]+(change==="plus"?1:-1));
});
elements["toggle-helper"].addEventListener("click",()=>ToggleHelper(elements.helper.hidden));
elements["close-helper"].addEventListener("click",()=>ToggleHelper(false));
elements.helper.addEventListener("keydown",event=>{if(event.key==="Escape") ToggleHelper(false);});
elements["chat-options"].addEventListener("click",event=>{
  const button = event.target.closest("button");
  if (button) {
    HandleAnswer(button.textContent);
    if (!elements.helper.hidden) elements["chat-input"].focus();
  }
});
elements["chat-form"].addEventListener("submit",event=>{
  event.preventDefault();
  HandleAnswer(elements["chat-input"].value.trim());
  elements["chat-input"].value = "";
});
RenderProducts();
RenderCart();
AskItem();
