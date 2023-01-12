interface numberPages{
    total: number,
    limit: number,
    offset: number,
    setOffset: Function
}

export function NumberPages(props: numberPages) {
    const maxItem = 9
    const maxLeft = (maxItem - 1) / 2

    const current = props.offset ? (props.offset / props.limit) + 1 : 1
    const pages = Math.ceil(props.total / props.limit)
    const first = Math.max(current - maxLeft, 1)

    return (
        <>
                {Array.from({ length: maxItem })
                    .map((_, index) => index + first)
                    .map((page) => (
                        <li>
                            <button 
                                onClick={() => props.setOffset((page - 1) * props.limit)}
                            >
                                {page}
                            </button>
                            
                        </li>
                ))}
           
        </>
    )
}