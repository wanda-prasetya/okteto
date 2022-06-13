process.on('uncaughtException', console.error) //Safe Log Error
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, downloadContentFromMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const yts = require("yt-search")
const os = require('os')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const textpro = require('./lib/textpro')
const { pinterest } = require("./lib/pinterest")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const noapi = require('./lib/api') 
const { yta } = require('./lib/y2mate')


global.db = JSON.parse(fs.readFileSync('./src/database.json'))
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
  ...(global.db || {})
}
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkuis = db.data.game.tebakuis = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let siapakahaku = db.data.game.siapakahaku = []
let vote = db.data.others.vote = []
//DATABASE
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))


module.exports = Resta = async (Resta, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var  budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : (typeof m.text == 'string' ? m.text : '')
        global.prefix
       const cmod = (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === Resta.user.jid) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype === 'listResponseMessage' && m.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === Resta.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(cmod) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Resta.decodeJid(Resta.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m. chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
        // Group
       
        const groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user)) user.afkReason = ''
            if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('mute' in chats)) chats.mute = false
            if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
            mute: false,
            antilink: false,
            }
		
	        let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	        if (setting) {
		    if (!isNumber(setting.status)) setting.status = 0
		    if (!('autobio' in setting)) setting.autobio = false
		    if (!('templateImage' in setting)) setting.templateImage = true
		    if (!('templateVideo' in setting)) setting.templateVideo = false
		    if (!('templateGif' in setting)) setting.templateGif = false
		    if (!('templateMsg' in setting)) setting.templateMsg = false	
	        } else global.db.data.settings[botNumber] = {
		    status: 0,
		    autobio: false,
		    templateImage: true,
		    templateVideo: false,
		    templateGif: false,
		    templateMsg: false,
	        }    
            } catch (err) {
            console.error(err) 
            }
            // write database every 1 minute
	       setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
             }, 60 * 1000)

        // Push Message To Console && Auto Read
            if (m.message) {
            Resta.sendReadReceipt(m.chat, m.sender, [m.key.id])
           Resta.sendPresenceUpdate('composing', m.chat)
           Resta.sendPresenceUpdate('available', m.chat) 
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            }
	     // reset limit every 12 hours
            let cron = require('node-cron')
            cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
            }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
             })
             
          
	      // Anti Link
           if (db.data.chats[m.chat].antilink) {
           if (budy.match(`chat.whatsapp.com`)) {
           if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
           let gclink = (`https://chat.whatsapp.com/`+await Resta.groupInviteCode(m.chat))
           let isLinkThisGc = new RegExp(gclink, 'i')
           let isgclink = isLinkThisGc.test(m.text)
           if (isgclink) return m.reply(`Kamu Mengirim Link Grup Ini Kamu Tidak Akan Dikick`)
           if (isAdmins) return m.reply(`Anda Adalah Admin Grup Anda Tidak Akan Dikick`)
           if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
           m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
           Resta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
           }
           }        
          // Mute Chat
          if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
          return
           }
           const pickRandom = (arr) => {
		   return arr[Math.floor(Math.random() * arr.length)]
		  }
           // Respon Cmd with media
          if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
          let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
          let { text, mentionedJid } = hash
          let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
          userJid: Resta.user.id,
          quoted: m.quoted && m.quoted.fakeObj
           })
           messages.key.fromMe = areJidsSameUser(m.sender, Resta.user.id)
           messages.key.id = m.key.id
           messages.pushName = m.pushName
           if (m.isGroup) messages.participant = m.sender
           let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
            }
            Resta.ev.emit('messages.upsert', msg)
            }
	    
	        if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
            return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
             }).filter(v => v).join('\n')}
             ${isSurender ? '' : `Perfect Player`}`.trim()
             Resta.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
             if (isWin || isSurender) delete _family100['family100'+m.chat]
             }

              if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebaklagu[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebaklagu[m.sender.split('@')[0]]
               } else m.reply('*Jawaban Salah!*')
               }

               if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
               kuis = true
               jawaban = kuismath[m.sender.split('@')[0]]
               if (budy.toLowerCase() == jawaban) {
               await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
               delete kuismath[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
                }

              if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebakgambar[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakgambar[m.sender.split('@')[0]]
              } else m.reply('*Jawaban Salah!*')
              }
              
              if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebakbendera[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakbendera[m.sender.split('@')[0]]
              } else m.reply('*Jawaban Salah!*')
              }

              if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebakkata[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakkata[m.sender.split('@')[0]]
              } else m.reply('*Jawaban Salah!*')
              }

            if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	        deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
            delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
             } else m.reply('*Jawaban Salah!*')
             }

             if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
             kuis = true
             jawaban = tebakkalimat[m.sender.split('@')[0]]
             if (budy.toLowerCase() == jawaban) {
             await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
             delete tebakkalimat[m.sender.split('@')[0]]
             } else m.reply('*Jawaban Salah!*')
             }
             
             if (siapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
             kuis = true
             jawaban = siapakahaku[m.sender.split('@')[0]]
             if (budy.toLowerCase() == jawaban) {
             await Resta.sendButtonText(m.chat, [{ buttonId: 'siapakahaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
             delete siapakahaku[m.sender.split('@')[0]]
             } else m.reply('*Jawaban Salah!*')
             }
             

              if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebaklirik[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebaklirik[m.sender.split('@')[0]]
              } else m.reply('*Jawaban Salah!*')
              }
	    
	          if (tebakkuis.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
              kuis = true
              jawaban = tebakkuis[m.sender.split('@')[0]]
              if (budy.toLowerCase() == jawaban) {
              await Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkuis', buttonText: { displayText: 'Tebak Kuis' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Resta.user.name, m)
              delete tebakkuis[m.sender.split('@')[0]]
               } else m.reply('*Jawaban Salah!*')
               }     
             //TicTacToe
	           this.game = this.game ? this.game : {}
	           let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	           if (room) {
	           let ok
	           let isWin = !1
	           let isTie = !1
	           let isSurrender = !1
	           if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	           isSurrender = !/^[1-9]$/.test(m.text)
	           if (m.sender !== room.game.currentTurn) { // nek wayahku
	           if (!isSurrender) return !0
	            }
	           if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	           m.reply({
	           '-3': 'Game telah berakhir',
	           '-2': 'Invalid',
	           '-1': 'Posisi Invalid',
	             0: 'Posisi Invalid',
	            }[ok])
	            return !0
	            }
	            if (m.sender === room.game.winner) isWin = true
	            else if (room.game.board === 511) isTie = true
	            let arr = room.game.render().map(v => {
	            return {
	            X: '❌',
	            O: '⭕',
	            1: '1️⃣',
	            2: '2️⃣',
	            3: '3️⃣',
	            4: '4️⃣',
	            5: '5️⃣',
	            6: '6️⃣',
	            7: '7️⃣',
	            8: '8️⃣',
	            9: '9️⃣',
	             }[v]
	             })
	             if (isSurrender) {
	             room.game._currentTurn = m.sender === room.game.playerX
	             isWin = true
	              }
	              let winner = isSurrender ? room.game.currentTurn : room.game.winner
	              let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	                 if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	                 room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	                 if (room.x !== room.o) await Resta.sendText(room.x, str, m, { mentions: parseMention(str) } )
	                  await Resta.sendText(room.o, str, m, { mentions: parseMention(str) } )
	                 if (isTie || isWin) {
	                 delete this.game[room.id]
	                   }
	                   }
                     //Suit PvP
	                  this.suit = this.suit ? this.suit : {}
	                  let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	                  if (roof) {
	                  let win = ''
	                  let tie = false
	                  if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	                  if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	                  Resta.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	                  delete this.suit[roof.id]
	                   return !0
	                   }
	                   roof.status = 'play'
	                   roof.asal = m.chat
	                   clearTimeout(roof.waktu)
	                   Resta.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	                   if (!roof.pilih) Resta.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	                   if (!roof.pilih2) Resta.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	                   roof.waktu_milih = setTimeout(() => {
	                   if (!roof.pilih && !roof.pilih2) Resta.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	                   else if (!roof.pilih || !roof.pilih2) {
	                   win = !roof.pilih ? roof.p2 : roof.p
	                   Resta.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	                   }
	                   delete this.suit[roof.id]
	                   return !0
	                   }, roof.timeout)
	                   }
	                   let jwb = m.sender == roof.p
	                   let jwb2 = m.sender == roof.p2
	                   let g = /gunting/i
	                   let b = /batu/i
	                   let k = /kertas/i
	                   let reg = /^(gunting|batu|kertas)/i
	                   if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	                   roof.pilih = reg.exec(m.text.toLowerCase())[0]
	                   roof.text = m.text
	                   m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	                    if (!roof.pilih2) Resta.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	                     }
	                    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	                    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	                    roof.text2 = m.text
	                    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	                    if (!roof.pilih) Resta.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	                     }
	                     let stage = roof.pilih
	                     let stage2 = roof.pilih2
	                     if (roof.pilih && roof.pilih2) {
	                     clearTimeout(roof.waktu_milih)
	                     if (b.test(stage) && g.test(stage2)) win = roof.p
	                     else if (b.test(stage) && k.test(stage2)) win = roof.p2
	                     else if (g.test(stage) && k.test(stage2)) win = roof.p
	                     else if (g.test(stage) && b.test(stage2)) win = roof.p2
	                     else if (k.test(stage) && b.test(stage2)) win = roof.p
	                     else if (k.test(stage) && g.test(stage2)) win = roof.p2
	                     else if (stage == stage2) tie = true
	                     Resta.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	                    delete this.suit[roof.id]
	                    }
	                    }    
	
	            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	            for (let jid of mentionUser) {
                let user = global.db.data.users[jid]
                if (!user) continue
                let afkTime = user.afkTime
                if (!afkTime || afkTime < 0) continue
                let reason = user.afkReason || ''
                m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
                }
                if (db.data.users[m.sender].afkTime > -1) {
                let user = global.db.data.users[m.sender]
                m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
               user.afkTime = -1
               user.afkReason = ''
               }    
               
 ///function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   

        switch(command) {
     case 'leaderboard':{      
                let txt = `「 *LEADERBOARD* 」\n\n`
                for (let i of _buruan){
                txt += `➸ *ID :* ${i.id}\n`
                txt += `*🐟Ikan* : ${i.ikan}\n`
                txt += `*🐔Ayam* : ${i.ayam}\n`
                txt += `*🐇Kelinci* : ${i.kelinci}\n`
                txt += `*🐑Domba* : ${i.domba}\n`
                txt += `*🐄Sapi* : ${i.sapi}\n`
                txt += `*🐘Gajah* : ${i.gajah}\n\n`
                  }
                 m.reply(txt)       
                  }
                 break
      case 'mancing':{
                if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
                if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
                m.reply("1 umpan terpakai")
                var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
                var ditangkap = Math.ceil(Math.random() * 20)
                setTimeout( () => {
                let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
                let buttons = [{
                buttonId: `${prefix + command}`, 
                buttonText: {
                displayText: 'Mancing lagi🎣'
               }, type: 1},
               ]
               let buttonMessage = {
               image: { url: './storage/image/mancing.jpg' },
               caption: caption,
               footer: "BOT MD",
               buttons: buttons,
               headerType: 4
               }
               Resta.sendMessage(from, buttonMessage, { quoted: m })   
               }, 7000)  
               setTimeout( () => {
               m.reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
                }, 1500)
                kurangUmpan(m.sender, 1)
                addIkan(m.sender, ditangkap)	     
                }   
                 break  
       case 'darah':{
               if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
               let dapat =  getDarah(m.sender)
               m.reply(`${dapat}`)
                }
               break
  case 'bacok':{
               if (isCekDarah < 1) return reply('Darah kamu habis')
               kurangDarah(m.sender, 7)
               m.reply('Telah Di Bacok️')
               }
               break
case 'mining': case 'menambang':{
              if (!isInventory){ addInventori(m.sender) }
              if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
              let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
              let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
              let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
              var besinya = besi[Math.floor(Math.random() * besi.length)]  
              var emasnya = emas[Math.floor(Math.random() * emas.length)]  
              var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
              setTimeout( () => {
               let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
               let buttons = [{
               buttonId: `${prefix + command}`, 
               buttonText: {
               displayText: 'Menambang lagi⛏️'
               }, type: 1},
               ]
               let buttonMessage = {
               image: { url: './storage/image/tambang.jpg' },
               caption: caption,
               footer: pushname,
                buttons: buttons,
                headerType: 4
                }
                Resta.sendMessage(from, buttonMessage, { quoted: m })   
                 }, 7000)  
                 setTimeout( () => {
                 m.reply(`*${pushname}* Mulai menambang🎣`)     
                  }, 1500)
                  kurangDarah(m.sender, 10)
                  addBesi(m.sender, besinya)
                  addEmas(m.sended, emasnya)
                  addEmerald(m.sender, emeraldnya)	     
                  }   
                  break 
  case 'beli': case 'buy':{
                if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
                if (!isInventoryMonay){ addInventoriMonay(m.sender) }
                if (!isInventory){ addInventori(m.sender) }
                if (!q) return m.reply('Mau beli apa?')
                var anu = args[1]
                if (args[0] === 'potion'){
                let noh = 100000 * anu
                if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
                if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
                kurangMonay(m.sender, noh)
                var apalu = anu * 1
                addPotion(m.sender, apalu)
                setTimeout( () => {
                m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
                }, 2000) 
                } else 
                if (args[0] === 'umpan'){
                let noh = 5000 * anu
                if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
                if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
                kurangMonay(m.sender, noh)
                var apalu = anu * 1
                addUmpan(m.sender, apalu)
                 setTimeout( () => {
                 m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
                  }, 2000) 
                  } else 
                  if (args[0] === 'limit'){
                  let noh = 35000 * anu
                  if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
                  if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
                  kurangMonay(m.sender, noh)
                  var apalu = anu * 1
                 addLimit(m.sender, apalu)
                 setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
                  }, 2000) 
                  } else { m.reply("Format salah!") }
                  }
                  break
        case 'sell': case 'jual':{
                 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
                 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
                 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
                 if (!isInventory){ addInventori(m.sender) }
                 var anu = args[1]
                 if (args[0] === 'ikan'){
                 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
                 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
                 kurangIkan(m.sender, anu)
                 let monaynya = 1500 * anu
                 addMonay(m.sender, monaynya)
                 setTimeout( () => {
                 m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
                 }, 2000) 
                 } else
                 if (args[0] === 'ayam'){
                 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
                 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
                 kurangAyam(m.sender, anu)
                 let monaynya = 2500 * anu
                 addMonay(m.sender, monaynya)
                 setTimeout( () => {
                 m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
                  }, 2000) 
                  } else
                  if (args[0] === 'kelinci'){
                  if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
                  kurangKelinci(m.sender, anu)
                  let monaynya = 3000 * anu
                 addMonay(m.sender, monaynya)
                 setTimeout( () => {
                 m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
                  }, 2000) 
                  } else
                  if (args[0] === 'domba'){
                  if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
                  kurangDomba(m.sender, anu)
                  let monaynya = 5000 * anu
                  addMonay(m.sender, monaynya)
                  setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
                  }, 2000) 
                  } else
                  if (args[0] === 'sapi'){
                  if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
                  kurangSapi(m.sender, anu)
                  let monaynya = 10000 * anu
                  addMonay(m.sender, monaynya)
                  setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
                   }, 2000) 
                   } else
                  if (args[0] === 'gajah'){
                  if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
                  kurangGajah(m.sender, anu)
                  let monaynya = 15000 * anu
                  addMonay(m.sender, monaynya)
                  setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
                  }, 2000) 
                  } else
                  if (args[0] === 'besi'){
                  if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
                  kurangBesi(m.sender, anu)
                  let monaynya = 16000 * anu
                  addMonay(m.sender, monaynya)
                  setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
                  }, 2000) 
                  } else
                  if (args[0] === 'emas'){
                  if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
                  kurangEmas(m.sender, anu)
                  let monaynya = 50000 * anu
                  addMonay(m.sender, monaynya)
                  setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
                  }, 2000) 
                  } else
                  if (args[0] === 'emerald'){
                  if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
                  if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
                  kurangEmerald(m.sender, anu)
                  let monaynya = 100000 * anu
                  addMonay(m.sender, monaynya)
                  setTimeout( () => {
                  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
                  }, 2000) 
                  } else { m.reply("Format salah!") }
                  }
                   break
        case 'heal':{
                if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
                if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
                if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
                addDarah(m.sender, 100)
                kurangPotion(m.sender, 1)
                m.reply('Berhasil, darah kamu sudah full')
                }
                break
     case 'berburu':{ 
                if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
                if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
                if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
                let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
                let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
                var ikanmu = Math.ceil(Math.random() * 10)
                var ayam = Math.ceil(Math.random() * 8)
                var kelinci = Math.ceil(Math.random() * 7)
                var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
                var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
                var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
                var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
                var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
                var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
                var lukanya = luka[Math.floor(Math.random() * luka.length)]
                var lokasinya = location[Math.floor(Math.random() * location.length)]
                if (lokasinya === 'Hutan rimba') {
                var image = './storage/image/rimba.jpg'
                } else
               if (lokasinya === 'Hutan Amazon') {
               var image =  './storage/image/amazon.jpg'
               } else
               if (lokasinya === 'Hutan tropis') {
               var image = './storage/image/tropis.jpg'
               } else
               if (lokasinya === 'Padang rumput') {
               var image = './storage/image/padang_rumput.jpg'
               } else
               if (lokasinya === 'Hutan afrika') {
               var image = './storage/image/afrika.jpg'
               } else
               if (lokasinya === 'Pegunungan') {
               var image = './storage/image/pegunungan.jpg'
              }
            setTimeout( () => {
            let teksehmazeh = `_[ HASIL BURUAN ]_\n`
            teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
            teksehmazeh += `*🐔Ayam* : ${ayam}\n`
            teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
            teksehmazeh += `*🐑Domba* : ${domba}\n`
            teksehmazeh += `*🐄Sapi* : ${sapi}\n`
            teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
            teksehmazeh += `_[ INFO ]_\n`
            teksehmazeh += `*Lokasi* : ${lokasinya}\n`
            teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
            teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
            let buttons = [
             {
             buttonId: `${prefix + command}`, 
             buttonText: {
             displayText: 'Berburu lagi️🏹'
             }, type: 1},
             ]
             let buttonMessage = {
             image: { url: image },
             caption: teksehmazeh,
             footer: pushname,
             buttons: buttons,
             headerType: 4
              }
              Resta.sendMessage(from, buttonMessage, { quoted: m })      
              }, 5000)  
             setTimeout( () => {
             m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
             }, 1000) 
            addIkan(m.sender, ikanmu) 
            addAyam(m.sender, ayam) 
            addKelinci(m.sender, kelinci)
            addDomba(m.sender, domba)
            addSapi(m.sender, sapi)
            addGajah(m.sender, gajah)
            kurangDarah(m.sender, 10)
            }
            break
	    case 'afk': {
                  let user = global.db.data.users[m.sender]
                  user.afkTime = + new Date
                  user.afkReason = text
                  m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
                 }
                break	
        case 'ttc': case 'ttt': case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                 if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
                 let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                 if (room) {
                 m.reply('Partner ditemukan!')
                 room.o = m.chat
                 room.game.playerO = m.sender
                 room.state = 'PLAYING'
                 let arr = room.game.render().map(v => {
                 return {
                  X: '❌',
                  O: '⭕',
                   1: '1️⃣',
                   2: '2️⃣',
                   3: '3️⃣',
                   4: '4️⃣',
                   5: '5️⃣',
                   6: '6️⃣',
                   7: '7️⃣',
                   8: '8️⃣',
                   9: '9️⃣',
                   }[v]
                   })
                   let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                   if (room.x !== room.o) await Resta.sendText(room.x, str, m, { mentions: parseMention(str) } )
                   await Resta.sendText(room.o, str, m, { mentions: parseMention(str) } )
                   } else {
                   room = {
                   id: 'tictactoe-' + (+new Date),
                   x: m.chat,
                   o: '',
                  game: new TicTacToe(m.sender, 'o'),
                  state: 'WAITING'
                   }
                  if (text) room.name = text
                  m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                  this.game[room.id] = room
                   }
                   }
                 break
      case 'delttc': case 'delttt': {
                 this.game = this.game ? this.game : {}
                 try {
                 if (this.game) {
                 delete this.game
                 Resta.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                 } else if (!this.game) {
                 m.reply(`Session TicTacToe🎮 tidak ada`)
                 } else throw '?'
                 } catch (e) {
                 m.reply('rusak')
                 }
                 }
                 break
     case 'suitpvp': case 'suit': {
                 this.suit = this.suit ? this.suit : {}
                 let poin = 10
                 let poin_lose = 10
                 let timeout = 60000
                 if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	             if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                 if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                 if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                 let id = 'suit_' + new Date() * 1
                 let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                 this.suit[id] = {
                 chat: await Resta.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                 id: id,
                 p: m.sender,
                 p2: m.mentionedJid[0],
                 status: 'wait',
                 waktu: setTimeout(() => {
                  if (this.suit[id]) Resta.sendText(m.chat, `_Waktu suit habis_`, m)
                  delete this.suit[id]
                   }, 60000), poin, poin_lose, timeout
                   }
                   }
                   break    
	   case 'family100': {
                    if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                    }
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                    let random = anu[Math.floor(Math.random() * anu.length)]
                    let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                   _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Resta.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                     }
                     }
                     break
          case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                     if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                     ter = command[1].toLowerCase()
                     tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                     m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                     break
            case 'tebaklagu': {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Resta.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Resta.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'tebakgambar': {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                    }
                    break
          case 'tebakbendera': {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nBantuan : ${result.flag}\nWaktu : 60s`, m).then(() => {
                    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.name)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Tebak Bendra' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakbendera[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'tebakkata': {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'tebakkuis': {
                    if (tebakkuis.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkuis[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkuis.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkuis', buttonText: { displayText: 'Tebak Kuis' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkuis[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'tebakkalimat': {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'siapakahaku': {
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    siapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'siapakahaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `Waktu Habis\nJawaban:  ${siapakahaku[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete siapakahaku[m.sender.split('@')[0]]
                    }
                    }
                    break
        case 'tebaklirik': {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'caklontong': {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Resta.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		            caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Resta.sendButtonText(m.chat, [{ buttonId: 'tebaklontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Resta.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		            delete caklontong_desk[m.sender.split('@')[0]]
                     }
                     }
                     break
          case 'kuismath': case 'math': {
                     if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                     let { genMath, modes } = require('./src/math')
                     if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                     let result = await genMath(text.toLowerCase())
                     Resta.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                     kuismath[m.sender.split('@')[0]] = result.jawaban
                     })
                    await sleep(result.waktu)
                     if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                    }
                    }
                    break
         case 'jodohku': {
                   if (!m.isGroup) throw mess.group
                   let member = participants.map(u => u.id)
                   let me = m.sender
                   let jodoh = member[Math.floor(Math.random() * member.length)]
                   let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                    let ments = [me, jodoh]
                    let buttons = [
                    { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Resta.sendButtonText(m.chat, buttons, jawab, Resta.user.name, m, {mentions: ments})
                     }
                     break
      case 'jadian': {
                     if (!m.isGroup) throw mess.group
                     let member = participants.map(u => u.id)
                     let orang = member[Math.floor(Math.random() * member.length)]
                     let jodoh = member[Math.floor(Math.random() * member.length)]
                     let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                     let menst = [orang, jodoh]
                     let buttons = [
                     { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                     ]
                    await Resta.sendButtonText(m.chat, buttons, jawab, Resta.user.name, m, {mentions: menst})
                     }
                     break
          case 'cekme':
                     const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
                     const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
                     const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
                     const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                     const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                     const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					 const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					 const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					 const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					 const gai = suka[Math.floor(Math.random() * suka.length)]
					 const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					 const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `

					 Resta.profilePictureUrl(m.chat, 'image').then( res => Resta.sendMessage(m.chat, {caption: cek, image: { url: res }}, {quoted: m})).catch(() => Resta.sendMessage(m.chat, {caption: cek, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: m}))
					 break
	      case 'apakah':
				    if (!q) throw `Penggunaan ${command} text\n\nContoh : ${command} saya wibu`
					const apa = ['Benar Sekali', 'Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
                    Resta.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
					break
         case 'bisakah':       
				    if (!q) throw `Penggunaan ${command} text\n\nContoh : ${command} saya wibu`
					const bisa = ['Jangan Halu', 'Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
                    Resta.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
					break
         case 'bagaimanakah':
                     if (!q) throw `Penggunaan ${command} text\n\nContoh : ${command} saya wibu`
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
                    Resta.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
					break
         case 'rate':
                     if (!q) throw `Penggunaan ${command} text\n\nContoh : ${command} Gambar Aku`
					 const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					 const te = ra[Math.floor(Math.random() * ra.length)]
                     Resta.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
					break
         case 'gantengcek':
				    if (!q) throw `Penggunaan ${command} Nama\n\nContoh : ${command} Sugiono`
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
                    Resta.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
					break
         case 'cantikcek':
                    if (!q) throw `Penggunaan ${command} Nama\n\nContoh : ${command} Novi`
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
                    Resta.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
					break
          case 'sangecek':
				    if (!q) throw `Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                    Resta.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
					break
         case 'kapankah':
				    if (!q) throw `Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                    Resta.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
					case 'simi':
					if (!text) throw `Penggunaan ${command} text`
					var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
                    Resta.sendMessage(m.chat, { text: cimcimi.success}, {quoted: m})
                    break
/******** BATAS GAME*///////////       
	     case 'kick': {
		           if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
		           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		           await Resta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	                }
	               break
	    case 'add': {
		           if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
		           let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		           await Resta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	                }
	               break
	   case 'promote': {
		          if (!m.isGroup) throw mess.group
                  if (!isBotAdmins) throw mess.botAdmin
                  if (!isAdmins) throw mess.admin
		          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		          await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	               }
	               break
	case 'demote': {
		           if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
		           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		           await Resta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	               }
	               break
	    case 'setname': case 'setsubject': {
                   if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
                   if (!text) throw 'Textnya ap ?'
                   await Resta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                    }
                   break
        case 'setdesc': case 'setdesk': {
                   if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
                   if (!text) throw 'Textnya ap ?'
                   await Resta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                   }
                   break
        case 'setppgroup': case 'setppgrup': case 'setppgc': {
                  if (!m.isGroup) throw mess.group
                  if (!isAdmins) throw mess.admin
                  if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                  if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                  let media = await Resta.downloadAndSaveMediaMessage(quoted)
                  await Resta.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                  m.reply(mess.success)
                  }
                  break
       case 'tagall': {
                  if (!m.isGroup) throw mess.group
                  if (!isBotAdmins) throw mess.botAdmin
                  if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                  for (let mem of participants) {
                  teks += `⭔ @${mem.id.split('@')[0]}\n`
                  }
                  Resta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                  }
                  break
       case 'hidetag': {
                  if (!m.isGroup) throw mess.group
                  if (!isBotAdmins) throw mess.botAdmin
                  if (!isAdmins) throw mess.admin
                  Resta.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                  }
                 break 
       case 'vote': {
                 if (!m.isGroup) throw mess.group
                 if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                 if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
                 m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
                 vote[m.chat] = [q, [], []]
                 await sleep(1000)
                 upvote = vote[m.chat][1]
                 devote = vote[m.chat][2]
                 teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
                   let buttonsVote = [
                   {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
                   {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
                   ]
                   let buttonMessageVote = {
                   text: teks_vote,
                   footer: Resta.user.name,
                   buttons: buttonsVote,
                   headerType: 1
                   }
                   Resta.sendMessage(m.chat, buttonMessageVote)
	               }
                   break
        case 'upvote': {
                    if (!m.isGroup) throw mess.group
                    if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                    isVote = vote[m.chat][1].concat(vote[m.chat][2])
                    wasVote = isVote.includes(m.sender)
                    if (wasVote) throw 'Kamu Sudah Vote'
                    vote[m.chat][1].push(m.sender)
                    menvote = vote[m.chat][1].concat(vote[m.chat][2])
                    teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
                       let buttonsUpvote = [
                       {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
                       {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
                        ]
                        let buttonMessageUpvote = {
                        text: teks_vote,
                        footer: Resta.user.name,
                        buttons: buttonsUpvote,
                        headerType: 1,
                        mentions: menvote
                        }
                         Resta.sendMessage(m.chat, buttonMessageUpvote)
	                     }
                         break
            case 'devote': {
                     if (!m.isGroup) throw mess.group
                     if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                     isVote = vote[m.chat][1].concat(vote[m.chat][2])
                     wasVote = isVote.includes(m.sender)
                     if (wasVote) throw 'Kamu Sudah Vote'
                     vote[m.chat][2].push(m.sender)
                     menvote = vote[m.chat][1].concat(vote[m.chat][2])
                     teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
                      let buttonsDevote = [
                     {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
                     {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
                     ]
                     let buttonMessageDevote = {
                     text: teks_vote,
                     footer: Resta.user.name,
                     buttons: buttonsDevote,
                     headerType: 1,
                     mentions: menvote
                     }
                     Resta.sendMessage(m.chat, buttonMessageDevote)
	                  }
                      break                 
           case 'cekvote':
                     if (!m.isGroup) throw mess.group
                     if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                     teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${Resta.user.id}
`
                  Resta.sendTextWithMentions(m.chat, teks_vote, m)
                  break
	case 'deletevote': case'delvote': case 'hapusvote': {
                  if (!m.isGroup) throw mess.group
                  if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                  delete vote[m.chat]
                  m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	                }
                    break
        case 'group': case 'grup': {
                  if (!m.isGroup) throw mess.group
                  if (!isBotAdmins) throw mess.botAdmin
                  if (!isAdmins) throw mess.admin
                  if (args[0] === 'close'){
                  await Resta.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                  } else if (args[0] === 'open'){
                  await Resta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                  } else {
                  let buttons = [
                  { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                  { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                   ]
                   await Resta.sendButtonText(m.chat, buttons, `Mode Group`, Resta.user.name, m)
                   }
                   }
                   break
         case 'editinfo': {
                   if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
                   if (args[0] === 'open'){
                   await Resta.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                   } else if (args[0] === 'close'){
                   await Resta.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                   } else {
                   let buttons = [
                   { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                   { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Resta.sendButtonText(m.chat, buttons, `Mode Edit Info`, Resta.user.name, m)
                     }
                     }
                    break
         case 'antilink': {
                   if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
                   if (args[0] === "enable") {
                   if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                   db.data.chats[m.chat].antilink = true
                    m.reply(`Antilink Aktif !`)
                    } else if (args[0] === "disable") {
                    if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = false
                    m.reply(`Antilink Tidak Aktif !`)
                     } else {
                     let buttons = [
                     { buttonId: 'antilink enable', buttonText: { displayText: 'On' }, type: 1 },
                     { buttonId: 'antilink disable', buttonText: { displayText: 'Off' }, type: 1 }
                     ]
                     await Resta.sendButtonText(m.chat, buttons, `Mode Antilink`, Resta.user.name, m)
                     }
                     }
                     break
          case 'mute': {
                    if (!m.isGroup) throw mess.group
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin
                    if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = true
                    m.reply(`${Resta.user.name} telah di mute di group ini !`)
                    } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = false
                    m.reply(`${Resta.user.name} telah di unmute di group ini !`)
                     } else {
                     let buttons = [
                     { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                     { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                     ]
                     await Resta.sendButtonText(m.chat, buttons, `Mute Bot`, Resta.user.name, m)
                      }
                      }
                      break
            case 'linkgroup': case 'linkgc': {
                       if (!m.isGroup) throw mess.group
                       if (!isBotAdmins) throw mess.botAdmin
                       let response = await Resta.groupInviteCode(m.chat)
                       Resta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                       }
                       break
            case 'ephemeral': {
                       if (!m.isGroup) throw mess.group
                       if (!isBotAdmins) throw mess.botAdmin
                       if (!isAdmins) throw mess.admin
                       if (!text) throw 'Masukkan value enable/disable'
                       if (args[0] === 'enable') {
                       await Resta.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'disable') {
                        await Resta.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        }
                         }
                         break
            case 'delete': case 'del': {
                   	if (!m.isGroup) throw mess.group
                       if (!m.quoted) throw false
                       let { chat, fromMe, id, isBaileys } = m.quoted
                       if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                       Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                       }
                       break
            case 'infochat': {
                   	if (!m.isGroup) throw mess.group
                       if (!m.quoted) m.reply('Reply Pesan')
                       let msg = await m.getQuotedObj()
                       if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                       let teks = ''
                       for (let i of msg.userReceipt) {
                       let read = i.readTimestamp
                       let unread = i.receiptTimestamp
                       let waktu = read ? read : unread
                       teks += `⭔ @${i.userJid.split('@')[0]}\n`
                       teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                        }
                        Resta.sendTextWithMentions(m.chat, teks, m)
                        }
                      break
/*********BATAS GRUP***********////////
              case 'q': case 'quoted': {
		               if (!m.quoted) return m.reply('Reply Pesannya!!')
		               let wokwol = await Resta.serializeM(await m.getQuotedObj())
		               if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		               await wokwol.quoted.copyNForward(m.chat, true)
                         }
	                    break
            case 'listpc': {
                       let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                       let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                       for (let i of anu) {
                       let nama = store.messages[i].array[0].pushName
                       teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                        }
                        Resta.sendTextWithMentions(m.chat, teks, m)
                        }
                        break
             case 'listgc': {
                        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                        let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                        for (let i of anu) {
                        let metadata = await Resta.groupMetadata(i)
                        teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                        }
                        Resta.sendTextWithMentions(m.chat, teks, m)
                         }
                         break
             case 'listonline': case 'liston': {
                         let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                         let online = [...Object.keys(store.presences[id]), botNumber]
                         Resta.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                          }
                         break
/***********BATAS OTHERS**********////
case 'style': case 'styletext': {
	                 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		             db.data.users[m.sender].limit -= 1 // -1 limit
		              let { styletext } = require('./lib/scraper')
		              if (!text) throw 'Masukkan Query text!'
                      let anu = await styletext(text)
                      let teks = `Srtle Text From ${text}\n\n`
                      for (let i of anu) {
                       teks += `⭔ *${i.name}* : ${i.result}\n\n`
                       }
                      m.reply(teks)
	                   }
	                   break
            case 'sticker': case 's': case 'sgif': case 'stickergif': {
                       if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                       m.reply(mess.wait)
                       if (/image/.test(mime)) {
                       let media = await quoted.download()
                       let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                       await fs.unlinkSync(encmedia)
                       } else if (/video/.test(mime)) {
                       if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                       let media = await quoted.download()
                       let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                       await fs.unlinkSync(encmedia)
                       } else {
                       throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                       }
                       }
                       break
            case 'ebinary': {
                      if (!text) throw `Example : ${prefix + command} text`
                      let { eBinary } = require('./lib/binary')
                      let eb = await eBinary(text)
                      m.reply(eb)
                      }
                       break
            case 'dbinary': {
                       if (!text) throw `Example : ${prefix + command} text`
                       let { dBinary } = require('./lib/binary')
                       let db = await dBinary(text)
                       m.reply(db)
                        }
                        break
            case 'emojimix': {
		               let [emoji1, emoji2] = text.split`+`
		               if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		               if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		               let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		               for (let res of anu.results) {
		               let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		               await fs.unlinkSync(encmedia)
		                }
	                    }
	                   break
	    case 'emojimix2': {
	                 if (!text) throw `Example : ${prefix + command} 😅`
		             let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		             for (let res of anu.results) {
		             let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		             await fs.unlinkSync(encmedia)
		              }
	                  }
	                  break
	       case 'attp': case 'ttp': {
                     if (!text) throw `Example : ${prefix + command} text`
                     await Resta.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Resta', 'morou', m, {asSticker: true})
                      }
                      break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	                  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	                  if (!/image/.test(mime)) throw respond
                      if (!text) throw respond
	                  m.reply(mess.wait)
                      atas = text.split('|')[0] ? text.split('|')[0] : '-'
                      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	                  let dwnld = await quoted.download()
	                  let { floNime } = require('./lib/uploader')
	                  let fatGans = await floNime(dwnld)
	                  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	                  let FaTiH = await Resta.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	                  await fs.unlinkSync(FaTiH)
                       }
	                  break            
            case 'toimage': case 'toimg': {
                      if (!quoted) throw 'Reply Image'
                      if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                      m.reply(mess.wait)
                      let media = await Resta.downloadAndSaveMediaMessage(quoted)
                      let ran = await getRandom('.png')
                      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                      fs.unlinkSync(media)
                      if (err) throw err
                      let buffer = fs.readFileSync(ran)
                      Resta.sendMessage(m.chat, { image: buffer }, { quoted: m })
                      fs.unlinkSync(ran)
                       })
                       }
                       break
	        case 'tomp4': case 'tovideo': {
                      if (!quoted) throw 'Reply Image'
                      if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                      m.reply(mess.wait)
		              let { webp2mp4File } = require('./lib/uploader')
                      let media = await Resta.downloadAndSaveMediaMessage(quoted)
                      let webpToMp4 = await webp2mp4File(media)
                      await Resta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                      await fs.unlinkSync(media)
                       }
                       break
            case 'toaud': case 'toaudio': {
                       if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                       if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                       m.reply(mess.wait)
                       let media = await quoted.download()
                       let { toAudio } = require('./lib/converter')
                       let audio = await toAudio(media, 'mp4')
                       Resta.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
                        }
                       break
            case 'tomp3': {
                       if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                       if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                       if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                       m.reply(mess.wait)
                       let media = await quoted.download()
                       let { toAudio } = require('./lib/converter')
                       let audio = await toAudio(media, 'mp4')
                       Resta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Resta.user.name}.mp3`}, { quoted : m })
                       }
                      break
           case 'tovn': case 'toptt': {
                      if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                      if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                      m.reply(mess.wait)
                       let media = await quoted.download()
                       let { toPTT } = require('./lib/converter')
                       let audio = await toPTT(media, 'mp4')
                       Resta.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                        }
                       break
	        case 'tourl': {
                    m.reply(mess.wait)
		            let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                    let media = await Resta.downloadAndSaveMediaMessage(quoted)
                    if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                    } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                    }
                   await fs.unlinkSync(media)
                    }
                    break        
	    case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                    try {
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                    m.reply(mess.wait)
                    let media = await Resta.downloadAndSaveMediaMessage(quoted)
                    let ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buff = fs.readFileSync(ran)
                    Resta.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                    fs.unlinkSync(ran)
                    })
                    } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                    } catch (e) {
                    m.reply(e)
                     }
                    break
/*************BATAS CONVER*********/
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Resta.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                }
               break
    case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
     case 'gimage': {
                if (!text) throw `Example : ${prefix + command} kaori cicak`
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
               {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                image: { url: images },
                caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                footer: Resta.user.name,
                buttons: buttons,
               headerType: 4
                }
                Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                 }
              break
   case 'pinterest': {
              m.reply(mess.wait)
		      let { pinterest } = require('./lib/scraper')
              anu = await pinterest(text)
              result = anu[Math.floor(Math.random() * anu.length)]
              Resta.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
              }
              break
   case 'wallpaper': {
             if (!text) throw 'Masukkan Query Title'
		     let { wallpaper } = require('./lib/scraper')
             anu = await wallpaper(text)
             result = anu[Math.floor(Math.random() * anu.length)]
		     let buttons = [
             {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
              let buttonMessage = {
              image: { url: result.image[0] },
              caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
              footer: Resta.user.name,
              buttons: buttons,
              headerType: 4
               }
              Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
              break
  case 'wikimedia': {
              if (!text) throw 'Masukkan Query Title'
		      let { wikimedia } = require('./lib/scraper')
              anu = await wikimedia(text)
              result = anu[Math.floor(Math.random() * anu.length)]
              let buttons = [
              {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1} ]
               let buttonMessage = {
               image: { url: result.image },
               caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
               footer: Resta.user.name,
               buttons: buttons,
                headerType: 4
                }
                Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
               break
     case 'lirik':                        
                if(!q) throw `Example : ${prefix + command} doraemon`
                let song = await noapi.lirik(q)
                Resta.sendImage(m.chat ,song.thumb,song.lirik, m) 
                break
    case 'cogan': case 'cowok':
			    m.reply(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				Resta.sendMessage(m.chat, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				break
      case 'cecan': case 'cewek':
				m.reply(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				Resta.sendMessage(m.chat, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
			    break
/*************BATAS SEARCH*************/
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: `♫ Audio (${anu.seconds})`}, type: 1},
                {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: `► Video (${anu.seconds})`}, type: 1}]
                let buttonMessage = {
                image: { url: anu.thumbnail },
                caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: Resta.user.name,
                    buttons: buttons,
                    headerType: 4
                    }
                    Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
                    break 
        case 'ytmp3': case 'ytaudio': {
                    let { yta } = require('./lib/y2mate')
                    if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                    let quality = args[1] ? args[1] : '128kbps'
                    let media = await yta(text, quality)
                    if (media.filesize >= 200000) return m.reply('File Melebihi Batas '+util.format(media))
                    Resta.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                    Resta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                    }
                   break
        case 'ytmp4': case 'ytvideo': {
                   let { ytv } = require('./lib/y2mate')
                   if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                   let quality = args[1] ? args[1] : '360p'
                   let media = await ytv(text, quality)
                   if (media.filesize >= 200000) return m.reply('File Melebihi Batas '+util.format(media))
                   Resta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                   }
                   break
	    case 'getmusic': {
                  let { yta } = require('./lib/y2mate')
                  if (!text) throw `Example : ${prefix + command} 1`
                  if (!m.quoted) return m.reply('Reply Pesan')
                  if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		          let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                  if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                  let quality = args[1] ? args[1] : '128kbps'
                  let media = await yta(urls[text - 1], quality)
                  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                  Resta.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                  Resta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                  }
                  break
            case 'getvideo': {
                  let { ytv } = require('./lib/y2mate')
                  if (!text) throw `Example : ${prefix + command} 1`
                  if (!m.quoted) return m.reply('Reply Pesan')
                  if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                  let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                  if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                  let quality = args[1] ? args[1] : '360p'
                  let media = await ytv(urls[text - 1], quality)
                  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                  Resta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                  }
                 break
      case 'tiktok': {
                if (!q) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSdpahEe5/?k=1`
                if (!isUrl(q)) throw m.reply(mess.link)  
                if (!text.includes('tiktok.com')) throw m.reply(mess.link) 
                noapi.ttdownloader(`${q}`) 
               .then(result => {
                const { wm, nowm, audio } = result
                let buttons = [
                {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🏷► No Watermark'}, type: 1},
                {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🏷 ► Audio'}, type: 1} ]
                 let buttonMessage = {
                 video: { url: wm },
                 caption: `Download From ${text}`,
                 footer: 'Press The Button Below',
                 buttons: buttons,
                 headerType: 5
                 }
                 Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                 }) 
                 }
                break
   case 'tiktoknowm': {
                if (!q) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSdpahEe5/?k=1`
                if (!isUrl(q)) throw m.reply(mess.link)  
                if (!text.includes('tiktok.com')) throw m.reply(mess.link) 
                noapi.ttdownloader(`${q}`) 
               .then(result => {
                const { wm, nowm, audio } = result
                let buttons = [
                {buttonId: `tiktok ${text}`, buttonText: {displayText: '🏷► With Watermark'}, type: 1},
                {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🏷 ► Audio'}, type: 1} ]
                 let buttonMessage = {
                 video: { url: nowm },
                 caption: `Download From ${text}`,
                 footer: 'Press The Button Below',
                 buttons: buttons,
                 headerType: 5
                 }
                 Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                 }) 
                 }
                break
   case 'tiktokmp3':
   case 'tiktokmusic':{
              if (!q) return reply('Linknya?')
              if (!text.includes('tiktok.com')) throw m.reply(mess.link) 
              const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
              m.reply (mess.erro) 
              }) 
               console.log(musim_rambutan)
               const musim_duren_a = musim_rambutan.result.nowatermark
               Resta.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
               }
              break
    case 'twitdl': case 'twitter': {
                if (!q) throw `Example : ${prefix + command} https://twitter.com/britneyspears/status/1535429257614217219?s=20`
                if (!isUrl(q)) throw m.reply(mess.erro)  
                if (!text.includes('twitter.com')) throw m.reply(mess.link) 
                noapi.twitter(`${text}`) 
               .then(result => {
                const { SD, HD, audio, desc} = result
                let buttons = [
                {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}]
                let buttonMessage = {
                video: { url: HD},
                caption: desc, 
                footer: 'Press The Button Below',
                buttons: buttons,
                 headerType: 5
                 }
                 Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                 }) 
                 }
                 break
       case 'umma': case 'ummadl': {
	            if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		        let anu = await umma(isUrl(text)[0])
		        if (anu.type == 'video') {
		        let buttons = [
                {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}]
		         let buttonMessage = {
		         image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: Resta.user.name,
			buttons,
			 headerType: 4
		     }
		     Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
		     } else if (anu.type == 'image') {
		     anu.media.map(async (url) => {
		     Resta.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		     })
		     }
	         }
	         break
/*************DOWNLOAD MENU**********/

      case 'asupan':
                 if (!m.isGroup) throw mess.group
                 m.reply(mess.wait)
                 var asupan = JSON.parse(fs.readFileSync('./lib/asupan.json'))
                 var hasil = pickRandom(asupan)
                 Resta.sendMessage(m.chat, {video: {url: hasil.url}},{caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖", quoted: m})
                 break
case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Resta.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Resta.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                 }
	          break
      case 'coffe': case 'kopi': {
                 let buttons = [
                {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1} ]
                 let buttonMessage = {
                 image: { url: 'https://coffee.alexflipnote.dev/random' },
                 caption: `☕ Random Coffe`,
                 footer: Resta.user.name,
                 buttons: buttons,
                 headerType: 4
                 }
                 Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                 }
                 break
   case 'darkjokes': case 'dark': case 'darkjoke': case 'meme': case 'memeindo':
                var darkjoke = JSON.parse(fs.readFileSync('./lib/darkjokes.js')) // posisinya sesuain
                var hasil = pickRandom(darkjoke)
                Resta.sendMessage(m.chat, {caption: 'Ancrit', image: {url: hasil.result}}, {quoted: m})
                break
      case 'gombal':
      case 'gombalan':
                var gombal = JSON.parse(fs.readFileSync('./lib/gombalan.json'))
                var hasil = pickRandom(gombal)
                var gom = [
			    { quickReplyButton: { displayText: `Next Gombalan ➡️`, id: `${command}` } },]
		        Resta.sendMessage(m.chat, {text: hasil, templateButtons: gom, footer: `Cie Di Gombal Robot`, quoted: m})
		        break
    case 'bucinquotes':
                var gombal = JSON.parse(fs.readFileSync('./lib/katabucin.json'))
                var hasil = pickRandom(gombal)
                var gom = [
			    { quickReplyButton: { displayText: `Next BucinQutes ➡️`, id: `${command}` } },]
		        Resta.sendMessage(m.chat, {text: hasil, templateButtons: gom, footer: `Cie Bucin Sama Robot`, quoted: m})
		        break
   case 'katagalau':
               var quotes = JSON.parse(fs.readFileSync('./lib/katagalau.json'))
               var hasil = pickRandom(quotes)
               var gom = [
			  { quickReplyButton: { displayText: `Next Katagalau ➡️`, id: `${command}` } },]
		       Resta.sendMessage(m.chat, {text: hasil, templateButtons: gom, footer: `Cie Kang Galau Sama Bot`, quoted: m})
		       break
  case 'quotesanime': case 'quoteanime': {
		     let { quotesAnime } = require('./lib/scraper')
             let anu = await quotesAnime()
             result = anu[Math.floor(Math.random() * anu.length)]
             let buttons = [
             {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}]
              let buttonMessage = {
              text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
              footer: 'Press The Button Below',
              buttons: buttons,
              headerType: 2
               }
             Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
             break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
                }
               break
     case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
                }
               break
   case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
    case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
                }
                break
     case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
                }
                break
     case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
                }
                break
    case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
                }
                break
     case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                 break
     case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
                }
                break
   case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
    case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
    case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
                }
                break
    case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
                }
                break
    case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                 }
                 break
     case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
                }
                break
    case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
                }
                break
    case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
                }
                break
     case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
    case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                    ].reverse()
                function getZodiac(month, day) {
                let d = new Date(1970, month - 1, day)
                return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
                let zodiac = await getZodiac(birth[1], birth[2])
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                }
                break
     case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                Resta.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
               }
               break 
   case 'ringtone': {
		      if (!text) throw `Example : ${prefix + command} black rover`
              let { ringtone } = require('./lib/scraper')
		      let anu = await ringtone(text)
		      let result = anu[Math.floor(Math.random() * anu.length)]
		      Resta.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	          }
	         break
/**************BATAS FUN MRNU*********/
            case 'waifu': case 'loli':
            case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				    Resta.sendMessage(m.chat, { caption: "Random Foto Anime", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
					})
					break
		case 'anime': { 
			       if (!q) throw `Penggunaan : ${command} nama anime`
                   await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
                  .then((res) =>{
                   console.log(res)   
                   let sections = []   
                   for (let i of res.data) {
                   const list = {title: `${i.title}`,
                   rows: [{
	               title: `${i.title}\n\n`, 
	               rowId: `${prefix}animesearch ${i.mal_id}`,
	              description: `${i.synopsis}`
                   },]
                    }
                 sections.push(list)   
                    }
                const sendm =  Resta.sendMessage(m.chat,{
                text: "Anime Search",
                footer: "BOT MD",
                title: "Data Base Ada Di Button Ini",
                buttonText: "Click and see search results➡️",
                sections}, { quoted : m }
                )  
                }) 
                }
                break
      case 'animesearch':{
                await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
               .then((res) => {
                let txt = `Anime Search      \n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
                Resta.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
                })
                }
                break
       
/************BATAS WIBUUU***********/
       case 'iqra': {
		           oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		           if (!text) throw oh
		           yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		           Resta.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		           }
		           break
     case 'juzamma': {
		          if (args[0] === 'pdf') {
		          m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		         } else if (args[0] === 'docx') {
		         m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		         } else if (args[0] === 'pptx') {
		         m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		         } else if (args[0] === 'xlsx') {
		         m.reply(mess.wait)
		         Resta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		         } else {
		         m.reply(`Mau format apa ? Example : ${prefix + command} pdf
                 Format yang tersedia : pdf, docx, pptx, xlsx`)
		          }
		          }
		         break
	case 'hadis': case 'hadist': {
		       if (!args[0]) throw `Contoh:
               ${prefix + command} bukhari 1
               ${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		      if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		      try {
		      let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		      let { number, arab, id } = res.find(v => v.number == args[1])
		      m.reply(`No. ${number}
              ${arab}
              ${id}`)
		       } catch (e) {
		       m.reply(`Hadis tidak ditemukan !`)
		       }
		       }
		       break
case 'alquran': {
		       if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		       if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		       let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		       let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		        m.reply(txt)
		        Resta.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		       }
		        break
   case 'tafsirsurah': {
		      if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		      if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		      let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		      let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		      m.reply(txt)
		       }
		      break
/*************BATAS MENU ISLAM***********/   
             case 'tiktokmaker':{
            let [text1, text2] = text.split`|`
		    if (!text1) throw `Example : ${prefix + command} aku|kamu`
		    if (!text2) throw `Example : ${prefix + command} aku|kamu`
            m.reply (mess.wait) 
            Resta.sendMessage(m.chat, {caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖", image: { url: `https://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${text1}&teks2=${text2}`}}, {quoted: m})
             }
            break 
            case 'nulis2':
            case 'nulis':{
            if (!q) throw `Example : ${prefix + command} Tugasnya Mana`
            m.reply (mess.wait) 
            Resta.sendMessage(m.chat, {caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖", image: { url: `https://hadi-api.herokuapp.com/api/canvas/${command}?text=${q}`}}, {quoted: m})
             }
            break
            case 'coffee-cup': case 'shadow-sky':
            case '3d-summer': case 'underwater':
            case 'romantic-double': case 'teks-cup': case 'golden-roses':
            case 'love-messages': case 'funny-cup': case 'flower-hearth':
            case 'burn-paper':  case 'romantic-messages': case 'flaming-fire': case 'metalic-gold': case 'under-grass':   case 'wood-hearth':{
            if (!q) throw `Example : ${prefix + command} nama lu`
            m.reply (mess.wait) 
            Resta.sendMessage(m.chat, {caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/${command}?text=${q}`}}, {quoted: m})
             }
            break
  case 'horor':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
            let anui = await textpro(link, q)
            m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
case 'whitebear':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
 case 'thunder':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
 case 'blackpink':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
 case 'neon':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/neon-light-text-effect-online-882.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
case 'matrix':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
  case 'sky':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
 case 'joker':{
        	if (!q) throw `Example : ${prefix + command} nama lu`
            db.users[m.sender].limit -= 1 // -1 limit
            let link = `https://textpro.me/create-logo-joker-online-934.html`
            let anui = await textpro(link, q)
            m.reply(mess.wait) 
            console.log(anui)
            Resta.sendMessage(m.chat, {image:{url:anui}, caption: "© 🤖𝚁𝚠•𝙱𝚘𝚝~🤖"}, {quoted:m})
            }
           break
/*************BATAS MAKER OKY***********/
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Resta.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                Resta.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	case 'limit':
            m.reply(`*Sisa Limit Anda : ${global.db.users[m.sender].limit}*`)
      break          
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'inspect': {
                  if (!args[0]) return m.reply("Linknya?")
                  let linkRegex = args.join(" ")
                  let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
                  if (!coded) return m.reply("Link Invalid")
Resta.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
                    try {
                    pp = await Resta.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
                    } catch {
                    pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
                    }
                    Resta.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await Resta.parseMention(tekse) })
                     })
                     }
                     break
                     
//******OWNER MENU***////
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await Resta.downloadAndSaveMediaMessage(quoted)
                await Resta.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
     case 'owner': case 'creator': {
                Resta.sendContact(m.chat, global.owner, m)
                 }
                break
     case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Resta.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                 }
                break
     case 'leave': {
                if (!isCreator) throw mess.owner
                await Resta.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                  }
                 break
       case 'setexif': {
                 if (!isCreator) throw mess.owner
                 if (!text) throw `Example : ${prefix + command} packname|author`
                 global.packname = text.split("|")[0]
                 global.author = text.split("|")[1]
                 m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
                }
                break
      case 'block': {
		        if (!isCreator) throw mess.owner
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	            }
	            break
     case 'unblock': {
		        if (!isCreator) throw mess.owner
		        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	             }
	           break
  case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/cc3541a2a6b927d3f94aa.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6283853152230 (Owner)` }, { quoted: m })
                  }
                 break
       case 'sc': {
                  m.reply('Script : https://github.com/Restaa/bot-md\n\n\n Dont Forget Donate')
                  }
                  break
     case 'setmenu': {
                if (!isCreator) throw mess.owner
                let setbot = db.data.settings[botNumber]
                if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                Resta.sendListMsg(m.chat, `Please select the menu you want to change!`, Resta.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'menu': case 'help':{
                anu = ` Hy Kak @${pushname}
*${ucapanWaktu}*
Waktu : *${jam}*

🎨 *Game Menu*
├ ${sp}${prefix}tebaklirik
├ ${sp}${prefix}tebakkuis
├ ${sp}${prefix}tebakkata
├ ${sp}${prefix}tebakbendra
├ ${sp}${prefix}tebaklagu
├ ${sp}${prefix}siapakahaku
├ ${sp}${prefix}tebakkalimat
├ ${sp}${prefix}tebakgambar
├ ${sp}${prefix}caklontong
├ ${sp}${prefix}kuismath
├ ${sp}${prefix}tictactoe
├ ${sp}${prefix}suit @tag
│
└────⭓

🦚 *Rpg Menu*
├ ${sp}${prefix}leaderboard
├ ${sp}${prefix}mancing
├ ${sp}${prefix}menambang
├ ${sp}${prefix}berburu
├ ${sp}${prefix}heal
├ ${sp}${prefix}jual
├ ${sp}${prefix}beli
├ ${sp}${prefix}darah
├ ${sp}${prefix}bacok
│
└────⭓

🐚 *Kerang Ajaib*
├ ${sp}${prefix}jodohku
├ ${sp}${prefix}jadian
├ ${sp}${prefix}cekme
├ ${sp}${prefix}apakah
├ ${sp}${prefix}bisakah
├ ${sp}${prefix}bagaimanakah
├ ${sp}${prefix}gantengcek
├ ${sp}${prefix}cantikcek
├ ${sp}${prefix}sangecek
├ ${sp}${prefix}kapankah
├ ${sp}${prefix}rate
├ ${sp}${prefix}simi [ text ]
│
└────⭓

♻️ *Conver Menu*
├ ${sp}${prefix}styletext
├ ${sp}${prefix}sticker
├ ${sp}${prefix}emojimix [emoji+emoji]
├ ${sp}${prefix}emojimix2 [ emoji ]
├ ${sp}${prefix}attp [ text ]
├ ${sp}${prefix}ttp [ text ]
├ ${sp}${prefix}stickermeme 
├ ${sp}${prefix}toimg
├ ${sp}${prefix}ebinary
├ ${sp}${prefix}dbinary
├ ${sp}${prefix}tomp4
├ ${sp}${prefix}toaudio
├ ${sp}${prefix}tomp3
├ ${sp}${prefix}tovn
├ ${sp}${prefix}tourl
├ ${sp}${prefix}bass
├ ${sp}${prefix}blown
├ ${sp}${prefix}deep
├ ${sp}${prefix}earrape
├ ${sp}${prefix}fast
├ ${sp}${prefix}fat
├ ${sp}${prefix}nightcore
├ ${sp}${prefix}reverse
├ ${sp}${prefix}robot
├ ${sp}${prefix}slow
├ ${sp}${prefix}smooth
├ ${sp}${prefix}tupai
│
└────⭓

🏬 *Group Menu*
├ ${sp}${prefix}kick @tag
├ ${sp}${prefix}add @tag
├ ${sp}${prefix}promote @tag
├ ${sp}${prefix}demote @tag
├ ${sp}${prefix}setname [ text ]
├ ${sp}${prefix}setdesc [ text ]
├ ${sp}${prefix}tagall [ text ]
├ ${sp}${prefix}hidetag [text]
├ ${sp}${prefix}vote
├ ${sp}${prefix}upvote
├ ${sp}${prefix}devote
├ ${sp}${prefix}cekvote
├ ${sp}${prefix}delvote
├ ${sp}${prefix}group
├ ${sp}${prefix}editinfo
├ ${sp}${prefix}antilink
├ ${sp}${prefix}mute
├ ${sp}${prefix}linkgroup
├ ${sp}${prefix}ephemeral
├ ${sp}${prefix}infochat
├ ${sp}${prefix}delete
├ ${sp}${prefix}setppgroup
│
└────⭓

📡 *Search Menu*
├ ${sp}${prefix}ytsearch
├ ${sp}${prefix}google
├ ${sp}${prefix}gimage
├ ${sp}${prefix}pinterest
├ ${sp}${prefix}wallpaper
├ ${sp}${prefix}wikimedia
├ ${sp}${prefix}cecan
├ ${sp}${prefix}cogan
├ ${sp}${prefix}lirik 
│
└────⭓

📶 *Download Menu*
├ ${sp}${prefix}play
├ ${sp}${prefix}ytmp3
├ ${sp}${prefix}ytmp4
├ ${sp}${prefix}tiktok
├ ${sp}${prefix}tiktoknowm
├ ${sp}${prefix}tiktokmusic
├ ${sp}${prefix}twitter
├ ${sp}${prefix}ummadl
├ ${sp}${prefix}getmusic 
├ ${sp}${prefix}getvideo 
│
└────⭓

🎊 *Fun Menu*
├ ${sp}${prefix}asupan
├ ${sp}${prefix}couple
├ ${sp}${prefix}coffe
├ ${sp}${prefix}darkjokes
├ ${sp}${prefix}ringtone
├ ${sp}${prefix}gombal
├ ${sp}${prefix}bucinquotes
├ ${sp}${prefix}katagalau
├ ${sp}${prefix}quotesanime
├ ${sp}${prefix}nomerhoki
├ ${sp}${prefix}artimimpi
├ ${sp}${prefix}ramalanjodoh
├ ${sp}${prefix}artinama
├ ${sp}${prefix}suamiistri
├ ${sp}${prefix}ramalancinta
├ ${sp}${prefix}ramalanjodohbali
├ ${sp}${prefix}kecocokannama
├ ${sp}${prefix}pasangan
├ ${sp}${prefix}jadiannikah
├ ${sp}${prefix}sifatusaha
├ ${sp}${prefix}rejeki
├ ${sp}${prefix}pekerjaan
├ ${sp}${prefix}ramalannasib
├ ${sp}${prefix}potensipenyakit
├ ${sp}${prefix}artitarot
├ ${sp}${prefix}fengshui
├ ${sp}${prefix}haribaik
├ ${sp}${prefix}harisangar
├ ${sp}${prefix}harisial
├ ${sp}${prefix}nagahari
├ ${sp}${prefix}arahrezeki
├ ${sp}${prefix}peruntungan
├ ${sp}${prefix}wetonjawa
├ ${sp}${prefix}sifat
├ ${sp}${prefix}keberuntungan
├ ${sp}${prefix}memancing
├ ${sp}${prefix}masasubur
├ ${sp}${prefix}shio
├ ${sp}${prefix}zodiak
│
└────⭓

🎠 *Anime Menu*
├ ${sp}${prefix}waifu
├ ${sp}${prefix}loli
├ ${sp}${prefix}cry
├ ${sp}${prefix}kill
├ ${sp}${prefix}hug
├ ${sp}${prefix}pat
├ ${sp}${prefix}lick
├ ${sp}${prefix}kiss
├ ${sp}${prefix}bite
├ ${sp}${prefix}yeet
├ ${sp}${prefix}neko
├ ${sp}${prefix}bully
├ ${sp}${prefix}bonk
├ ${sp}${prefix}wink
├ ${sp}${prefix}poke
├ ${sp}${prefix}nom
├ ${sp}${prefix}slap
├ ${sp}${prefix}smile
├ ${sp}${prefix}wave
├ ${sp}${prefix}awoo
├ ${sp}${prefix}blush
├ ${sp}${prefix}smug
├ ${sp}${prefix}glomp
├ ${sp}${prefix}happy
├ ${sp}${prefix}dance
├ ${sp}${prefix}cringe
├ ${sp}${prefix}highfive
├ ${sp}${prefix}shinobu
├ ${sp}${prefix}megumin
├ ${sp}${prefix}handhold
│
└────⭓

🕋 *Islam Menu*
├ ${sp}${prefix}iqra
├ ${sp}${prefix}hadis
├ ${sp}${prefix}alquran
├ ${sp}${prefix}tafsirsurah
├ ${sp}${prefix}alquran
│
└────⭓

🎇 *Photo Oky Menu*
├ ${sp}${prefix}wood-hearth
├ ${sp}${prefix}under-grass   
├ ${sp}${prefix}metalic-gold 
├ ${sp}${prefix}flaming-fire 
├ ${sp}${prefix}romantic-messages 
├ ${sp}${prefix}burn-paper  
├ ${sp}${prefix}flower-hearth
├ ${sp}${prefix}funny-cup 
├ ${sp}${prefix}love-messages 
├ ${sp}${prefix}golden-roses
├ ${sp}${prefix}teks-cup
├ ${sp}${prefix}romantic-double
├ ${sp}${prefix}coffee-cup
├ ${sp}${prefix}shadow-sky
├ ${sp}${prefix}3d-summer
├ ${sp}${prefix}underwater
├ ${sp}${prefix}joker
├ ${sp}${prefix}sky
├ ${sp}${prefix}matrix
├ ${sp}${prefix}neon
├ ${sp}${prefix}blackpink
├ ${sp}${prefix}thunder
├ ${sp}${prefix}whitebear
├ ${sp}${prefix}horor
├ ${sp}${prefix}tiktokmaker
│
└────⭓

🖋 *Magernulis Menu*
├ ${sp}${prefix}nulis
├ ${sp}${prefix}nuli2
│
└────⭓

`
                let btn = [{
                      urlButton: {
                      displayText: 'Source Code',
                      url: 'https://github.com/Restaa/Bot-Md'
                       }
                       }, {
                       urlButton: {
                       displayText: 'WhatsApp Owner',
                        url: 'http://wa.me/6283853152230'
                         }
                         }, {
                        quickReplyButton: {
                        displayText: 'Status Bot',
                         id: 'ping'
                         }
                         }, {
                         quickReplyButton: {
                         displayText: 'Contact Owner',
                         id: 'owner'
                          }  
                          }, {
                         quickReplyButton: {
                         displayText: 'Script',
                         id: 'sc'
                           }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Resta.send5ButImg(m.chat, anu, Resta.user.name, global.thumb, btn)
                        } else if (setbot.templateGif) {
                        Resta.send5ButGif(m.chat, anu, Resta.user.name, global.visoka, btn)
                        } else if (setbot.templateVid) {
                        Resta.send5ButVid(m.chat, anu, Resta.user.name, global.visoka, btn)
                        } else if (setbot.templateMsg) {
                        Resta.send5ButMsg(m.chat, anu, Resta.user.name, btn)
                        }
                        }
                        break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
		            if (isCmd && budy.toLowerCase() != undefined) {
		            if (m.chat.endsWith('broadcast')) return
		            if (m.isBaileys) return
                    let msgs = global.db.data.database
		            if (!(budy.toLowerCase() in msgs)) return
		            Resta.opyNForward(m.chat, msgs[budy.toLowerCase()], true)
		            }
		}
    } catch (err) {
     m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
