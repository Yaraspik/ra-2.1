interface ToolbarFilters {
    filters: Array<string>,
    selected: string
    onSelectFilter: (filter: string) => void,
}

export default ToolbarFilters;