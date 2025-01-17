import { useState, useCallback } from 'react';
import { Team, Player } from '../utils/generateDummyData';

export function useSearch(teams: Team[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<{ player: Player; team: Team } | null>(null);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setSearchResult(null);
      return;
    }

    for (const team of teams) {
      const player = team.players.find(p => p.name.toLowerCase().includes(term.toLowerCase()));
      if (player) {
        setSearchResult({ player, team });
        return;
      }
    }

    setSearchResult(null);
  }, [teams]);

  return { searchTerm, searchResult, handleSearch };
}

