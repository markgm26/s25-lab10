interface GameState {
  cells: Cell[];
  player: string;
  winner: string | null;
}


interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }