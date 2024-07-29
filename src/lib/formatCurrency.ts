export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('eu-AU', {
        style: "currency",
        currency: "AUD",
        minimumFractionDigits: 2
    }).format(value)
}