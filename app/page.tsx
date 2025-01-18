"use client";

import { useState, useEffect } from "react";
import { generateDummyData, Team, Player } from "../utils/generateDummyData";
import { useSearch } from "../hooks/useSearch";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { TeamCard } from "../components/TeamCard";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { ThemeProvider } from "next-themes";

export default function Home() {
  const [teams, setTeams] = useState<Team[]>([]);
  const { searchTerm, searchResult, handleSearch } = useSearch(teams);
  const [highlightedPlayer, setHighlightedPlayer] = useState<Player | null>(
    null
  );

  useEffect(() => {
    setTeams(generateDummyData());
  }, []);

  const handleFindMyTeam = () => {
    const randomTeam = teams[Math.floor(Math.random() * teams.length)];
    const randomPlayer =
      randomTeam.players[Math.floor(Math.random() * randomTeam.players.length)];
    setHighlightedPlayer(randomPlayer);
    handleSearch(randomPlayer.name);
  };

  useEffect(() => {
    if (searchResult) {
      const teamElement = document.getElementById(searchResult.team.name);
      if (teamElement) {
        teamElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchResult]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <Header />
        <main className="container mx-auto p-4">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          {searchResult && (
            <div className="text-center mt-4 p-3 bg-white/50 dark:bg-white/10 backdrop-blur rounded-lg">
              <p className="text-lg font-semibold">
                {searchResult.player.name} belongs to {searchResult.team.name}
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {teams.map((team) => (
              <div key={team.name} id={team.name}>
                <TeamCard
                  team={team}
                  highlightedPlayer={
                    searchResult?.team.name === team.name
                      ? searchResult.player
                      : highlightedPlayer
                  }
                />
              </div>
            ))}
          </div>
        </main>
        {/* <FloatingActionButton onClick={handleFindMyTeam} /> */}
      </div>
    </ThemeProvider>
  );
}
