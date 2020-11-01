import PlayerImage from "../assets/player_1.png";
import Brick_1Image from "../assets/brick_1.png";
import Brick_2Image from "../assets/brick_2.png";
import Brick_3Image from "../assets/brick_3.png";
import Brick_4Image from "../assets/brick_4.png";
import Stone_1Image from "../assets/stone_1.png";
import Stone_2Image from "../assets/stone_2.png";
import Stone_3Image from "../assets/stone_3.png";
import Stone_4Image from "../assets/stone_4.png";
import Tree_1Image from "../assets/tree_1.png";
import Tree_2Image from "../assets/tree_2.png";
import Tree_3Image from "../assets/tree_3.png";
import Tree_4Image from "../assets/tree_4.png";
import BaseImage from "../assets/base.png";
import BaseDestroyedImage from "../assets/base_destroyed.png";
import Water_1Image from "../assets/water_1.png";
import Water_2Image from "../assets/water_2.png";
import Water_3Image from "../assets/water_3.png";
import Water_4Image from "../assets/water_4.png";
import AITank_1Image from "../assets/ai_tank_1.png";
import AITank_2Image from "../assets/ai_tank_2.png";
import AITank_3Image from "../assets/ai_tank_3.png";
import AITank_4Image from "../assets/ai_tank_4.png";
import AITank_5Image from "../assets/ai_tank_5.png";
import AITank_6Image from "../assets/ai_tank_6.png";
import AITank_7Image from "../assets/ai_tank_7.png";
import ExplosionSmall_1Image from "../assets/explosion_small_1.png";
import ExplosionSmall_2Image from "../assets/explosion_small_2.png";
import ExplosionSmall_3Image from "../assets/explosion_small_3.png";
import ExplosionBig_1Image from "../assets/explosion_big_1.png";
import ExplosionBig_2Image from "../assets/explosion_big_2.png";

export interface Sprite {
  file: string;
  img?: HTMLImageElement;
}

interface Sprites {
  [key: string]: Sprite;
}

export const SPRITES: Sprites = {
  player_1: {
    file: PlayerImage,
  },
  brick_1: {
    file: Brick_1Image,
  },
  brick_2: {
    file: Brick_2Image,
  },
  brick_3: {
    file: Brick_3Image,
  },
  brick_4: {
    file: Brick_4Image,
  },
  stone_1: {
    file: Stone_1Image,
  },
  stone_2: {
    file: Stone_2Image,
  },
  stone_3: {
    file: Stone_3Image,
  },
  stone_4: {
    file: Stone_4Image,
  },
  tree_1: {
    file: Tree_1Image,
  },
  tree_2: {
    file: Tree_2Image,
  },
  tree_3: {
    file: Tree_3Image,
  },
  tree_4: {
    file: Tree_4Image,
  },
  water_1: {
    file: Water_1Image,
  },
  water_2: {
    file: Water_2Image,
  },
  water_3: {
    file: Water_3Image,
  },
  water_4: {
    file: Water_4Image,
  },
  ai_tank_1: {
    file: AITank_1Image,
  },
  ai_tank_2: {
    file: AITank_2Image,
  },
  ai_tank_3: {
    file: AITank_3Image,
  },
  ai_tank_4: {
    file: AITank_4Image,
  },
  ai_tank_5: {
    file: AITank_5Image,
  },
  ai_tank_6: {
    file: AITank_6Image,
  },
  ai_tank_7: {
    file: AITank_7Image,
  },
  base: {
    file: BaseImage,
  },
  base_destroyed: {
    file: BaseDestroyedImage,
  },
  explosion_small_1: {
    file: ExplosionSmall_1Image,
  },
  explosion_small_2: {
    file: ExplosionSmall_2Image,
  },
  explosion_small_3: {
    file: ExplosionSmall_3Image,
  },
  explosion_big_1: {
    file: ExplosionBig_1Image,
  },
  explosion_big_2: {
    file: ExplosionBig_2Image,
  },
};

export function preloadAssets(): Promise<void[]> {
  const promises = Object.keys(SPRITES).map(
    (key) =>
      new Promise<void>((res) => {
        const img = new Image();
        img.onload = function () {
          SPRITES[key].img = img;
          res();
        };
        img.src = SPRITES[key].file;
      })
  );
  return Promise.all(promises);
}
