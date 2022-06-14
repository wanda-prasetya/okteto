const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://hardianto.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://hardianto.xyz': 'hardianto',
}

// Other
global.owner = ['6283853152230']
global.rkyt = []
global.packname = '🤖𝚁𝚠•𝙱𝚘𝚝~🤖'
global.author = 'WhatsApp Bot'
global.sessionName = 'RestaMd'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    erro: 'Maaf Fitur ini sedang gangguan', 
    link: 'Link Salah Gunakan Dengan Benar', 
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Scraping metadata......',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Unlimited",
    free: 60,
    monayawal: 1000
}
global.thumb = { url : 'https://telegra.ph/file/52b4c3c1c631254af23b8.jpg'}
global.visoka = { url: 'https://a.uguu.se/tqncTWxf.mp4' }
global.resta = { url : 'https://a.uguu.se/kUFEHNf.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
