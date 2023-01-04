import { FormatDate } from "./FormatDate"
 
function SortNextDueDate  (arr, type) {
    
    if(type === 'request'){
        function nextDueDate(a, b) {
            const resultA = FormatDate(a.due_date)
            const resultB = FormatDate(b.due_date)
    
            return resultA.getTime() - resultB.getTime();
        }
        return arr.sort(nextDueDate);
    }

    if(type === 'deposit'){
        function nextDepositDate(a, b) {
            const resultA = FormatDate(a.depositDate)
            const resultB = FormatDate(b.depositDate)
    
            return resultA.getTime() - resultB.getTime();
        }
        return arr.sort(nextDepositDate);
    }
    

    
}

export default SortNextDueDate