const container = document.getElementById('container');
const svg = document.getElementById('map');

// 状態管理
let scale = 1;
let translateX = 0;
let translateY = 0;

let isDragging = false;
let startMouseX = 0;
let startMouseY = 0;
let startTranslateX = 0;
let startTranslateY = 0;

function updateTransform() {
  svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// 拡大縮小
const MIN_SCALE = 1;
const MAX_SCALE = 36;
const ZOOM_FACTOR = 1.08;

container.addEventListener('wheel', (e) => {
  e.preventDefault();

  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const zoom = e.deltaY < 0 ? ZOOM_FACTOR : 1 / ZOOM_FACTOR;
  const nextScale = Math.min(Math.max(scale * zoom, MIN_SCALE), MAX_SCALE);

  if (nextScale === scale) return;

  translateX = mouseX - (mouseX - translateX) * (nextScale / scale);
  translateY = mouseY - (mouseY - translateY) * (nextScale / scale);
  scale = nextScale;

  updateTransform();
}, { passive: false });

// 移動
container.addEventListener('mousedown', (e) => {
  if (e.button !== 0) return;

  isDragging = true;
  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startTranslateX = translateX;
  startTranslateY = translateY;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  translateX = startTranslateX + (e.clientX - startMouseX);
  translateY = startTranslateY + (e.clientY - startMouseY);

  updateTransform();
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});
