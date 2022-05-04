import { FormatDate } from "./FormatDate"
 
function SortNextDueDate  (arr) {
    
    function nextDueDate(a, b) {
        const resultA = FormatDate(a.due_date)
        const resultB = FormatDate(b.due_date)

        return resultA.getTime() - resultB.getTime();
    }

    return arr.sort(nextDueDate);
}

export default SortNextDueDate