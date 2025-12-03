// 預設顯示 Day 1 的內容
document.addEventListener('DOMContentLoaded', function() {
    showDay('day1');
});

function showDay(dayId) {
    // 1. 隱藏所有行程內容
    const contents = document.querySelectorAll('.day-schedule-content');
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    // 2. 顯示被點擊的內容
    const selectedContent = document.getElementById(dayId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    // 3. 更新側邊欄按鈕的 active 狀態
    const buttons = document.querySelectorAll('.nav-day-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 找到對應的按鈕並加上 active 類別
    const activeBtn = document.querySelector(`[onclick="showDay('${dayId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}