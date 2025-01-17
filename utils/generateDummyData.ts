export interface Player {
  id: string;
  name: string;
}

export interface Team {
  name: string;
  players: Player[];
}

export function generateDummyData(): Team[] {
  return Array.from({ length: 10 }, (_, i) => {
    const teamName = `Team ${String.fromCharCode(65 + i)}`;
    return {
      name: teamName,
      players: Array.from({ length: 9 }, (_, j) => ({
        id: `${teamName}-${j + 1}`,
        name: `Player ${i * 9 + j + 1}`
      }))
    };
  });
}

