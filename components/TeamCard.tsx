import { Card } from "@/components/ui/card"
import { BoltIcon as Bat, CircleDot } from 'lucide-react'
import Image from "next/image"
import { Team, Player } from "../utils/generateDummyData"

interface TeamCardProps {
  team: Team;
  highlightedPlayer?: Player;
}

export function TeamCard({ team, highlightedPlayer }: TeamCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-B5qXrsNUK3tvElD9RrGaC6lKV1LntN.png"
              alt={team.name}
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <h3 className="text-2xl font-bold">{team.name}</h3>
          </div>
          <div className="space-y-2">
            {team.players.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center justify-between p-2 rounded ${
                  highlightedPlayer?.id === player.id
                    ? "bg-yellow-300 text-purple-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                } transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-6 text-pink-300">{index + 1}.</span>
                  <span className="font-semibold">{player.name}</span>
                  {index === 2 && <span className="text-xs text-pink-300">(C)</span>}
                  {index === 4 && <span className="text-xs text-pink-300">(WK)</span>}
                </div>
                <div className="text-pink-300">
                  {index < 6 ? (
                    <Bat className="h-4 w-4" />
                  ) : (
                    <CircleDot className="h-4 w-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

