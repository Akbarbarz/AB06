const help = (tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit) => { 
	return `❲ *${namabot}* ❳
${tz} *OWNER* : ${nama}
${tz} *BOTNAME* : ${namabot}
${tz} *PREFIX* : *${prefix}* 
${tz} *TGGAL* : ${day}
${tz} *HARI KE* : ${yy}
${tz} *HARI* : ${thisDay}
${tz} *BULAN* : ${bulan}
${tz} *WIB* : ${wib}
${tz} *WITA* : ${wita}
${tz} *WIT* : ${wit}

❲ *RANDOM TEXT* ❳
${tz} *${prefix}search*
${tz} *${prefix}asupan*
${tz} *${prefix}textpro*
${tz} *${prefix}vcardrandom*
${tz} *${prefix}tagrandom*
${tz} *${prefix}sticktagrandom*
${tz} *${prefix}raterandom*
${tz} *${prefix}randomtext*
${tz} *${prefix}randommenu*
${tz} *${prefix}randomanime*
${tz} *${prefix}ownermenu*
${tz} *${prefix}imageanime*
${tz} *${prefix}gamemenu*
${tz} *${prefix}grubmenu*
${tz} *${prefix}audiomenu*

❲ *INFO LAIN* ❳
${tz} Jika bot tidak merespon, mungkin bot sedang off
${tz} bot tidak menyimpan riwayat foto/media
${tz} Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
${tz} Jika menemukan bug/err silahkan hubungi owner
`
}
exports.help = help