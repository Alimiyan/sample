import Badge from '../Badge/Badge'

interface tableProps {
    tableHeader?: string[],
    tableData?: Array<{
        [key: string]: string | JSX.Element;
    }>,
}

function Table({ tableData, tableHeader }: tableProps) {


    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full rounded-lg shadow-xl overflow-hidden">
                    <thead className="bg-customColor text-white">
                        <tr className="text-left">
                            {tableHeader?.map((item, index) => (
                                <th key={index} className="p-4 font-semibold text-base">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? '' : 'bg-base-200'
                                    } hover:bg-base-300 transition duration-300`}
                            >
                                {Object.keys(item).map((property, propertyIndex) => (
                                    <td key={propertyIndex} className="p-4">
                                        {item[property]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Table