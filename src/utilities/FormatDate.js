export const FormatDate =(date) => {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
    const formatedDate = date.split("-")

    return new Date(`${month[(parseInt(formatedDate[1]))]} ${formatedDate[2]} ${formatedDate[0]}`)
}

