// OUR GOALS 配對活動：共用資料（學員頁與講師頁都會載入）
// 正確答案：第 i 張圖配第 i 個文字
const GOALS = [
  '融合教育的\n生態環境',
  '成為奉獻的giver',
  '開心學習\n感受生命悸動',
  '自由書寫\n享受閱讀',
  '兩性平權\n讓社會更和諧',
  '灌溉知識\n轉化學習技能',
  '開啟生命亮點',
  '突破限制\n提昇學習曲線',
  '拓展生活經驗\n連結點線面',
  '對未來的日子\n充滿想像',
  '透過走讀\n親近社區',
  '愛無限大',
  '用愛的心和眼\n看待世界',
  '悠遊自在的\n生活',
  '感受生命\n與四季變化',
  '傾聽孩子的\n聲音',
  '親師生\n正向互動循環',
].map((label, i) => ({ n: i + 1, label, img: 'img/goals/' + String(i + 1).padStart(2, '0') + '.jpg' }));

const ROOM_PREFIX = 'yuwen-nutn-goals-';

// 預設使用 PeerJS 免費公用伺服器；網址加上 ?peerhost=... 可改用自架伺服器（測試用）
function peerOptions() {
  const q = new URLSearchParams(location.search);
  const host = q.get('peerhost');
  const base = { debug: 0 };
  if (!host) return base;
  return Object.assign(base, {
    host, port: +(q.get('peerport') || 9000), path: q.get('peerpath') || '/',
    secure: q.get('peersecure') === '1',
  });
}

function isAllCorrect(ans) {
  return Array.isArray(ans) && ans.length === GOALS.length && ans.every((v, i) => v === i);
}
