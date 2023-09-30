const dolarUs = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const vietNamDong = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND'
})

const currency = {
    formatVND: (amount: number) => vietNamDong.format(amount),
    formatUs: (amount: number) => dolarUs.format(amount),
}

export default currency