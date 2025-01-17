import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto mt-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for a player..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-9"
      />
    </div>
  )
}

