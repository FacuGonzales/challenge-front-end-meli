const currency_ids = [
    {id: 'ARS', prefix: '$'},
    {id: 'USD', prefix: 'u$s'}
]

export const number_format = (amount, decimals, prefix)=> {
    
    amount = amount || 0;

    decimals = decimals || 0;

    prefix = prefix || 'ARS'

    console.log('prefix', prefix)
    
    amount = amount.toFixed(decimals);

    const amount_parts = amount.split('.'),
    
    regexp = /(\d+)(\d{3})/;

    amount_parts[1] === '00' && amount_parts.pop()

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');

    const currency = currency_ids.filter(c=> c.id === prefix)

    console.log(currency)
     
    amount_parts.unshift(currency[0].prefix)

    return amount_parts;
}