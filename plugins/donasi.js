let handler =  m => m.reply(`
╭─「 Donasi 」
│ •gopay :085706735450
│ •dana  :085706735450
│ • PULSA:083869803330 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
