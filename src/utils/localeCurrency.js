function localeCurrency(price) {
    const options = {
        style: "currency",
        currency: "eur"
    }

    return price.toLocaleString(undefined, options)
}

export default localeCurrency