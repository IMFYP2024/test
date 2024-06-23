<template>
  <div>
    <div v-if="!isComplete">
      <div id="board">
        <img
          v-for="tile in boardTiles"
          :src="tile.src"
          :key="tile.key"
          :alt="tile.alt"
          @touchstart="onTouchStart"
        />
      </div>
      <h2 style="text-align: center;">Turns: <span>{{ turns }}</span></h2>
      <div id="pieces">
        <img
          v-for="piece in pieces"
          :src="piece.src"
          :key="piece.key"
          :alt="piece.alt"
          @touchstart="onTouchStart"
        />
      </div>
      <div class="center-content">
        <UButton color="white" variant="solid" @click="istoggleon = !istoggleon">Tips</UButton>
        <p v-show="istoggleon">點擊下方的照片與上方的照片即可交換照片，完成拼圖後會有神秘力量</p>
      </div>
    </div>
    <div v-if="isComplete" class="container">
      <img src="/Images/puzzle.png" class="card-img" @click="istoggle = !istoggle">
    </div>
    <div>
      <p v-show="istoggle">位於市中心的天際大樓是本市最具代表性的現代建築之一，高達75層。這棟大樓由著名建築師李明設計，融合了先進的科技與環保理念。外立面採用了全玻璃幕牆設計，不僅提供了卓越的景觀視野，還能有效節能。大樓內部設有豪華辦公室、高級公寓、商場和餐廳，提供一站式的便利生活。頂樓有一個觀景台，可以360度俯瞰整個城市的壯麗景色。地下部分則設有充足的停車空間和便捷的交通接駁系統。天際大樓不僅是商業活動的中心，也成為市民和遊客的熱門打卡地，充分展示了都市繁榮與創新的魅力。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const rows = 3;
const columns = 4;

const istoggle = ref(false);
const istoggleon = ref(false);
const currTile = ref(null);
const otherTile = ref(null);
const boardTiles = ref([]);
const pieces = ref([]);
const turns = ref(0);
const isComplete = ref(false);

const initializeBoard = () => {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const tile = { src: "/Images/blank.jpg", key: `tile-${r}-${c}`, alt: `Tile ${r * columns + c + 1}` };
      if ((r === 0 && c === 0) || (r === 2 && c === 2)) {
        tile.src = `/Images/${1 + r * columns + c}.png`;
      }
      boardTiles.value.push(tile);
    }
  }
};

const initializePieces = () => {
  const piecesArray = [];
  for (let i = 2; i <= rows * columns; i++) {
    if (i === 1 || i === 11) {
      continue;
    }
    const piece = { src: `/Images/${i}.png`, key: `piece-${i}`, alt: `Piece ${i}` };
    piecesArray.push(piece);
  }

  piecesArray.reverse();

  for (let i = 0; i < piecesArray.length; i++) {
    const j = Math.floor(Math.random() * piecesArray.length);
    [piecesArray[i], piecesArray[j]] = [piecesArray[j], piecesArray[i]];
  }

  pieces.value = piecesArray;
};

const onTouchStart = (event) => {
  if (!currTile.value) {
    currTile.value = event.target;
  } else {
    otherTile.value = event.target;
    if (currTile.value !== otherTile.value) {
      swapTiles();
    }
  }
};


const swapTiles = () => {
  const tempSrc = currTile.value.src;
  currTile.value.src = otherTile.value.src;
  otherTile.value.src = tempSrc;

  currTile.value = null;
  otherTile.value = null;

  turns.value += 1;
  checkPuzzleCompletion();
};

const checkPuzzleCompletion = () => {
  const expectedOrder = [];
  for (let i = 1; i <= rows * columns; i++) {
    expectedOrder.push(`${i}.png`);
  }

  console.log('Expected Order:', expectedOrder);
  console.log('Board:' ,board);
  isComplete.value = expectedOrder.every((src, index) => {
    const imgElement = document.querySelector(`#board img:nth-child(${index + 1})`);
    if (imgElement) {
      
      const boardFileName = imgElement.src.split('/').pop();
      return src === boardFileName;
    } else {
      return false; 
    }
  });
  
};


  if (isComplete.value) {
    console.log('Puzzle completed!');
  }





onMounted(() => {
  initializeBoard();
  initializePieces();
});
</script>

<style scoped>

#board {
  width: 350px;
  height: 260px;
  border: 2px solid lightskyblue;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

#board img {
  width: 85px;
  height: 85px;
  border: 0.5px solid lightblue;
}

#pieces {
  width: auto;
  height: auto;
  border: 2px solid lightskyblue;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

#pieces img {
  width: 85px;
  height: 85px;
  border: 0.5px solid lightblue;
}

.center-content {
  text-align: center;
  margin-top: 20px;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s forwards;
    perspective: 100%;
    height: 100%;
}
.card-img{
  border-radius: 10px;
  width: 100%;
  height: auto;
  animation: fadeIn 1s forwards;
  transition: all .15s ease;
  transform: translateY(20px) scale(1);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
}
.card-img:hover{
  transform: translateY(40px) scale(1.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
p {
    font-size: 1.1em;
    line-height: 1.8;
    color: #444;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeIn 3s forwards;
}

p:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}


@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


</style>
