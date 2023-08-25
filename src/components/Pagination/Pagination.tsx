interface PaginationProps {
    customClass?: string,
    state: number,
    setState: (val: number) => void,
}


function Pagination({ customClass, state, setState }: PaginationProps) {
    function handlePageChange(val: number) {
        return () => {
            if (val > 0) {
                setState(val)
            }
        }
    }
    return (
        <>
            <div className={`join ${customClass}`}>
                <button className="join-item btn" onClick={handlePageChange(state - 1)}>«</button>
                <button className="join-item btn">Page {state}</button>
                <button className="join-item btn" onClick={handlePageChange(state + 1)}>»</button>
            </div>
        </>
    )
}

export default Pagination