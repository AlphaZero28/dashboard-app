import React from "react";

function DateRangeColumnFilter({ column }) {

    const { filterValue = [], preFilteredRows, setFilter, id } = column


    let min = null;
    let max = null;

    if (preFilteredRows.length > 0) {
        min = new Date(preFilteredRows[0].values[id]);
        max = new Date(preFilteredRows[0].values[id]);
        preFilteredRows.forEach((row) => {
            const value = new Date(row.values[id]);
            if (value <= min) min = value;
            if (value >= max) max = value;
        });
    }

    // console.log("min:", min, "max:", max);





    return (
        <div
            style={{
                display: "flex"
            }}
        >
            {min && (
                <input
                    value={filterValue[0] || ""}
                    type="date"
                    min={min.toISOString().slice(0, 10)}
                    onChange={(e) => {
                        const val = e.target.value;
                        setFilter((old = []) => [val ? val : undefined, old[1]]);
                    }}
                    style={{ marginRight: "0.5rem" }}
                />
            )}
            to
            {
                max && (
                    <input
                        value={filterValue[1] || ""}
                        type="date"
                        max={max.toISOString().slice(0, 10)}
                        onChange={e => {
                            const val = e.target.value;
                            const selectedDate = new Date(val)
                            selectedDate.setDate(selectedDate.getDate() + 1)

                            const formattedDate = selectedDate.toISOString().slice(0, 10);

                            setFilter((old = []) => [old[0], formattedDate ? (formattedDate) : undefined]);
                        }}
                        style={{
                            marginLeft: "0.5rem"
                        }}
                    />
                )
            }

        </div>
    );
}

export default DateRangeColumnFilter