'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {
//1- call Hana 
   robot.hear(/Hana/i, (res) => {
     res.send('لبيه عيونها ')
   })
  
   //2- by if (here two option of kind of movie )
   robot.respond(/check the (.*) movies/i, (res) => {
   const movieType = res.match[1]
  
    if (movieType === 'thriller'||'Action' ) {
      res.reply('Excitedddddddd.. bring Popcorn ')
     return}

  })
//3
  
 //build random answer from this array  with join 
  const rand = ['nice', 'great', 'beautiful ','wowWOoo']
  
   robot.respond(`/${rand.join('|')}/i`, (res) => {
     res.send(res.random(rand))
   })



 //4- if user ask question repond with link 
   robot.respond(/How update profile pic on slack/, (res) => {
    
      res.send(' Easyyyy.. check this link https://get.slack.help/hc/en-us/articles/115005506003-Upload-a-profile-photo')
      return
    })
 


  //6- if count number of say Hello

   robot.respond(/Hello/i, (response) => {
     // Get number of Hello 
   const counthello = +robot.brain.get('hellotot') || 0
  
     if (counthello > 2) {
      response.reply('I am a wayyyyyy')
       return
     }
  
     response.reply('I take a break')
     robot.brain.set('hellotot', counthello+ 1)
   })

  //- Leave bot by say I sleep
   robot.respond(/I sleep  off/i, (res) => {
     robot.brain.set('hellotot', 0)
    res.reply('zzzzz')
   })
}
