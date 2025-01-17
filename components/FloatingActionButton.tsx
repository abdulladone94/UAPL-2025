import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

interface FloatingActionButtonProps {
  onClick: () => void;
}

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
      onClick={onClick}
    >
      <Search className="mr-2 h-4 w-4" />
      Find My Team
    </Button>
  )
}

